import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/data/index';

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default store;