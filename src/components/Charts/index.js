import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './styles.css';
import { bar_options, mock_bar_data } from '../../core/charts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ data }) => {
  return <Bar
    height={90}
    options={bar_options}
    data={mock_bar_data}
  />;
}

export const Charts = ({ type = 'bar', data }) => {
  const getChartByType = (type, data) => {
    switch(type) {
      case 'bar': return <BarChart data={data}/> 
    }
  }
    
  return getChartByType(type)
} 