import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "../features/counter/responseSlice";

export const store = configureStore({
  reducer: {
    response: responseReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;