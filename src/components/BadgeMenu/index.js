import { useState } from "react";
import { Popover, Typography } from "@mui/material";
import './styles.css';

export const BadgeMenu = ({ title = "", children, data }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(null);

    const toggleMenu = (e) => {
        menuIsOpen ? setMenuIsOpen(null) : setMenuIsOpen(e.currentTarget);
    }

    return <div
        className="badge-menu__container"
        onClick={toggleMenu}
    >
        {children}
        <Popover
            className="menu__container"
            open={menuIsOpen}
            anchorEl={menuIsOpen}
            onClose={toggleMenu}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Typography className="menu__content title">Notificações</Typography>
            {
                Array.isArray(data) && data.map(notif => (
                    <Typography className="menu__content">{notif?.title}</Typography>
                ))
            }
        </Popover>
    </div>
} 
