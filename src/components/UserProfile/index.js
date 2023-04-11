import { Avatar, Typography } from "@mui/material";
import { stringAvatar } from "../../core/utils/avatar";
import './styles.css';

export const UserProfile = ({ userName = '', userImage }) => {

    if(userImage) {
        return <div className="user-profile__container">
            <Typography>{userName}</Typography>
            <Avatar 
                alt={userName}
                src={userImage}
                sx={{ width: 42, height: 42, border: "1px solid #ffff" }}
            />
        </div>
    }

    return <div className="user-profile__container">
        <Avatar
            {...stringAvatar(userName)}
            sx={{ width: 42, height: 42, border: "1px solid #ffff" }}
        />
    </div>
}