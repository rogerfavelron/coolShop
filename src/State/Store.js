import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './BasketSlice';

export const Store = configureStore({
    reducer:{
        basket:basketReducer
    }
})