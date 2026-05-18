// ===================================================================
// FRONTEND CONFIG — Semua constants & environment values di satu tempat.
// Ubah nilai di sini (atau via .env) tanpa perlu cari-cari di kodebase.
// ===================================================================

/** Base URL API backend. Override via VITE_API_URL di file .env */
export const API_BASE_URL: string =
  (import.meta as any).env?.VITE_API_URL ?? detectApiUrl();

function detectApiUrl(): string {
  if (typeof window === 'undefined') return 'http://localhost:5000/api';
  const { hostname } = window.location;
  const isLocal =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.startsWith('192.168.');
  return isLocal ? 'http://localhost:5000/api' : '/api';
}

// ===================================================================
// CACHE
// ===================================================================

/** Prefix untuk semua cache key di localStorage */
export const CACHE_PREFIX = 'jago_cache_';

/** Durasi cache (default: 30 menit) */
export const CACHE_EXPIRY_MS = 30 * 60 * 1000;

// ===================================================================
// LOCALSTORAGE KEYS
// ===================================================================

/** Key token JWT di localStorage */
export const TOKEN_KEY = 'token';

/** Key tema (light/dark) di localStorage */
export const THEME_KEY = 'theme';

// ===================================================================
// APP DEFAULTS
// ===================================================================

/** Default subscription tier untuk user baru */
export const DEFAULT_SUBSCRIPTION_TIER = 'BIASA' as const;

/** Default AI credits untuk user baru */
export const DEFAULT_AI_CREDITS = 10;

/** Default template dokumen */
export const DEFAULT_TEMPLATE_ID = 'standard';

/** Default font family dokumen */
export const DEFAULT_FONT_FAMILY = 'Inter';

/** Default theme color dokumen */
export const DEFAULT_THEME_COLOR = 'blue';
