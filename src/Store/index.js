
import { createSlice,configureStore } from '@reduxjs/toolkit'
 const initalState= {value:0, showCounter:true}

const counterSlice=createSlice({
    name:'counter',
    initialState:initalState,
    reducers:{
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        toggle(state) {
            state.showCounter=!state.showCounter;
        },

    }
})
const authinitalState={isAuthenticated:false,}
const authSlice=createSlice({
    name:'authenticated',
    initialState:authinitalState,
    reducers:{
    login(state){
    state.isAuthenticated=true;
    },
    logout(state){
        state.isAuthenticated=false;
    }
    }
})

const store= configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})
export const counterAction=counterSlice.actions;
export const authAction=authSlice.actions;
export default store;