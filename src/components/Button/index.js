import { Button } from "@mui/material"

export const DefaultButton = ({ label, handleClick, type = "contained" }) => {
    return <Button fullWidth variant={type} onClick={handleClick} color="success">
        {label}
    </Button>
}