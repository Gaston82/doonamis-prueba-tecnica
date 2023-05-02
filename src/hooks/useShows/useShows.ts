import { loadShowsActionCreator } from "../../store/feature/show/showSlice";
import { useAppDispatch } from "../../store/hooks";
import { type ApiResponse, type Shows } from "../../types";

const useShows = () => {
  const dispatch = useAppDispatch();

  const getAllShows = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BASE_URL);
      const shows = (await response.json()) as ApiResponse;

      dispatch(loadShowsActionCreator(shows.results));
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { getAllShows };
};

export default useShows;
