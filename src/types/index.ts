export interface Template {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

export interface Strategy {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PromptResult {
  original: string;
  enhanced: string;
  suggestions: string[];
  score: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  preferences?: {
    defaultModel: string;
    defaultTemplate: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 