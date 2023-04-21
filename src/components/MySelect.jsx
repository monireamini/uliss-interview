import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import {useSelector} from "react-redux";

export default function MySelect({name}) {
    const cities = useSelector((state) => state.data.cities);
    const [target, setTarget] = useState();
    const handleChange = (event) => {
        setTarget(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-helper-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={target}
                    label=""
                    onChange={handleChange}
                >
                    {cities.map((item) =>
                        <MenuItem key={item.id} value="item.name">
                            <em>{item.name}</em>
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    )
        ;
}