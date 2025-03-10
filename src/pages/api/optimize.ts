import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { PromptResult, ApiResponse } from '@/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<PromptResult>>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { prompt, model } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, error: 'Prompt is required' });
    }

    // Example prompt for optimization
    const optimizationPrompt = `
      Analyze and improve the following prompt to make it more effective:
      
      Original prompt: "${prompt}"
      
      Please provide:
      1. An enhanced version of the prompt
      2. A list of specific improvements made
      3. A score from 0-100 indicating the quality of the original prompt
      
      Format the response as JSON with the following structure:
      {
        "enhanced": "improved prompt here",
        "suggestions": ["improvement 1", "improvement 2", ...],
        "score": 85
      }
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert in prompt engineering, skilled at analyzing and improving prompts for better results.',
        },
        {
          role: 'user',
          content: optimizationPrompt,
        },
      ],
    });

    const result = JSON.parse(completion.choices[0].message?.content || '{}');

    const promptResult: PromptResult = {
      original: prompt,
      enhanced: result.enhanced,
      suggestions: result.suggestions,
      score: result.score,
    };

    return res.status(200).json({ success: true, data: promptResult });
  } catch (error) {
    console.error('Error optimizing prompt:', error);
    return res.status(500).json({ success: false, error: 'Failed to optimize prompt' });
  }
} 