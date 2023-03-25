import { Card } from '../../components/Card';
import { Charts } from '../../components/Charts';
import './styles.css';

export const DashboardScreen = () => {
    return <div>
        <Card>
            <Charts type="bar"/>
        </Card>
    </div>
}