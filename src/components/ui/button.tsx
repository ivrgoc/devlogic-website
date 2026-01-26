'use client';

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false;
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: false;
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const buttonStyles = ({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonBaseProps & { className?: string }) =>
  cn(
    'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg cursor-pointer',
    {
      'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5':
        variant === 'primary',
      'bg-dark-600 text-white border border-white/10 hover:bg-dark-500 hover:border-white/20':
        variant === 'secondary',
      'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-500':
        variant === 'outline',
      'text-gray-300 hover:text-white hover:bg-white/5': variant === 'ghost',
    },
    {
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
    },
    className
  );

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const styles = buttonStyles({ variant, size, className });

    if ('href' in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={styles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={styles}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonStyles };
