import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type ShowStructure, type ShowState, type Shows } from "../../../types";

const initialState: ShowState = {
  shows: [],
  currentShow: {
    id: 0,
    name: "",
    overview: "",
    first_air_date: "",
    vote_average: 0,
    poster_path: "",
  },
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    loadShows: (
      currentState: ShowState,
      action: PayloadAction<ShowStructure[]>
    ): ShowState => ({
      ...currentState,
      shows: [...action.payload],
    }),
    loadShow: (
      currentState: ShowState,
      action: PayloadAction<ShowStructure>
    ): ShowState => ({
      ...currentState,
      currentShow: action.payload,
    }),
  },
});

export const showReducer = showSlice.reducer;
export const {
  loadShows: loadShowsActionCreator,
  loadShow: loadShowActionCreator,
} = showSlice.actions;
