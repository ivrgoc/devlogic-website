import type { Metadata } from 'next';
import { ProductsSection } from '@/components/sections';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Products | DevLogic',
  description: 'Explore our products and solutions.',
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsSection />
    </div>
  );
}
