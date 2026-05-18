import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';
import { TOKEN_KEY } from '../config';
import type { User, LoginCredentials, RegisterData } from '../types/user';
import { DEFAULT_AVATAR } from '../types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  /** Cek session dari token yang tersimpan */
  const checkSession = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
      return;
    }

    try {
      const data = await api.getMe();
      const user: User = {
        ...data,
          subscriptionTier: data.subscriptionTier || 'BIASA',
        aiCredits: data.aiCredits ?? 0,
        profileImageUrl: data.profileImageUrl || DEFAULT_AVATAR,
        portfolioViews: data.portfolioViews ?? 0,
      };
      setState({ user, isAuthenticated: true, isLoading: false, error: null });
    } catch {
      localStorage.removeItem(TOKEN_KEY);
      setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
    }
  }, []);

  /** Login dan simpan token */
  const login = useCallback(async (credentials: LoginCredentials) => {
    setState(s => ({ ...s, isLoading: true, error: null }));
    try {
      const { token, user: userData } = await api.login(credentials);
      localStorage.setItem(TOKEN_KEY, token);
      const user: User = {
        ...userData,
        profileImageUrl: userData.profileImageUrl || DEFAULT_AVATAR,
      };
      setState({ user, isAuthenticated: true, isLoading: false, error: null });
      return true;
    } catch (err: any) {
      setState(s => ({ ...s, isLoading: false, error: err.message || 'Login gagal' }));
      return false;
    }
  }, []);

  /** Register user baru */
  const register = useCallback(async (data: RegisterData) => {
    setState(s => ({ ...s, isLoading: true, error: null }));
    try {
      const { token, user: userData } = await api.register(data);
      localStorage.setItem(TOKEN_KEY, token);
      const user: User = {
        ...userData,
        profileImageUrl: userData.profileImageUrl || DEFAULT_AVATAR,
      };
      setState({ user, isAuthenticated: true, isLoading: false, error: null });
      return true;
    } catch (err: any) {
      setState(s => ({ ...s, isLoading: false, error: err.message || 'Registrasi gagal' }));
      return false;
    }
  }, []);

  /** Logout dan bersihkan state */
  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    api.clearCache();
    setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
  }, []);

  /** Clear error */
  const clearError = useCallback(() => {
    setState(s => ({ ...s, error: null }));
  }, []);

  // Check session on mount
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return {
    ...state,
    login,
    register,
    logout,
    clearError,
    checkSession,
  };
}
