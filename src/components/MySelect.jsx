import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";

export default function MySelect({name, value}) {

    const [target, setTarget] = useState();
    const handleChange = (event) => {
        setTarget(event.target.value);
    };

    React.useEffect(() => {}, [target]);

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
                    {value.map((item) =>
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