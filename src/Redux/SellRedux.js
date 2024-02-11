import { createSlice } from '@reduxjs/toolkit'
import { FuelSelled } from './ApiCall';
const SellSlice=createSlice({
name:"Sell",
initialState:{
    sells:"",
    isError:false,
    isFetching:false,
},
reducers:{},
extraReducers:{
    [FuelSelled.pending]:(state)=>{
        state.sells="";
    },
    [FuelSelled.fulfilled]:(state,action)=>{
        //  const sells = action.payload;
         state.sells=action.payload;
    }
    },
    [FuelSelled.rejected]:(state)=>{
      state.sells="";
        state.isFetching=false;
        state.isError=true;
    }
}
)
export default SellSlice.reducer;