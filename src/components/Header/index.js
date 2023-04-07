import { IoNotificationsSharp, IoSettings } from 'react-icons/io5';
import { Badge } from '@mui/material';
import { UserProfile } from '../UserProfile';
import userImage from '../../assets/images/login-image.jpg';
import './styles.css';

export const CustomHeader = ({ title }) => {
    return <header className="header__container">
        <div className="header__title">
            <h1>{title}</h1>
        </div>
        <div className="header-profile__content">
            <Badge badgeContent={2} color="primary" className='icon notification'>
                <IoNotificationsSharp size={24}/>
            </Badge>
            <Badge badgeContent={0} color="primary" className='icon settings'>
                <IoSettings size={24}/>
            </Badge>
            <UserProfile userName="Jhonata" userImage={userImage} />
        </div>
    </header>
}