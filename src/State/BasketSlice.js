import {createSlice} from '@reduxjs/toolkit';

export const Slice = createSlice({
    name:"basket",
    initialState:{
        products:{}
    },
    reducers:{
        addProduct : (state,action)=>{
            const payload = action.payload;
            //look at the added thing again!!
            if(state.products[payload.added]){
                state.products[payload.added].count+=1
            }
            else{
                const newObj = {...payload,count:1};
                state.products[payload.added] = newObj;
            }
        },
        removeProduct : (state,action)=>{
            //doffy
        }
    }
})
export const selectBasket = (state) => state.basket.products;
export const {addProduct,removeProduct} = Slice.actions;
export default Slice.reducer;