import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Shows } from "../../../types";

const initialState: Shows = [];

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    loadShows: (currentState: Shows, action: PayloadAction<Shows>): Shows => [
      ...action.payload,
    ],
  },
});

export const showReducer = showSlice.reducer;
export const { loadShows: loadShowsActionCreator } = showSlice.actions;
