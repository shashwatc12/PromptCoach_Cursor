import { useAuth } from '../contexts/AuthContext';

export default function AuthTest() {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <div className="p-4">
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
} 