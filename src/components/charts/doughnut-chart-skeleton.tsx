import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/utils/cn';

interface DoughnutChartSkeletonProps {
  className?: string;
}

export const DoughnutChartSkeleton = ({
  className
}: DoughnutChartSkeletonProps) => {
  return (
    <div
      className={cn('flex items-center justify-center w-full gap-4', className)}
    >
      <div className="flex flex-col gap-2">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
      </div>

      <Skeleton className="h-60 w-60 rounded-full" />
    </div>
  );
};
