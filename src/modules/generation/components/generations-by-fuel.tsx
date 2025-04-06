import React from 'react';

import { capitalizeFirstLetter } from '@/utils/text.util';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DoughnutChart } from '@/components/charts/doughnut';
import { GenerationMix } from '../types';
import { getFuelColor } from '../utils';

export interface GenerationsByFuelProps {
  data: GenerationMix[];
}

export const GenerationsByFuel: React.FC<GenerationsByFuelProps> = ({
  data
}) => {
  const series = data.map((item) => item.perc);
  const labels = data.map((item) => capitalizeFirstLetter(item.fuel));
  const colors = data.map((item) => getFuelColor(item.fuel));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Generations by fuel</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center items-center">
        <DoughnutChart
          data={series}
          labels={labels}
          legendPosition="left"
          backgroundColor={colors}
          width="300px"
          height="300px"
        />
      </CardContent>
    </Card>
  );
};
