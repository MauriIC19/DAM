import AuthNavigator from './AuthNavigator';
import { AuthProvider } from './AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}