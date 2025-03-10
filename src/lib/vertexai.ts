import { VertexAI } from '@google-cloud/vertexai';

// Initialize Vertex AI
const vertexai = new VertexAI({
  project: process.env.GOOGLE_CLOUD_PROJECT_ID,
  location: process.env.GOOGLE_CLOUD_LOCATION || 'us-central1',
});

// Get the model
const model = 'gemini-pro';

// Create a generative model
const generativeModel = vertexai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 2048,
    temperature: 0.9,
    topP: 1,
  },
});

export const generatePromptEnhancement = async (prompt: string) => {
  try {
    const result = await generativeModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: `Enhance this prompt: ${prompt}` }] }],
    });
    const response = await result.response;
    if (!response.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('No valid response generated');
    }
    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating prompt enhancement:', error);
    throw error;
  }
};

export { generativeModel }; 