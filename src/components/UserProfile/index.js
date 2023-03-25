import { Avatar } from "@mui/material";
import { stringAvatar } from "../../core/utils/avatar";
import './styles.css';

export const UserProfile = ({ userName = 'usuário', userImage }) => {
    return <div className="user-profile__container">
        {
            !userImage ?
            <Avatar 
                alt={userName}
                src={userImage}
                sx={{ width: 44, height: 44 }}    
            /> :
            <Avatar
                {...stringAvatar(userName)}
                sx={{ width: 44, height: 44 }}    
            />
        }
        
    </div>
}