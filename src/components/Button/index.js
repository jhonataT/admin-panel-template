import { Button } from "@mui/material";
import './styles.css';

export const DefaultButton = ({ label, handleClick, type = "contained", color="success" }) => {
    return <Button
        className="button__container"
        fullWidth
        variant={type}
        onClick={handleClick}
        color={color}
    >
        {label}
    </Button>
}