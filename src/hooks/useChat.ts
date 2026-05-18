import { useState, useCallback, useEffect } from 'react';
import { api } from '../services/api';

interface ChatMessage {
  id: string;
  content: string;
  role: 'USER' | 'ASSISTANT';
  timestamp: Date;
}

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  isSending: boolean;
}

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    isSending: false,
  });

  /** Kirim pesan user dan dapatkan respons AI */
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      content: content.trim(),
      role: 'USER',
      timestamp: new Date(),
    };

    setState(s => ({
      ...s,
      messages: [...s.messages, userMsg],
      isSending: true,
    }));

    // Kirim prompt ke AI via backend
    try {
      const response = await api.generateAiChat(userMsg.content);
      
      const aiMsg: ChatMessage = {
        id: response.id,
        content: response.content,
        role: 'ASSISTANT',
        timestamp: new Date(),
      };

      setState(s => ({
        ...s,
        messages: [...s.messages, aiMsg],
        isSending: false,
      }));
    } catch (err) {
      console.error('Gagal mendapat respons AI:', err);
      setState(s => ({ ...s, isSending: false }));
    }
  }, []);

  /** Load chat history */
  const loadHistory = useCallback(async () => {
    setState(s => ({ ...s, isLoading: true }));
    try {
      const history = await api.getChatHistory();
      const messages: ChatMessage[] = history.map((m: any) => ({
        id: m.id,
        content: m.content,
        role: m.role,
        timestamp: new Date(m.createdAt),
      }));
      setState({ messages, isLoading: false, isSending: false });
    } catch {
      setState(s => ({ ...s, isLoading: false }));
    }
  }, []);

  /** Clear semua messages */
  const clearMessages = useCallback(() => {
    setState({ messages: [], isLoading: false, isSending: false });
  }, []);

  return {
    ...state,
    sendMessage,
    loadHistory,
    clearMessages,
  };
}
