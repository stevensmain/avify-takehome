import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DoughnutChartSkeleton } from '@/components/charts/doughnut-chart-skeleton';

export const GenerationsByFuelSkeleton: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Generations by fuel</CardTitle>
      </CardHeader>

      <CardContent>
        <DoughnutChartSkeleton />
      </CardContent>
    </Card>
  );
};
