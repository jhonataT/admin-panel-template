import { Grid } from '@mui/material';
import { Card } from '../../components/Card';
import { Charts } from '../../components/Charts';
import barData from '../../core/mocks/MOCK_BAR_CHART.json';
import pieData from '../../core/mocks/MOCK_PIE_CHART.json';
import './styles.css';

export const DashboardScreen = () => {

    console.log("DATA", barData)
    return <div className="dashboard__container">
        <Grid container spacing={2}>
            <Grid item xs="12">
                <Card>
                    <Charts data={barData} type="bar"/>
                </Card>
            </Grid>
            <Grid item xs="6">
                <Card>
                    <Charts data={pieData} type="pie"/>
                </Card>
            </Grid>
            <Grid item xs="6">
                <Card>
                    <Charts data={pieData} type="pie"/>
                </Card>
            </Grid>
        </Grid>
    </div>
}