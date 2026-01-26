import type { Metadata } from 'next';
import { AboutSection } from '@/components/sections';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About | DevLogic',
  description: 'Learn about DevLogic - a team of passionate developers and designers.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
