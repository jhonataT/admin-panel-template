import { UserProfile } from '../UserProfile';
import userImage from '../../assets/images/login-image.jpg';
import './styles.css';

export const CustomHeader = ({ }) => {
    return <header className="header__container">
        <UserProfile userName="Jhonata" userImage={userImage} />
    </header>
}