import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';
import type { RecentDocument, UserDashboardData } from '../types/enums';

interface DashboardState {
  data: UserDashboardData | null;
  isLoading: boolean;
  error: string | null;
}

export function useDashboard() {
  const [state, setState] = useState<DashboardState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchDashboard = useCallback(async () => {
    setState(s => ({ ...s, isLoading: true, error: null }));
    try {
      const docs = await api.getDocuments();
      const meData = await api.getMe();

      const dashboardData: UserDashboardData = {
        name: meData.name || 'Pengguna',
        profileImageUrl: meData.profileImageUrl || '',
        subscriptionTier: meData.subscriptionTier || 'BIASA',
        aiCredits: meData.aiCredits ?? 0,
        portfolioViews: meData.portfolioViews ?? 0,
        recentDocs: docs.map((d: any): RecentDocument => ({
          id: d.id,
          title: d.title,
          type: d.type,
          status: d.status,
          createdAt: d.createdAt,
          templateId: d.templateId,
          fontFamily: d.fontFamily,
          themeColor: d.themeColor,
          deletedAt: d.deletedAt,
        })),
      };

      setState({ data: dashboardData, isLoading: false, error: null });
    } catch (err: any) {
      setState({ data: null, isLoading: false, error: err.message || 'Gagal memuat data' });
    }
  }, []);

  const deleteDocument = useCallback(async (id: string) => {
    try {
      await api.deleteDocument(id);
      setState(s => {
        if (!s.data) return s;
        return {
          ...s,
          data: {
            ...s.data,
            recentDocs: s.data.recentDocs.filter(d => d.id !== id),
          },
        };
      });
      return true;
    } catch (err: any) {
      console.error('Gagal menghapus dokumen:', err);
      return false;
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    ...state,
    refresh: fetchDashboard,
    deleteDocument,
  };
}
