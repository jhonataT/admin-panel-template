import { TextField } from "@mui/material";
import './styles.css';

export const DefaultInput = ({
    label,
    placeholder,
    messageError,
    handleChange,
    type = 'text',
    size = 'small',
    width
}) => {
    return <div className="input__container">
        <TextField
            error={messageError}
            placeholder={placeholder}
            id="outlined-basic"
            label={label}
            variant="outlined"
            onChange={handleChange}
            type={type}
            size={size}
            fullWidth={width}
        />
    </div>
}
