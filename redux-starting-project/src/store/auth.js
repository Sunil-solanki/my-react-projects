import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isauthenticated: false };
const authSlice = createSlice({
  name: "auth",
 initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isauthenticated = true;
    },
    logout(state) {
      state.isauthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;