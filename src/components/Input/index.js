import { TextField } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";
import './styles.css';

export const DefaultInput = ({
    label,
    placeholder,
    messageError,
    handleChange,
    type = 'text',
    size = 'small',
    width,
    helperText,
    select
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
            helperText={helperText}
            select={select}
        />
    </div>
}