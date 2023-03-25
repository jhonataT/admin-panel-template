import { Grid } from '@mui/material';
import { Card } from '../../components/Card';
import { Charts } from '../../components/Charts';
import './styles.css';

export const DashboardScreen = () => {
    return <div>
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
        </Grid>
    </div>
}