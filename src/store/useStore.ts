import { create } from 'zustand';
import { Template, PromptResult, User } from '@/types';

interface Store {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;

  // Prompt state
  currentPrompt: string;
  promptResult: PromptResult | null;
  setPrompt: (prompt: string) => void;
  setPromptResult: (result: PromptResult | null) => void;

  // Template state
  selectedTemplate: Template | null;
  setTemplate: (template: Template | null) => void;

  // Model state
  selectedModel: string;
  setModel: (model: string) => void;

  // UI state
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  // User state
  user: null,
  setUser: (user) => set({ user }),

  // Prompt state
  currentPrompt: '',
  promptResult: null,
  setPrompt: (prompt) => set({ currentPrompt: prompt }),
  setPromptResult: (result) => set({ promptResult: result }),

  // Template state
  selectedTemplate: null,
  setTemplate: (template) => set({ selectedTemplate: template }),

  // Model state
  selectedModel: 'GPT-4',
  setModel: (model) => set({ selectedModel: model }),

  // UI state
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
})); 