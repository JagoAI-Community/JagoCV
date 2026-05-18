// ===================================================================
// BACKEND CONFIG — Semua env vars dan constants di satu tempat.
// Jangan pernah hardcode nilai ini langsung di kode.
// ===================================================================

import dotenv from 'dotenv';
dotenv.config();

// ===================================================================
// VALIDASI — Gagal cepat jika env wajib tidak ada
// ===================================================================

if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET tidak ditemukan di environment variables. Server dihentikan.');
  process.exit(1);
}

// ===================================================================
// SERVER
// ===================================================================

export const PORT = Number(process.env.PORT) || 5000;

// ===================================================================
// AUTH
// ===================================================================

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_EXPIRES_IN = '7d';
export const BCRYPT_SALT_ROUNDS = 12;

// ===================================================================
// AI
// ===================================================================

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? '';
export const GEMINI_MODEL = process.env.GEMINI_MODEL ?? 'gemini-1.5-flash';

// ===================================================================
// CORS
// ===================================================================

const DEFAULT_CORS_ORIGINS = 'http://localhost:3000,http://localhost:5173,http://127.0.0.1:5173';
export const CORS_ORIGINS = (process.env.CORS_ORIGINS ?? DEFAULT_CORS_ORIGINS).split(',');

// ===================================================================
// PAGINATION & LIMITS
// ===================================================================

export const AI_LOG_LIMIT = Number(process.env.AI_LOG_LIMIT) || 50;

// ===================================================================
// DOCUMENT DEFAULTS
// ===================================================================

export const DEFAULT_TEMPLATE_ID = 'standard';
export const DEFAULT_FONT_FAMILY = 'Inter';
export const DEFAULT_THEME_COLOR = 'blue';

