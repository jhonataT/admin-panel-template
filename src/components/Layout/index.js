import { Grid } from '@mui/material';
import { CustomHeader } from '../Header';
import { CustomSidebar } from '../Sidebar';
import './styles.css';

export const MainLayout = ({ children, itemList }) => {
    return <main className="main-layout__container">
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CustomSidebar {...{itemList}}/>
            </Grid>
            <Grid item xs={8}>
                <CustomHeader />
            </Grid>
            <Grid item xs={8}>
                <div className="main-layout__content">
                    {children}
                </div>
            </Grid>
        </Grid>
    </main>
}