import type { Metadata } from 'next';
import { GlassCard } from '@/components/ui';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Privacy Policy | DevLogic',
  description: 'Privacy Policy for DevLogic services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: January 2024</p>

        <GlassCard className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-white mt-6 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-400 mb-4">
            We collect information you provide directly to us, such as when you fill out a
            contact form, subscribe to our newsletter, or communicate with us.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-400 mb-4">
            We use the information we collect to provide, maintain, and improve our services,
            to communicate with you, and to comply with legal obligations.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-400 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third
            parties without your consent, except as required by law.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-400 mb-4">
            We implement appropriate security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-4">
            5. Contact Us
          </h2>
          <p className="text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:info@devlogic.hr" className="text-primary-400 hover:underline">
              info@devlogic.hr
            </a>
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
