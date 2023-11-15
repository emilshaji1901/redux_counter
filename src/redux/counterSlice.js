import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },//action are createdinside this reducers key as objects
    reducers:{
        //logic to update 
        increment:(state,action)=>{
            state.value += action.payload
        },
        decrement:(state,action)=>{
            state.value -= action.payload
        },
        reset:(state)=>{
            state.value=0
        }

    }
})


//action is required by component inorder to update state
export const {increment,decrement,reset} = counterSlice.actions


//reducer is req to store to change the state value
export default counterSlice.reducer
