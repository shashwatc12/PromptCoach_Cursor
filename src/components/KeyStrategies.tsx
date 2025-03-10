import { DocumentTextIcon, LinkIcon, ArrowPathIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Strategy } from '@/types';

const strategies: Strategy[] = [
  {
    id: 'design',
    title: 'Prompt Design and Structure',
    description: 'Provide all relevant information necessary for the task, including instructions, examples, and context.',
    icon: 'DocumentTextIcon'
  },
  {
    id: 'cot',
    title: 'Chain-of-Thought (CoT) Prompting',
    description: 'Encourage the model to solve problems through a series of intermediate reasoning steps, mimicking a train of thought.',
    icon: 'LinkIcon'
  },
  {
    id: 'iterative',
    title: 'Iterative Prompt Refinement',
    description: 'Refine prompts iteratively to improve clarity and effectiveness.',
    icon: 'ArrowPathIcon'
  },
  {
    id: 'ai-tools',
    title: 'AI-Powered Prompt Writing Tools',
    description: 'Leverage AI tools to assist in crafting effective prompts.',
    icon: 'SparklesIcon'
  }
];

const IconComponent = {
  DocumentTextIcon,
  LinkIcon,
  ArrowPathIcon,
  SparklesIcon
};

export const KeyStrategies = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Key Strategies in Prompt Engineering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy) => {
          const Icon = IconComponent[strategy.icon as keyof typeof IconComponent];
          return (
            <div
              key={strategy.id}
              className="p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 