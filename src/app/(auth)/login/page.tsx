import type { Metadata } from 'next';
import LoginClient from './login-client';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your ByteSpace account to access your courses and learning progress.',
};

export default function LoginPage() {
  return <LoginClient />;
}
