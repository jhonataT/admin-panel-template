import { Grid } from '@mui/material';
import { Card } from '../../components/Card';
import { Charts } from '../../components/Charts';
import './styles.css';

export const DashboardScreen = () => {
    return <div className="dashboard__container">
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <Charts type="bar"/>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <Charts type="area"/>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card flex >
                    <Charts type="donut"/>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <Charts type="pie"/>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Charts type="multi-bar"/>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Charts type="radar"/>
                </Card>
            </Grid>
        </Grid>
    </div>
}