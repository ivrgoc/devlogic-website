import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
}

export function Logo({ className, iconSize = 24, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center space-x-2 group', className)}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
        <Code2 size={iconSize} className="text-white" />
      </div>
      {showText && (
        <span className="text-xl font-bold">
          <span className="text-white">Dev</span>
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Logic
          </span>
        </span>
      )}
    </div>
  );
}
