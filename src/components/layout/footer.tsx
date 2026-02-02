'use client';

import { useTranslations } from '@/lib/i18n';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/shared';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Testing & QA', href: '#services' },
    { name: 'DevOps', href: '#services' },
    { name: 'QA Consulting', href: '#services' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">{t('description')}</p>
            <p className="mt-2 text-gray-500 text-sm">{t('businessInfo')}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('servicesTitle')}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@devlogic.hr"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  info@devlogic.hr
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} DevLogic. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
