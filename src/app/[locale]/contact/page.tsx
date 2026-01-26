import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact | DevLogic',
  description: 'Get in touch with DevLogic for your next project.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
