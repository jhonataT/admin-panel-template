import { useEffect, useState } from 'react';
import { IoNotificationsSharp } from 'react-icons/io5';
import { Badge } from '@mui/material';
import { UserProfile } from '../UserProfile';
import { ToggleThemeMode } from '../Toggle';
import { BadgeMenu } from '../BadgeMenu';
import dataNotification from '../../core/mocks/MOCK_NOTIFICATIONS.json';
import userImage from '../../assets/images/login-image.jpg';
import './styles.css';

export const CustomHeader = ({ title }) => {
    const [notificationNumber, setNotifications] = useState(0);

    useEffect(() => {
        if(dataNotification) {
            setNotifications(dataNotification.length)
        }
    }, [dataNotification]);

    return <header className="header__container">
        <div className="header__title">
            <h1>{title}</h1>
        </div>
        <div className="header-profile__content">
            <div className='icon'>
                <ToggleThemeMode />
            </div>
            <BadgeMenu data={dataNotification}>
                <Badge badgeContent={notificationNumber} color="primary" className='icon notification'>
                    <IoNotificationsSharp size={24}/>
                </Badge>
            </BadgeMenu>
            {/* <Badge badgeContent={0} color="primary" className='icon settings'>
                <IoSettings size={24}/>
            </Badge> */}
            <UserProfile userName="Jhonata Tenório" userImage={userImage} />
        </div>
    </header>
}