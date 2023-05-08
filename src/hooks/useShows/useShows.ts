import {
  loadShowActionCreator,
  loadShowsActionCreator,
} from "../../store/feature/show/showSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/feature/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { type ShowStructure, type ApiResponse, type Shows } from "../../types";

const useShows = () => {
  const dispatch = useAppDispatch();

  const getAllShows = async () => {
    dispatch(setIsLoadingActionCreator());
    try {
      const response = await fetch(import.meta.env.VITE_SERIES_URL);
      const shows = (await response.json()) as ApiResponse;

      dispatch(loadShowsActionCreator(shows.results));
      dispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      return (error as Error).message;
    }
  };

  const getSeriesById = async (id: string) => {
    dispatch(setIsLoadingActionCreator());
    const url = import.meta.env.VITE_BASE_URL;
    const api_Key = import.meta.env.VITE_API_KEY;
    const language = "en-US";

    try {
      const response = await fetch(
        `${url}${id}?api_key=${api_Key}&append_to_response=credits`
      );
      const show = (await response.json()) as ShowStructure;

      dispatch(loadShowActionCreator(show));
      dispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { getAllShows, getSeriesById };
};

export default useShows;
