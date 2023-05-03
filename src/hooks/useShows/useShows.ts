import {
  loadShowActionCreator,
  loadShowsActionCreator,
} from "../../store/feature/show/showSlice";
import { useAppDispatch } from "../../store/hooks";
import { type ShowStructure, type ApiResponse, type Shows } from "../../types";

const useShows = () => {
  const dispatch = useAppDispatch();

  const getAllShows = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERIES_URL);
      const shows = (await response.json()) as ApiResponse;

      dispatch(loadShowsActionCreator(shows.results));
    } catch (error) {
      return (error as Error).message;
    }
  };

  const getSeriesById = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERIES_DETAILS_URL);
      const show = (await response.json()) as ShowStructure;

      dispatch(loadShowActionCreator(show));
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { getAllShows, getSeriesById };
};

export default useShows;
