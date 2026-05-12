import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';
import type { User, LoginCredentials, RegisterData } from '../models/user';
import { DEFAULT_AVATAR } from '../models/user';

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
    const token = localStorage.getItem('token');
    if (!token) {
      setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
      return;
    }

    try {
      const data = await api.getMe();
      const user: User = {
        ...data,
        role: data.role || 'USER',
        subscriptionTier: data.subscriptionTier || 'BIASA',
        aiCredits: data.aiCredits ?? 0,
        profileImageUrl: data.profileImageUrl || DEFAULT_AVATAR,
        portfolioViews: data.portfolioViews ?? 0,
      };
      setState({ user, isAuthenticated: true, isLoading: false, error: null });
    } catch {
      localStorage.removeItem('token');
      setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
    }
  }, []);

  /** Login dan simpan token */
  const login = useCallback(async (credentials: LoginCredentials) => {
    setState(s => ({ ...s, isLoading: true, error: null }));
    try {
      const { token, user: userData } = await api.login(credentials);
      localStorage.setItem('token', token);
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
      localStorage.setItem('token', token);
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
    localStorage.removeItem('token');
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
