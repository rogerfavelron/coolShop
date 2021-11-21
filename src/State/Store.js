import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './BasketSlice';

//export store.
export const Store = configureStore({
    reducer:{
        basket:basketReducer
    }
})