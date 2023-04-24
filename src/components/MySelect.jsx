import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import {useSelector} from "react-redux";

export default function MySelect({name, cars, setCars}) {
    const cities = useSelector((state) => state.data.cities);
    const [target, setTarget] = useState();
    const handleChange = (event) => {
        setTarget(event.target.value);
    };

    function handleClick(id){
        const filter = cars.filter(car => car.locationId === id);
        setCars(filter);
    }

    return (
        <div>
            <FormControl sx={{minWidth: 190}}>
                <InputLabel id="demo-simple-select-helper-label">{name}</InputLabel>
                <Select
                    sx={{
                        '& fieldset': {
                            borderColor: '#767595', // custom border color
                        },
                        '&:hover fieldset': {
                            borderColor: '#767595', // custom hover border color
                        },
                    }}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={target}
                    label=""
                    onChange={handleChange}
                >
                    {cities.map((item) =>
                        <MenuItem onClick={() => handleClick(item.id)} key={item.id} value={item.id}>
                            <em>{item.name}</em>
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    )
        ;
}