import { BarChart } from '../BarChart';
import { Calendar } from '../Calendar';
import { PieChart } from '../PieChart';
import './styles.css';

export const Charts = ({ type = 'bar', data }) => {
  const getChartByType = (type, data) => {
    switch(type) {
      case 'bar': return <BarChart data={data}/>
      case 'pie': return <PieChart data={data}/>
      case 'calendar': return <Calendar data={data}/> 
    }
  }
    
  return getChartByType(type, data)
} 