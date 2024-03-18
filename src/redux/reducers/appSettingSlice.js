import { createSlice } from '@reduxjs/toolkit';

const appSettingSlixe=createSlice({
    name:'appSetting',
    initialState:{
        lang:'en',
        isDark:true
    },
    reducers:{
        changeTheme:(state,action)=>{
            state.isDark=action.payload
        },
        changeLang:(state,action)=>{
            state.lang=action.payload
        },
    }
})


export const {changeLang,changeTheme}=appSettingSlixe.actions

export default appSettingSlixe.reducer