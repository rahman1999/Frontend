import { createSlice } from "@reduxjs/toolkit";

const storeSlice=createSlice({
    name:'token',
    initialState:{ value:
        { token:'',role:false }
    },
    reducers:{
        logintoken:(state,action)=>{
            state.value=action.payload;
            console.log(state.value.role)
        }
    }
});

export const {logintoken}=storeSlice.actions
export default storeSlice;