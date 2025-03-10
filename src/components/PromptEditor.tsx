import { useStore } from '@/store/useStore';
import { optimizePrompt } from '@/lib/api';

export const PromptEditor = () => {
  const { 
    currentPrompt, 
    setPrompt, 
    isLoading, 
    setLoading,
    selectedModel,
    promptResult,
    setPromptResult
  } = useStore();

  const handleOptimize = async () => {
    if (!currentPrompt.trim() || isLoading) return;

    setLoading(true);
    try {
      const result = await optimizePrompt(currentPrompt, selectedModel);
      if (result.success && result.data) {
        setPromptResult(result.data);
      }
    } catch (error) {
      console.error('Error optimizing prompt:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Prompt Editor</h2>
      <div className="space-y-4">
        <div className="relative">
          <textarea
            className="w-full h-40 p-4 border rounded-lg resize-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            placeholder="Enter your prompt here..."
            value={currentPrompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleOptimize}
            disabled={isLoading || !currentPrompt.trim()}
            className={`absolute bottom-4 right-4 btn-primary ${
              isLoading || !currentPrompt.trim()
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            {isLoading ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>

        {promptResult && (
          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Enhanced Prompt</h3>
              <p className="text-gray-700">{promptResult.enhanced}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Suggestions</h3>
              <ul className="list-disc list-inside space-y-1">
                {promptResult.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-700">{suggestion}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Prompt Score</h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${promptResult.score}%` }}
                  />
                </div>
                <span className="ml-2 text-gray-700">{promptResult.score}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 