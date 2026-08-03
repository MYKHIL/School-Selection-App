import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// API endpoint for Python radial school pairings
app.post('/api/generate-radial-pairings', (req, res) => {
  const candidateData = req.body;
  if (!candidateData) {
    return res.status(400).json({ error: 'Missing candidate data payload' });
  }

  const pyScript = path.join(__dirname, 'scripts', 'radial_pairing.py');
  const pythonProc = spawn('python3', [pyScript]);

  let stdoutData = '';
  let stderrData = '';

  pythonProc.stdout.on('data', (data) => {
    stdoutData += data.toString();
  });

  pythonProc.stderr.on('data', (data) => {
    stderrData += data.toString();
  });

  pythonProc.on('close', (code) => {
    if (code !== 0) {
      console.error('Python process failed:', stderrData);
      return res.status(500).json({ error: 'Python radial pairing calculation failed', details: stderrData });
    }

    try {
      const parsed = JSON.parse(stdoutData);
      return res.json(parsed);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to parse Python output', rawOutput: stdoutData });
    }
  });

  pythonProc.stdin.write(JSON.stringify(candidateData));
  pythonProc.stdin.end();
});

// Serve index.html for navigation routes (SPA fallback), skip static asset requests
app.get('*', (req, res) => {
  if (req.path.includes('.') && !req.path.endsWith('.html')) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
