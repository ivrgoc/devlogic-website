import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6',
        hover &&
          'transition-all duration-300 hover:bg-white/[0.06] hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10',
        className
      )}
    >
      {children}
    </div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.08]',
        className
      )}
    >
      {children}
    </div>
  );
}
