import { cn } from '#src/utils/cn.js';
import { FC, ReactNode } from 'react';

export const LiquidGlass: FC<{ className?: string; children?: ReactNode }> = ({ className }) => {
  return (
    <div
      className={cn(
        'rlg-root',
        'flex flex-col items-center justify-center rounded-lg border px-2 py-4 font-mono text-sm',
        className
      )}
    >
      🚧 WIP LiquidGlass
    </div>
  );
};
