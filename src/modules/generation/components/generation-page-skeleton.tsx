import React from 'react';
import { Typography } from '@/components/ui/typography';
import { GenerationsByFuelSkeleton } from './generations-by-fuel-skeleton';

export const GenerationPageSkeleton = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-8">
      <Typography variant="h1">Generation Mix</Typography>

      <main className="container mx-auto mt-8 max-w-screen-sm">
        <GenerationsByFuelSkeleton />
      </main>
    </div>
  );
};
