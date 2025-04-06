import React from 'react';
import { cn } from '@/utils/cn';
import { Skeleton } from '../ui/skeleton';

interface BarChartSkeletonProps {
  className?: string;
}

export const BarChartSkeleton = ({ className }: BarChartSkeletonProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-6 w-full', className)}>
      <div className="flex w-full h-48 items-end gap-3 justify-around px-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton
              key={i}
              className={`w-12 h-${Math.floor(Math.random() * 32) + 16}`}
            />
          ))}
      </div>

      <div className="flex justify-between w-full px-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-4 w-12" />
          ))}
      </div>
    </div>
  );
};
