import React from 'react';

import { useGeneration } from '../hooks';
import { formatDate, formatTime } from '@/utils/date.util';

import { Typography } from '@/components/ui/typography';
import { ErrorFeedback } from '@/components/error-feedback';
import { GenerationsByFuel, GenerationPageSkeleton } from '../components';

export const GenerationPage = () => {
  const { data, error, isLoading } = useGeneration();

  if (isLoading) {
    return <GenerationPageSkeleton />;
  }

  if (!data || error) {
    return <ErrorFeedback error={error} />;
  }

  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-8">
      <Typography variant="h1">Generation Mix</Typography>

      <Typography variant="h4" className="mb-8">
        Data loaded from {formatDate(data.from)} {formatTime(data.from)} at{' '}
        {formatDate(data.to)} {formatTime(data.to)}
      </Typography>

      <main className="container mx-auto max-w-screen-sm">
        <GenerationsByFuel data={data.generationMix} />
      </main>
    </div>
  );
};
