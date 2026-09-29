import type { Metadata } from 'next';
import RegisterClient from './register-client';

export const metadata: Metadata = {
  title: 'Create an Account',
  description:
    'Create your ByteSpace account to start learning from expert creators and building digital skills.',
};

export default function RegisterPage() {
  return <RegisterClient />;
}
