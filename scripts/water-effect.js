(function () {
    class WaterEffect {
        constructor() {
            this.injectPanelGlassCSS();

            // Background Canvas (behind all panels)
            this.bgCanvas = document.createElement('canvas');
            this.bgCanvas.id = 'water-canvas-bg';
            this.bgCanvas.className = 'fixed inset-0 w-full h-full pointer-events-none no-print';
            this.bgCanvas.style.zIndex = '-1';
            this.bgCanvas.style.position = 'fixed';
            this.bgCanvas.style.top = '0';
            this.bgCanvas.style.left = '0';
            document.body.prepend(this.bgCanvas);
            this.bgCtx = this.bgCanvas.getContext('2d');

            // Foreground Canvas (over top of panels for caustics & surface flow)
            this.fgCanvas = document.createElement('canvas');
            this.fgCanvas.id = 'water-canvas-fg';
            this.fgCanvas.className = 'fixed inset-0 w-full h-full pointer-events-none no-print';
            this.fgCanvas.style.zIndex = '40';
            this.fgCanvas.style.position = 'fixed';
            this.fgCanvas.style.top = '0';
            this.fgCanvas.style.left = '0';
            document.body.appendChild(this.fgCanvas);
            this.fgCtx = this.fgCanvas.getContext('2d');

            this.time = 0;
            this.ripples = [];
            this.bubbles = [];
            this.causticRibbons = [];

            this.resize();
            window.addEventListener('resize', () => this.resize());

            // Interactive ripples on pointer move & click
            window.addEventListener('pointermove', (e) => this.addRipple(e.clientX, e.clientY, 0.4), { passive: true });
            window.addEventListener('pointerdown', (e) => this.addRipple(e.clientX, e.clientY, 1.0), { passive: true });

            this.initParticles();
            this.animate = this.animate.bind(this);
            requestAnimationFrame(this.animate);
        }

        injectPanelGlassCSS() {
            if (document.getElementById('water-panel-glass-style')) return;
            const style = document.createElement('style');
            style.id = 'water-panel-glass-style';
            style.textContent = `
                /* Make main containers and panels translucent so water flows through */
                @media print {
                    .no-print, #water-canvas-bg, #water-canvas-fg { display: none !important; }
                }

                body {
                    background: transparent !important;
                }

                /* Panel glassmorphism and animated water shimmer */
                .bg-white,
                div[class*="bg-white"],
                section[class*="bg-white"],
                .bg-slate-50,
                div[class*="bg-slate-50"] {
                    background-color: rgba(255, 255, 255, 0.82) !important;
                    backdrop-filter: blur(12px) saturate(140%) !important;
                    -webkit-backdrop-filter: blur(12px) saturate(140%) !important;
                    border-color: rgba(226, 232, 240, 0.8) !important;
                    box-shadow: 0 4px 20px -2px rgba(14, 165, 233, 0.08), 0 2px 6px -1px rgba(16, 185, 129, 0.06) !important;
                }

                /* Glass effect for headers and navigation sticky bars */
                header {
                    background: linear-gradient(135deg, rgba(6, 78, 59, 0.92), rgba(17, 94, 89, 0.90), rgba(49, 46, 129, 0.92)) !important;
                    backdrop-filter: blur(16px) !important;
                    -webkit-backdrop-filter: blur(16px) !important;
                }

                /* Sticky tab bar glass */
                #app-top-sticky > div,
                nav.inline-flex {
                    background-color: rgba(241, 245, 249, 0.78) !important;
                    backdrop-filter: blur(10px) !important;
                }

                /* Modals & Popovers glass */
                #school-picker-modal > div,
                #grades-modal > div,
                #student-print-modal > div,
                #db-viewer-modal > div,
                #modal-filter-popover > div {
                    background-color: rgba(255, 255, 255, 0.92) !important;
                    backdrop-filter: blur(20px) !important;
                    box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.25) !important;
                }

                /* Active table rows & cards water glow */
                tr:hover, .hover\\:border-emerald-500:hover {
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 0 15px rgba(16, 185, 129, 0.15) !important;
                }
            `;
            document.head.appendChild(style);
        }

        resize() {
            this.width = this.bgCanvas.width = this.fgCanvas.width = window.innerWidth;
            this.height = this.bgCanvas.height = this.fgCanvas.height = window.innerHeight;
            this.initParticles();
        }

        initParticles() {
            this.bubbles = [];
            const bubbleCount = Math.min(35, Math.floor(this.width / 40));
            for (let i = 0; i < bubbleCount; i++) {
                this.bubbles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    radius: Math.random() * 8 + 3,
                    speedY: Math.random() * 0.6 + 0.25,
                    swaySpeed: Math.random() * 0.025 + 0.008,
                    swayOffset: Math.random() * Math.PI * 2,
                    alpha: Math.random() * 0.35 + 0.15
                });
            }

            this.causticRibbons = [];
            for (let i = 0; i < 5; i++) {
                this.causticRibbons.push({
                    yRatio: 0.15 + i * 0.18,
                    amplitude: 20 + Math.random() * 20,
                    frequency: 0.002 + Math.random() * 0.002,
                    speed: (i % 2 === 0 ? 1 : -1) * (0.012 + Math.random() * 0.01)
                });
            }
        }

        addRipple(x, y, intensity = 0.5) {
            if (this.ripples.length > 12) this.ripples.shift();
            this.ripples.push({
                x,
                y,
                radius: 4,
                maxRadius: 80 + intensity * 60,
                alpha: 0.45 * intensity,
                speed: 1.8 + intensity * 1.2
            });
        }

        animate() {
            this.time += 0.015;
            this.bgCtx.clearRect(0, 0, this.width, this.height);
            this.fgCtx.clearRect(0, 0, this.width, this.height);

            // ================= BACKGROUND WATER FLOW =================
            // 1. Fluid Gradient Water Base
            const bgGrad = this.bgCtx.createLinearGradient(0, 0, this.width, this.height);
            bgGrad.addColorStop(0, '#ecfdf5');    // Mint water tint
            bgGrad.addColorStop(0.35, '#e0f2fe');  // Sky blue water
            bgGrad.addColorStop(0.7, '#f0f9ff');   // Light cyan mist
            bgGrad.addColorStop(1, '#f8fafc');    // Fresh slate
            this.bgCtx.fillStyle = bgGrad;
            this.bgCtx.fillRect(0, 0, this.width, this.height);

            // 2. Multi-layered Animated Flowing Waves
            const waves = [
                { amplitude: 32, frequency: 0.003, speed: 0.014, color: 'rgba(16, 185, 129, 0.11)', offsetY: this.height * 0.18 },
                { amplitude: 40, frequency: 0.0022, speed: -0.011, color: 'rgba(14, 165, 233, 0.13)', offsetY: this.height * 0.38 },
                { amplitude: 28, frequency: 0.0048, speed: 0.018, color: 'rgba(20, 184, 166, 0.12)', offsetY: this.height * 0.58 },
                { amplitude: 45, frequency: 0.0018, speed: -0.008, color: 'rgba(56, 189, 248, 0.09)', offsetY: this.height * 0.78 }
            ];

            waves.forEach((wave, idx) => {
                this.bgCtx.beginPath();
                this.bgCtx.moveTo(0, this.height);

                for (let x = 0; x <= this.width + 20; x += 20) {
                    const y = Math.sin(x * wave.frequency + this.time * wave.speed * 60 + idx * 1.6) * wave.amplitude +
                              Math.cos(x * 0.0015 - this.time * 0.4) * (wave.amplitude * 0.5) +
                              wave.offsetY;
                    this.bgCtx.lineTo(x, y);
                }

                this.bgCtx.lineTo(this.width, this.height);
                this.bgCtx.lineTo(0, this.height);
                this.bgCtx.closePath();
                this.bgCtx.fillStyle = wave.color;
                this.bgCtx.fill();
            });

            // 3. Floating Caustic Bubbles
            this.bubbles.forEach((b) => {
                b.y -= b.speedY;
                b.x += Math.sin(this.time * b.swaySpeed * 10 + b.swayOffset) * 0.5;

                if (b.y < -20) {
                    b.y = this.height + 20;
                    b.x = Math.random() * this.width;
                }

                const bubbleGrad = this.bgCtx.createRadialGradient(
                    b.x, b.y, 0,
                    b.x, b.y, b.radius
                );
                bubbleGrad.addColorStop(0, `rgba(255, 255, 255, ${b.alpha * 1.2})`);
                bubbleGrad.addColorStop(0.5, `rgba(186, 230, 253, ${b.alpha * 0.6})`);
                bubbleGrad.addColorStop(1, 'rgba(186, 230, 253, 0)');

                this.bgCtx.fillStyle = bubbleGrad;
                this.bgCtx.beginPath();
                this.bgCtx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                this.bgCtx.fill();
            });

            // ================= FOREGROUND PANEL WATER OVERLAY =================
            // 4. Flowing Light Caustic Currents across panel surface
            this.causticRibbons.forEach((ribbon, idx) => {
                const yBase = this.height * ribbon.yRatio;
                this.fgCtx.beginPath();

                for (let x = 0; x <= this.width + 25; x += 25) {
                    const y = yBase +
                        Math.sin(x * ribbon.frequency + this.time * ribbon.speed * 50) * ribbon.amplitude +
                        Math.cos(x * 0.003 + this.time * 0.3) * (ribbon.amplitude * 0.4);
                    if (x === 0) this.fgCtx.moveTo(x, y);
                    else this.fgCtx.lineTo(x, y);
                }

                this.fgCtx.strokeStyle = idx % 2 === 0
                    ? `rgba(56, 189, 248, ${0.12 + Math.sin(this.time + idx) * 0.04})`
                    : `rgba(16, 185, 129, ${0.10 + Math.cos(this.time + idx) * 0.04})`;
                this.fgCtx.lineWidth = 3.5;
                this.fgCtx.stroke();
            });

            // 5. Interactive Ripples on both BG and FG
            for (let i = this.ripples.length - 1; i >= 0; i--) {
                const r = this.ripples[i];
                r.radius += r.speed;
                r.alpha -= 0.008;

                if (r.alpha <= 0 || r.radius >= r.maxRadius) {
                    this.ripples.splice(i, 1);
                    continue;
                }

                // BG ripple (large)
                this.bgCtx.beginPath();
                this.bgCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                this.bgCtx.strokeStyle = `rgba(16, 185, 129, ${r.alpha})`;
                this.bgCtx.lineWidth = 2.5;
                this.bgCtx.stroke();

                // FG surface ripple over cards & panels
                this.fgCtx.beginPath();
                this.fgCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                this.fgCtx.strokeStyle = `rgba(56, 189, 248, ${r.alpha * 0.75})`;
                this.fgCtx.lineWidth = 1.8;
                this.fgCtx.stroke();

                this.fgCtx.beginPath();
                this.fgCtx.arc(r.x, r.y, Math.max(1, r.radius - 8), 0, Math.PI * 2);
                this.fgCtx.strokeStyle = `rgba(20, 184, 166, ${r.alpha * 0.45})`;
                this.fgCtx.lineWidth = 1.2;
                this.fgCtx.stroke();
            }

            requestAnimationFrame(this.animate);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new WaterEffect());
    } else {
        new WaterEffect();
    }
})();
