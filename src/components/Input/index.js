import { TextField } from "@mui/material";
import './styles.css';

export const DefaultInput = ({
    label,
    placeholder,
    messageError,
    handleChange,
    type = 'text'
}) => {
    return <div className="input__container">
        <TextField
            placeholder={placeholder}
            id="outlined-basic"
            label={label}
            variant="outlined"
            onChange={handleChange}
            type={type}
        />
    </div>
}