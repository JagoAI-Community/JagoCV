export interface AiMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function generateAiCompletion(messages: AiMessage[]): Promise<string> {
  try {
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });

    if (!response.ok) {
      throw new Error(`AI Request Failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Maaf, AI tidak mengembalikan respon.';
  } catch (error) {
    console.error('AI Error:', error);
    throw error;
  }
}
