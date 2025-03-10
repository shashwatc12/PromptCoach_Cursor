import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { generatePromptEnhancement } from '../lib/vertexai';

export default function PromptEnhancer() {
  const { user, signInWithGoogle, logout } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEnhancePrompt = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const enhanced = await generatePromptEnhancement(prompt);
      setEnhancedPrompt(enhanced);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to enhance prompt');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome to Prompt Enhancer
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to start enhancing your prompts
            </p>
          </div>
          <div className="mt-8">
            <button
              onClick={signInWithGoogle}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Prompt Enhancer
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Welcome, {user.displayName}
            </p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
              Your Prompt
            </label>
            <div className="mt-1">
              <textarea
                id="prompt"
                rows={4}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleEnhancePrompt}
              disabled={loading || !prompt.trim()}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                loading || !prompt.trim()
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              {loading ? 'Enhancing...' : 'Enhance Prompt'}
            </button>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">{error}</div>
                </div>
              </div>
            </div>
          )}

          {enhancedPrompt && (
            <div className="rounded-md bg-green-50 p-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">
                Enhanced Prompt
              </h3>
              <p className="text-sm text-green-700 whitespace-pre-wrap">
                {enhancedPrompt}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 