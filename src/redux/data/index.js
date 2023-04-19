import {createSlice} from "@reduxjs/toolkit";
// Slice

const initialState = {
    data: [
        {id: 1, name: 'IR - Tehran'},
        {id: 2, name: 'GE - Tbilisi'},
        {id: 3, name: 'AU - Sydney'},
    ],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },
        removeData: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;