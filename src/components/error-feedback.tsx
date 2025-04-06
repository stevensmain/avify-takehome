import React from 'react';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export interface ErrorFeedbackProps {
  error: Error | null;
}

export const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ error }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Typography variant="h1">Error</Typography>

      <Typography variant="h4" className="mb-8">
        {error?.message || 'Error loading data'}
      </Typography>

      <Button variant="default" onClick={() => window.location.reload()}>
        Try again
      </Button>
    </div>
  );
};
