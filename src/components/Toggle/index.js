import { Switch, Typography } from '@mui/material';
import './styles.css';

export const Toggle = ({ label = '', ...props }) => {
    return <div className="toggle__container">
        <Switch {...props}/>
        <Typography>{label}</Typography>
    </div>
}