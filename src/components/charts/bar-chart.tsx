import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartProps = {
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
  xAxisTitle?: string;
  yAxisTitle?: string;
};

export const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  title = '',
  backgroundColor = 'rgba(75, 192, 192, 0.6)',
  borderColor = 'rgba(75, 192, 192, 1)',
  borderWidth = 1,
  showLegend = true,
  legendPosition = 'top',
  responsive = true,
  maintainAspectRatio = true,
  height = '400px',
  width = '600px',
  xAxisTitle,
  yAxisTitle
}) => {
  const chartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor,
        borderColor,
        borderWidth
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
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
            return `${label}: ${value}%`;
          }
        },
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        title: {
          display: !!xAxisTitle,
          text: xAxisTitle
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: !!yAxisTitle,
          text: yAxisTitle
        }
      }
    }
  };

  return (
    <div style={{ height, width }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};
