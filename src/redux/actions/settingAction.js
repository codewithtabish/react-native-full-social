import { changeLang ,changeTheme} from "../reducers/appSettingSlice"
import store from "../store"


export const changeThemeMethod=(data)=>{
    store.dispatch(changeTheme(data))
   

}

export const changeLanguageMethod=(data)=>{
    store.dispatch(changeLang(data))

}