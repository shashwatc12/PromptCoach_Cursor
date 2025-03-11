import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const { error: queryError, error_description } = router.query;

        if (queryError || error_description) {
          console.error('Auth error:', { queryError, error_description });
          setError(error_description as string || 'Authentication failed');
          setTimeout(() => router.push('/login'), 3000);
          return;
        }

        // Get the session to ensure the auth was successful
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          setError('Failed to get session');
          setTimeout(() => router.push('/login'), 3000);
          return;
        }

        if (!session) {
          console.error('No session found');
          setError('No session found');
          setTimeout(() => router.push('/login'), 3000);
          return;
        }

        // Successfully authenticated
        router.push('/');
      } catch (err) {
        console.error('Callback error:', err);
        setError('An unexpected error occurred');
        setTimeout(() => router.push('/login'), 3000);
      }
    };

    if (router.isReady) {
      handleCallback();
    }
  }, [router, router.isReady]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Authentication Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Redirecting to login page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Completing sign in...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
} 