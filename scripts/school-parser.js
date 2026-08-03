(function () {
    const formatTimestamp = () => {
        const date = new Date();
        const stamp = date.toISOString();
        return stamp.replace('T', ' ').replace('Z', '');
    };

    function createLogger(scope = 'school-parser') {
        const events = [];
        const errors = [];

        const emit = (level, message, meta = {}) => {
            const entry = {
                ts: formatTimestamp(),
                level,
                scope,
                message,
                meta
            };
            events.push(entry);
            if (level === 'error') {
                errors.push(entry);
                console.error(`[${entry.ts}] [${scope}] ${message}`, meta);
            } else if (level === 'warn') {
                console.warn(`[${entry.ts}] [${scope}] ${message}`, meta);
            } else {
                console.log(`[${entry.ts}] [${scope}] ${message}`, meta);
            }
            return entry;
        };

        return {
            events,
            errors,
            info: (message, meta = {}) => emit('info', message, meta),
            warn: (message, meta = {}) => emit('warn', message, meta),
            error: (message, meta = {}) => emit('error', message, meta),
            step: (message, meta = {}) => emit('info', `STEP: ${message}`, meta),
            clear: () => {
                events.length = 0;
                errors.length = 0;
            },
            snapshot: () => ({
                events: [...events],
                errors: [...errors]
            })
        };
    }

    const safeLog = (app, level, source, message, meta = {}) => {
        const logger = app && app.parseLogger ? app.parseLogger : createLogger('BECEApp');
        const entry = {
            ts: formatTimestamp(),
            level,
            source,
            message,
            meta: { ...meta, source }
        };

        if (app) {
            app.parseLog = app.parseLog || [];
            app.parseErrors = app.parseErrors || [];
            app.parseLog.push(entry);
            if (level === 'error') {
                app.parseErrors.push(entry);
            }
        }

        if (level === 'error') {
            logger.error(message, { ...meta, source });
        } else if (level === 'warn') {
            logger.warn(message, { ...meta, source });
        } else {
            logger.info(message, { ...meta, source });
        }

        return entry;
    };

    window.SchoolParsingLogger = { createLogger };
    window.SchoolParsingUtils = { safeLog };
})();
