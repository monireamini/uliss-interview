import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import moment from 'moment';

export default function MyDatePicker({cars, setCars}) {

    const [value, setValue] = React.useState(undefined);



    function handleChange(date2){
            // setValue(date);
            const dateMoment = moment(date2.toDate()).format('MMMM')
            const filter = cars.filter(car => car.availableMonths.includes(dateMoment));
            setCars(filter !== undefined || null ? filter : cars);
            // console.log(filter);
            // console.log(dateMoment);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#767595'}}, maxWidth: 190}}
                        color="primary"
                        onChange={handleChange}
                        label={'pick-Up Date'}
                        format="MM-DD-YYYY"
                        openTo="month"
                        views={['month', 'day']}
            />
        </LocalizationProvider>
    );
}