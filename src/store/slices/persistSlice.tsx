import { PayloadAction, createSlice } from '@/imports';

const initialState = {
  refreshToken: null,
};
const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    updateRefreshToken: (state: any, action: PayloadAction<{ refreshToken: string }>) => {
      const { refreshToken } = action.payload;
      state.refreshToken = refreshToken;
    },
    clearRefreshToken: (state: any) => {
      state.refreshToken = null;
    },
  },
});
export const { updateRefreshToken, clearRefreshToken } = persistSlice.actions;
export default persistSlice.reducer;
