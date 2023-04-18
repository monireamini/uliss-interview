import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as React from "react";

export default function MyDatePicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#767595'}}}}
                        color="primary"
            />
        </LocalizationProvider>
    );
}