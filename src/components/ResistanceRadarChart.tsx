import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { RuleBasedPrediction } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

interface ResistanceRadarChartProps {
  predictions: RuleBasedPrediction[];
}

export const ResistanceRadarChart: React.FC<ResistanceRadarChartProps> = ({ predictions }) => {
  const data = {
    labels: predictions.map(p => p.antibiotic),
    datasets: [
      {
        label: 'Resistance Confidence (%)',
        data: predictions.map(p => p.confidence * 100),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <Radar data={data} options={options} />
    </div>
  );
};
