import { useContext } from 'react';
import { Switch, Typography } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context';
import './styles.css';

export const Toggle = ({ label = '', ...props }) => {
    return <div className="toggle__container">
        <Switch {...props}/>
        <Typography>{label}</Typography>
    </div>
}

export const ToggleThemeMode = () => {
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        if(currentTheme === 'light') {
            setCurrentTheme('dark');
            return;
        }
        setCurrentTheme('light');
    }

    return <div className="toggle-theme__container" onClick={toggleTheme}>
        <div className="light-theme__container">
            <FaSun size="12"/>
        </div>
        <div className="dark-theme__container">
            <FaMoon size="12"/>
        </div>
        <div className={`white-ball ${currentTheme}`}/>
    </div>
}