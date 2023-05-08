import { configureStore } from "@reduxjs/toolkit";
import { showReducer } from "./feature/show/showSlice";
import { uiReducer } from "./feature/ui/uiSlice";

export const store = configureStore({
  reducer: { shows: showReducer, ui: uiReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
