import ProtectedLayout from '../components/ProtectedLayout';
import Header from '../components/Header';
import SupabaseTest from '../components/SupabaseTest';

export default function Home() {
  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <SupabaseTest />
          </div>
        </main>
      </div>
    </ProtectedLayout>
  );
} 