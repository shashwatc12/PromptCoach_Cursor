import { supabase } from './supabase';

interface Prompt {
  id: string;
  original_prompt: string;
  enhanced_prompt: string | null;
  created_at: string;
}

export const promptService = {
  async savePrompt(originalPrompt: string, enhancedPrompt: string): Promise<void> {
    const { error } = await supabase.from('prompts').insert({
      original_prompt: originalPrompt,
      enhanced_prompt: enhancedPrompt,
      user_id: (await supabase.auth.getUser()).data.user?.id,
    });

    if (error) throw error;
  },

  async getUserPrompts(): Promise<Prompt[]> {
    const { data, error } = await supabase
      .from('prompts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async enhancePrompt(prompt: string): Promise<string> {
    // For now, we'll use a simple enhancement
    // Later, we can integrate with OpenAI or other AI services
    return `Enhanced: ${prompt}`;
  },
}; 