import type { SaveDocumentPayload } from '../types/document';
import type { LoginCredentials, RegisterData, AuthResponse } from '../types/user';
import { API_BASE_URL, CACHE_PREFIX, CACHE_EXPIRY_MS, TOKEN_KEY } from '../config';

/**
 * Service API — Abstraksi fetch dengan auth token.
 * Semua method return typed data.
 */
class ApiService {

  private setCache(key: string, data: any) {
    const cacheData = { timestamp: Date.now(), data };
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(cacheData));
  }

  private getCache<T>(key: string): T | null {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cached) return null;
    try {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp > CACHE_EXPIRY_MS) {
        localStorage.removeItem(`${CACHE_PREFIX}${key}`);
        return null;
      }
      return data as T;
    } catch {
      return null;
    }
  }

  public clearCache() {
    Object.keys(localStorage)
      .filter(key => key.startsWith(CACHE_PREFIX))
      .forEach(key => localStorage.removeItem(key));
  }

  private getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private log(method: string, endpoint: string, status: 'SUCCESS' | 'ERROR', data?: any) {
    const colors = {
      GET: 'color: #3b82f6; font-weight: bold',
      POST: 'color: #10b981; font-weight: bold',
      PUT: 'color: #f59e0b; font-weight: bold',
      PATCH: 'color: #f59e0b; font-weight: bold',
      DELETE: 'color: #ef4444; font-weight: bold',
      SUCCESS: 'background: #10b981; color: white; padding: 2px 5px; border-radius: 3px; font-weight: bold',
      ERROR: 'background: #ef4444; color: white; padding: 2px 5px; border-radius: 3px; font-weight: bold'
    };

    const methodColor = (colors as any)[method] || 'color: gray';
    const statusColor = (colors as any)[status];

    console.groupCollapsed(
      `%c ${method} %c ${endpoint} %c ${status} `,
      methodColor,
      'color: inherit; font-weight: normal',
      statusColor
    );
    if (data) {
      console.log('Payload/Response:', data);
    }
    console.groupEnd();
  }

  async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const method = options.method || 'GET';
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers as Record<string, string> || {}),
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      const data = await response.json();

      if (!response.ok) {
        this.log(method, endpoint, 'ERROR', data);
        throw new Error(data.error || 'Terjadi kesalahan');
      }

      this.log(method, endpoint, 'SUCCESS', data);
      return data as T;
    } catch (error: any) {
      if (!(error instanceof SyntaxError)) {
        this.log(method, endpoint, 'ERROR', error.message);
      }
      throw error;
    }
  }

  // === Auth ===
  login(credentials: LoginCredentials): Promise<AuthResponse> {
    this.clearCache();
    return this.request<AuthResponse>('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
  }

  register(data: RegisterData): Promise<AuthResponse> {
    this.clearCache();
    return this.request<AuthResponse>('/auth/register', { method: 'POST', body: JSON.stringify(data) });
  }

  async getMe(): Promise<import('../types/user').User> {
    const cached = this.getCache<import('../types/user').User>('user');
    if (cached) return cached;

    const data = await this.request<import('../types/user').User>('/auth/me');
    this.setCache('user', data);
    return data;
  }

  async updateUser(data: { 
    name?: string; 
    headline?: string; 
    bio?: string; 
    location?: string; 
    profileImageUrl?: string;
    socialLinks?: { platform: string, url: string }[];
    phones?: { number: string, label: string }[];
  }): Promise<import('../types/user').User> {
    const res = await this.request('/auth/profile', { method: 'PUT', body: JSON.stringify(data) });
    this.setCache('user', res); // Update cache with fresh data
    return res;
  }

  // === Documents ===
  async getDocuments(): Promise<import('../types/enums').RecentDocument[]> {
    const cached = this.getCache<import('../types/enums').RecentDocument[]>('documents');
    if (cached) return cached;

    const data = await this.request<import('../types/enums').RecentDocument[]>('/documents');
    this.setCache('documents', data);
    return data;
  }

  async getDocument(id: string): Promise<any> {
    return this.request(`/documents/${id}`);
  }

  async saveDocument(doc: SaveDocumentPayload): Promise<any> {
    const res = await this.request('/documents', { method: 'POST', body: JSON.stringify(doc) });
    localStorage.removeItem(`${CACHE_PREFIX}documents`);
    return res;
  }

  async updateDocument(id: string, data: Partial<SaveDocumentPayload>): Promise<any> {
    const res = await this.request(`/documents/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
    localStorage.removeItem(`${CACHE_PREFIX}documents`);
    return res;
  }

  async deleteDocument(id: string): Promise<any> {
    const res = await this.request(`/documents/${id}`, { method: 'DELETE' });
    localStorage.removeItem(`${CACHE_PREFIX}documents`);
    return res;
  }

  // === Chat ===
  saveChatMessage(msg: { content: string; role: string }): Promise<any> {
    return this.request('/chat', { method: 'POST', body: JSON.stringify(msg) });
  }

  getChatHistory(): Promise<any[]> {
    return this.request('/chat');
  }

  generateAiChat(prompt: string, documentId?: string): Promise<{ id: string, content: string, role: string }> {
    return this.request('/chat/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt, documentId })
    });
  }
}

/** Singleton API instance */
export const api = new ApiService();
