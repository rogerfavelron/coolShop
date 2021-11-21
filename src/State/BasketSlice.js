import {createSlice} from '@reduxjs/toolkit';

export const Slice = createSlice({
    name:"basket",
    initialState:{
        products:{ }
    },
    reducers:{
        addProduct : (state,action)=>{
            const payload = action.payload;
            //look at the added thing again!!
            console.log("payload, ", payload)
            if(state.products[payload.name]){
                state.products[payload.name].count+=1
            }
            else{
                const newObj = {...payload,count:1};
                state.products[payload.name] = newObj;

            }
        },
        removeProduct : (state,action)=>{
            let payload = action.payload;
            console.log("remove product payload", payload)
            if(state.products[payload.name].count > 1){
                state.products[payload.name].count-=1
            }
            else{
                delete state.products[payload.name]
            }
        },
        emptyBasket : (state) =>{
            state.products={}
        }
    }
})
export const selectBasket = (state) => state.basket.products;
export const {addProduct,removeProduct,emptyBasket} = Slice.actions;
export default Slice.reducer;