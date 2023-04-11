import { BarChart } from '../BarChart';
import { LineChart } from '../LineChart';
import { PieChart } from '../PieChart';
import { ScatterChart } from '../ScartterChart';
import './styles.css';

export const Charts = ({ type = 'bar', data = [] }) => {
  const getChartByType = (type, data) => {
    switch(type) {
      case 'bar': return <BarChart data={data}/>
      case 'pie': return <PieChart data={data}/>
      case 'scatter': return <ScatterChart data={data}/>
      case 'line': return <LineChart data={data}/>
    }
  }
    
  return getChartByType(type, data)
} 