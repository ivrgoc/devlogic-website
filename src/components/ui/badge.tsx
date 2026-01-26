import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
        {
          'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300':
            variant === 'default',
          'bg-primary-500/10 border border-primary-500/30 text-primary-400':
            variant === 'primary',
          'bg-accent-500/10 border border-accent-500/30 text-accent-400':
            variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
