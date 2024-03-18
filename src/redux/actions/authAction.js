import { saveUserData } from "../reducers/auth"
import store from "../store"
import types from "../types"


export const login=(data)=>{
    store.dispatch(saveUserData(data))
   

}

export const logout=()=>{
    store.dispatch({type:types.Clear_Reduc_State})

}