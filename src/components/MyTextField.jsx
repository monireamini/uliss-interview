import * as React from 'react';
import {TextField} from "@mui/material";

export default function MyTextField() {
    return (
        <TextField
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#767595' } } }}
            color="primary"
            id="outlined-multiline-flexible"
            label="Multiline"
            InputLabelProps={{
                style: { color: '#767595' }
            }}
            multiline
            maxRows={4}
        />
    );
}