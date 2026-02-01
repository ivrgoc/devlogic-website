'use client';

import { useTranslations } from '@/lib/i18n';
import { Heart, Github, Linkedin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/shared';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const services = ['Web Development', 'Testing & QA', 'DevOps'];

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">{t('description')}</p>
            <p className="mt-2 text-gray-500 text-sm">{t('businessInfo')}</p>

            {/* Social Links */}
            <div className="mt-4 flex items-center space-x-4">
              <a
                href="https://github.com/devlogic-hr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/devlogic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('servicesTitle')}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
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
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} DevLogic. {t('copyright')}
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            {t('madeWith')}{' '}
            <Heart size={14} className="mx-1 text-red-500 fill-red-500" />{' '}
            {t('byTeam')}
          </p>
        </div>
      </div>
    </footer>
  );
}
