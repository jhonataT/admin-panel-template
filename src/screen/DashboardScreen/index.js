import { Grid } from '@mui/material';
import { Card } from '../../components/Card';
import { Charts } from '../../components/Charts';
import { KpiCards } from '../../components/KpiCards';
import kpiData from '../../core/mocks/MOCK_KPI_USER_SECONDARY.json';
import barData from '../../core/mocks/MOCK_BAR_CHART.json';
import pieData from '../../core/mocks/MOCK_PIE_CHART.json';
import scatterData from '../../core/mocks/MOCK_SCATTER.json';
import './styles.css';

export const DashboardScreen = () => {
    return <div className="dashboard__container">
        <Grid container spacing={2}>
            <Grid item xs="12">
                <KpiCards data={kpiData}/>          
            </Grid>
            <Grid item xs="7.5">
                <Card>
                    <Charts data={barData} type="bar"/>
                </Card>
            </Grid>
            <Grid item xs="4.5">
                <Card>
                    <Charts data={pieData} type="pie"/>
                </Card>
            </Grid>
            <Grid item xs="12">
                <Card>
                    <Charts data={scatterData} type="scatter"/>
                </Card>
            </Grid>
        </Grid>
    </div>
}