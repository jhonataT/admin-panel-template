import { Grid } from '@mui/material';
import { CustomHeader } from '../Header';
import { CustomSidebar } from '../Sidebar';
import './styles.css';

export const MainLayout = ({ children, itemList, title = "Home" }) => {
    return <main className="main-layout__container">
        <Grid container >
            <Grid item xs="3">
                <CustomSidebar {...{itemList}}/>
            </Grid>
            <Grid item xs="9">
                <CustomHeader title={title}/>
                <div className="main-layout__content">
                    {children}
                </div>
            </Grid>
        </Grid>
    </main>
}