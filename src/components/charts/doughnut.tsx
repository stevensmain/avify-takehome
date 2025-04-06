import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  data: number[];
  labels: string[];
  title?: string;
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  showLegend?: boolean;
  legendPosition?: 'top' | 'left' | 'right' | 'bottom' | 'center' | 'chartArea';
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  height?: string;
  width?: string;
  cutout?: string | number;
  rotation?: number;
  circumference?: number;
};

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  title = '',
  backgroundColor = [],
  borderColor = [],
  borderWidth = 1,
  showLegend = true,
  legendPosition = 'top',
  responsive = true,
  maintainAspectRatio = true,
  height = '400px',
  width = '400px',
  cutout = '70%',
  rotation = 0,
  circumference = 360
}) => {
  const chartData: ChartData<'doughnut'> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth
      }
    ]
  };

  const options: ChartOptions<'doughnut'> = {
    responsive,
    maintainAspectRatio,
    plugins: {
      legend: {
        display: showLegend,
        position: legendPosition
      },
      title: {
        display: !!title,
        text: title
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw as number;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout,
    rotation,
    circumference
  };

  return (
    <div style={{ height, width }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
