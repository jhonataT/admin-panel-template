import { Typography } from '@mui/material';
import { Card } from '../../components/Card';
import { Toggle } from '../../components/Toggle';
import './styles.css';

export const SettingsScreen = ({ options = [] }) => {
    return <main className="settings__container">
        <Card>
            {
                Array.isArray(options) && options.map(item => (
                  <div className="settings__content">
                    <Typography mb={1} variant='h6'>{item.step}</Typography>
                    {
                        Array.isArray(item.children) && item.children.map(row => (
                            <Toggle {...row}/>
                        ))
                    }
                  </div>  
                ))
            }
        </Card>
    </main>
}