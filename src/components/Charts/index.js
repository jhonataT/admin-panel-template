import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { bar_options, mock_bar_data, area_options, area_data } from '../../core/charts';
import './styles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ data }) => {
  return <div className="chart__container">
    <Bar
      options={bar_options}
      data={mock_bar_data}
    />
  </div>
}

export const AreaChart = ({ data }) => {
  return <div className="chart__container">
    <Line options={area_options} data={area_data} />
  </div>
}

export const Charts = ({ type = 'bar', data }) => {
  const getChartByType = (type, data) => {
    switch(type) {
      case 'bar': return <BarChart data={data}/> 
      case 'area': return <AreaChart data={data} />
    }
  }
    
  return getChartByType(type)
} 