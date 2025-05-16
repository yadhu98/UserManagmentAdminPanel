import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface inititalState{
    token : string | null;
    isAuthenticated : boolean ,
    userState : {
        username : string | null
    }
}

const initialState: inititalState = {
    token : localStorage.getItem('auth-token'),
    isAuthenticated : !!localStorage.getItem('auth-token'),
    userState : {
        username : localStorage.getItem('username')
    }
}

const authSlice =createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loginSucess(state ,action : PayloadAction<string | unknown>){
            if(typeof action.payload === 'string'){ 
            state.token = action.payload
            state.isAuthenticated = true
            localStorage.setItem('auth-token',action.payload)
            }
            
        },
        logout(state){
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem('username')
            localStorage.removeItem('auth-token')

        },
        userState(state,action){
            state.userState.username = action.payload
            localStorage.setItem('username',action.payload)
        }
    }
})

export const {loginSucess,logout,userState} = authSlice.actions;
export default authSlice.reducer