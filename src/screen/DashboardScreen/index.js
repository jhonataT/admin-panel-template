import { Grid } from '@mui/material';
import { Card } from '../../components/Card';
import { Charts } from '../../components/Charts';
import { DefaultTable } from '../../components/Table';
import { KpiCards } from '../../components/KpiCards';
import * as Icons from 'react-icons/ai';
import { InfinitList } from '../../components/InfinitList';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import kpiData from '../../core/mocks/MOCK_KPI_USER_SECONDARY.json';
import './styles.css';

export const DashboardScreen = ({ currentChart, chartOptions, toggleChart }) => {
    const [data] = useState(() =>
        Array.from({ length: 1000 }).map(item => ({ 
            name: faker.name.fullName(),
            rule: faker.name.jobArea(),
            img: faker.image.avatar()
        }))
    );

    return <div className="dashboard__container">
        <Grid container spacing={2}>
            <Grid item xs="12">
                <KpiCards data={kpiData}/>          
            </Grid>
            <Grid item xs="10">
                <Card>
                    <div className="dashboard-chart__container">
                        <h5>{currentChart?.title || ""}</h5>
                        <Charts data={currentChart?.data} type={currentChart?.type}/>
                    </div>
                </Card>
            </Grid>
            <Grid item xs="2">
                <Card>
                    <div className="dashboard-charts__container">
                        {
                            Array.isArray(chartOptions) && chartOptions.map(chart => {
                                const ComponentIcon = Icons[chart?.icon];

                                return <ComponentIcon
                                    size={48}
                                    className={`chart-icon ${chart?.type === currentChart?.type ? 'selected' : ''}`}
                                    onClick={() => toggleChart(chart)}
                                />
                            })
                        }
                    </div>
                </Card>
            </Grid>
            <Grid item xs="12">
                <Card style={{ padding: "50px 0", marginBottom: '20px' }}>
                    <div className="dashboard-charts__container">
                        <DefaultTable {...{data}} />
                    </div>
                </Card>
            </Grid>
        </Grid>
    </div>
}