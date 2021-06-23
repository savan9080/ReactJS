import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initilAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initilAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      console.log("login");
    },
    logout(state) {
      state.isAuthenticated = false;
      console.log("logout");
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
