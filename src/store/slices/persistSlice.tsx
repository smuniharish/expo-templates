import { PayloadAction, createSlice } from "@/imports"

const initialState = {
    refreshToken:null,
}
const persistSlice = createSlice({
    name: "persist",
    initialState,
    reducers:{
        updateRefreshTokens:(state:any,action:PayloadAction<{refreshToken:string}>)=>{
            const {refreshToken} = action.payload
            state.refreshToken = refreshToken
        },
        resetPersist:()=>{
            return initialState
        }
    }
})
export const {updateRefreshTokens,resetPersist} = persistSlice.actions
export default persistSlice.reducer