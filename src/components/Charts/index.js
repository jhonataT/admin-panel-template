import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
} from 'chart.js';
import { bar_options, mock_bar_data, area_options, area_data, donut_data, donut_options, multi_bar_data, multi_bar_options, pie_options, pie_data, radar_options, radar_data } from '../../core/charts';
import './styles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const BarChart = ({ data, multi }) => {
  return <div className="chart__container">
    <Bar
      options={multi ? multi_bar_options : bar_options}
      data={multi ? multi_bar_data : mock_bar_data}
    />
  </div>
}

export const DonutChart = ({ data }) => {
  return <Doughnut
    data={donut_data}
    options={donut_options}
  />
}

export const PieChart = ({ data }) => {
  return <Pie
    data={pie_data}
    options={pie_options}
  />
}

export const AreaChart = ({ data }) => {
  return <div className="chart__container">
    <Line options={area_options} data={area_data} />
  </div>
}

export const RadarChart = ({ data }) => {
  return <div className="chart__container">
    <Radar data={radar_data} options={radar_options} />
  </div>
}

export const Charts = ({ type = 'bar', data }) => {
  const getChartByType = (type, data) => {
    switch(type) {
      case 'bar': return <BarChart data={data}/> 
      case 'area': return <AreaChart data={data} />
      case 'donut': return <DonutChart data={data} />
      case 'pie': return <PieChart data={data} />
      case 'multi-bar': return <BarChart data={data} multi/>
      case 'radar': return <RadarChart data={data} />
    }
  }
    
  return getChartByType(type)
} 