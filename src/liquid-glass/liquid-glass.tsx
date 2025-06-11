import { cn } from '#src/utils/cn.ts';
import { FC, ReactNode } from 'react';

export const LiquidGlass: FC<{ className?: string; children?: ReactNode }> = ({ className }) => {
  return (
    <div
      className={cn(
        'rlg-root',
        'rlg:flex rlg:flex-col rlg:items-center rlg:justify-center rlg:rounded-lg rlg:border rlg:px-2 rlg:py-4 rlg:font-mono rlg:text-sm',
        className
      )}
    >
      🚧 WIP LiquidGlass
    </div>
  );
};
