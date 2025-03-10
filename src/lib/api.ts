import axios from 'axios';
import { PromptResult, ApiResponse } from '@/types';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const optimizePrompt = async (
  prompt: string,
  model: string
): Promise<ApiResponse<PromptResult>> => {
  try {
    const response = await api.post<ApiResponse<PromptResult>>('/optimize', {
      prompt,
      model,
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to optimize prompt',
    };
  }
};

export const saveTemplate = async (
  title: string,
  content: string,
  description: string,
  category: string
): Promise<ApiResponse<void>> => {
  try {
    const response = await api.post<ApiResponse<void>>('/templates', {
      title,
      content,
      description,
      category,
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to save template',
    };
  }
}; 