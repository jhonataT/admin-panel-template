import { Grid } from '@mui/material';
import { CustomHeader } from '../Header';
import { CustomSidebar } from '../Sidebar';
import './styles.css';

export const MainLayout = ({ children, itemList }) => {
    return <main className="main-layout__container">
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <CustomSidebar {...{itemList}}/>
            </Grid>
            <CustomHeader />
            <Grid item xs={9}>
                <div className="main-layout__content">
                    {children}
                </div>
            </Grid>
        </Grid>
    </main>
}