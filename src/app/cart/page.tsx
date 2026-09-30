import type { Metadata } from 'next';
import CartClient from './cart-client';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review your selected online courses and proceed to checkout.',
};

export default function CartPage() {
  return <CartClient />;
}
