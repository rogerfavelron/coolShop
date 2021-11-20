import {createSlice} from '@reduxjs/toolkit';

export const Slice = createSlice({
    name:"basket",
    initialState:{
        products:{
            "Luffy":{
                "count":5,
                "name":"Luffy",
                "price":1500000000,
                "image":"https://i.ibb.co/Z2DV2MT/luffy.png"
            },
            "Zoro":{
                "count":5,
                "name":"Zoro",
                "price":320000000,
                "image":"https://i.ibb.co/Z2DV2MT/luffy.png"
            },
            "Robin":{
                "count":5,
                "name":"Robin",
                "price":320000000,
                "image":"https://i.ibb.co/Z2DV2MT/luffy.png"
            },
            "Nami":{
                "count":5,
                "name":"Nami",
                "price":320000000,
                "image":"https://i.ibb.co/Z2DV2MT/luffy.png"
            },
            "Franky":{
                "count":5,
                "name":"Franky",
                "price":320000000,
                "image":"https://i.ibb.co/Z2DV2MT/luffy.png"
            }
        }
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