import { useStore } from '@/store/useStore';
import { Template } from '@/types';

const templates: Template[] = [
  {
    id: 'tcrei',
    title: 'TCREI Framework',
    description: 'Structured framework for effective prompts',
    content: '',
    category: 'framework'
  },
  {
    id: 'marketing',
    title: 'Marketing Copy',
    description: 'Optimize product marketing content',
    content: '',
    category: 'marketing'
  },
  {
    id: 'technical',
    title: 'Technical Writing',
    description: 'Clear technical documentation',
    content: '',
    category: 'technical'
  },
  {
    id: 'creative',
    title: 'Creative Writing',
    description: 'Engaging stories and creative content',
    content: '',
    category: 'creative'
  }
];

export const Sidebar = () => {
  const { selectedTemplate, selectedModel, setTemplate, setModel } = useStore();

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Options</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Template
            </label>
            <select
              className="input-primary"
              value={selectedTemplate?.id || ''}
              onChange={(e) => {
                const template = templates.find(t => t.id === e.target.value);
                setTemplate(template || null);
              }}
            >
              <option value="">Select Template</option>
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <select
              className="input-primary"
              value={selectedModel}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="GPT-4">GPT-4</option>
              <option value="VertexAI">VertexAI</option>
              <option value="OpenAI">OpenAI</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Template Library</h3>
        <div className="space-y-2">
          {templates.map((template) => (
            <div
              key={template.id}
              className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => setTemplate(template)}
            >
              <h4 className="font-medium">{template.title}</h4>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 