'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Badge, Button, Input, Textarea, Select, GlassCard } from '@/components/ui';
import { AnimatedSection } from '@/components/shared';

export function ContactSection() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = z.object({
    name: z.string().min(1, t('errors.nameRequired')),
    email: z.string().min(1, t('errors.emailRequired')).email(t('errors.emailInvalid')),
    company: z.string().optional(),
    service: z.string().min(1, t('errors.serviceRequired')),
    message: z.string().min(10, t('errors.messageMinLength')),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const services = [
    { value: 'product-design', label: t('services.0') },
    { value: 'software-development', label: t('services.1') },
    { value: 'software-testing', label: t('services.2') },
    { value: 'devops', label: t('services.3') },
    { value: 'consulting', label: t('services.4') },
    { value: 'other', label: t('services.5') },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      console.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: t('email'), value: 'info@devlogic.hr' },
    { icon: Phone, label: t('phone'), value: '+385 1 234 5678' },
    { icon: MapPin, label: t('visit'), value: t('address') },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            {t('badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">{t('titleLine1')}</span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              {t('titleLine2')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('description')}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="space-y-4">
            {contactInfo.map((item, index) => (
              <GlassCard key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <item.icon className="text-primary-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </GlassCard>
            ))}
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <GlassCard>
              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-2">{t('form.success')}</h3>
                  <p className="text-gray-400">{t('form.successDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label={t('form.name')}
                      placeholder={t('form.namePlaceholder')}
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <Input
                      label={t('form.email')}
                      type="email"
                      placeholder={t('form.emailPlaceholder')}
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label={t('form.company')}
                      placeholder={t('form.companyPlaceholder')}
                      {...register('company')}
                    />
                    <Select
                      label={t('form.service')}
                      placeholder={t('form.servicePlaceholder')}
                      options={services}
                      error={errors.service?.message}
                      {...register('service')}
                    />
                  </div>
                  <Textarea
                    label={t('form.message')}
                    placeholder={t('form.messagePlaceholder')}
                    rows={5}
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      t('form.sending')
                    ) : (
                      <>
                        {t('form.submit')}
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
