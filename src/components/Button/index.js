import { Button } from "@mui/material";
import './styles.css';

export const DefaultButton = ({
    label,
    handleClick,
    type = "contained",
    color="success",
    fullWidth = true
}) => {
    return <Button
        className="button__container"
        fullWidth={fullWidth}
        variant={type}
        onClick={handleClick}
        color={color}
    >
        {label}
    </Button>
}