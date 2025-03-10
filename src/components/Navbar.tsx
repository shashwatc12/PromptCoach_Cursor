import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">PromptOptimizer</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/templates" className="text-gray-700 hover:text-gray-900">
              Templates
            </Link>
            <Link href="/learn" className="text-gray-700 hover:text-gray-900">
              Learn
            </Link>
            <Link href="/workspace" className="text-gray-700 hover:text-gray-900">
              Workspace
            </Link>
            <button className="btn-primary">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 