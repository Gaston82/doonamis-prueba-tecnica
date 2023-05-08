import { createSlice } from "@reduxjs/toolkit";
import { type UiStructure } from "./types";

const initialState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentState: UiStructure) => ({
      isLoading: true,
    }),
    unsetIsLoading: (currentState: UiStructure) => ({
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;
