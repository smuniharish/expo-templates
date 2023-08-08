import { debugLog, infoLog } from "@/config/logsConfig";
import { availableLanguages, languageInterface } from "@/i18n";
import { Localization, PayloadAction, createSlice } from "@/imports";

interface initialStateInterface{
    locale:string
}
const initialState:initialStateInterface = {
    locale:Localization.locale,
}
const localizationSlice = createSlice({
    name:"localization",
    initialState,
    reducers:{
        updateLanguageByCode:(state:any,action:PayloadAction<{locale:string}>)=>{
            infoLog("availableLanguages",JSON.stringify(availableLanguages),JSON.stringify(action))
            const language = availableLanguages.filter((l:languageInterface) => l.code === action.payload.locale)[0]
            debugLog("language",language)
            state.locale = language?.code || "en"
        },
        updateLanguage:(state:any,action:PayloadAction<{locale:string}>)=>{
            const language = availableLanguages.filter((l:languageInterface) => l.name === action.payload.locale)[0]
            state.locale = language.code
        },
        resetLocalization:()=>{
            return initialState
        }
    }
})
export const {updateLanguageByCode,updateLanguage,resetLocalization} = localizationSlice.actions
export default localizationSlice.reducer