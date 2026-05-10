import type { UserRole, SubscriptionTier } from './types';

// ===================================================================
// USER MODEL
// ===================================================================

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  aiCredits: number;
  profileImageUrl?: string;
  location?: string;
  portfolioViews?: number;
}
// ===================================================================
// AUTH INTERFACES
// ===================================================================

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// ===================================================================
// DEFAULTS
// ===================================================================

/** Avatar default jika user belum upload foto */
export const DEFAULT_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231E3A5F'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%2364B5F6'/%3E%3Cellipse cx='50' cy='90' rx='30' ry='22' fill='%2364B5F6'/%3E%3C/svg%3E";
