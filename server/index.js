import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './db.js';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// === 1. TEMPLATES API ===
app.get('/api/templates', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM templates WHERE is_active = 1');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching templates:', error);
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
});

// === 2. DOCUMENTS API ===
app.get('/api/documents', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM documents ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

// === 3. AI PROXY API ===
app.post('/api/ai/chat', async (req, res) => {
  const { messages, temperature } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages format' });
  }

  const API_KEY = process.env.AI_API_KEY;
  const API_URL = process.env.AI_API_URL || 'https://pc-ai.kroombox.com/v1/chat/completions';
  
  if (!API_KEY) {
    return res.status(500).json({ error: 'AI Proxy is not configured with an API key.' });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Model can be modified if OSS provides specific ones
        messages: messages,
        temperature: temperature || 0.7
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('AI API Error:', errText);
      return res.status(response.status).json({ error: 'AI API responded with an error.' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy Fetch Error:', error);
    res.status(500).json({ error: 'Failed to communicate with AI API' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ JagoCV Backend Server running on http://localhost:${PORT}`);
});
