import { useEffect } from "react";
import useShows from "../../hooks/useShows/useShows";
import { useAppSelector } from "../../store/hooks";
import "./Shows.scss";
import Show from "../Show/Show";

const Shows = (): JSX.Element => {
  const { getAllShows } = useShows();

  useEffect(() => {
    (async () => {
      await getAllShows();
    })();
  }, []);

  const shows = useAppSelector((state) => state.shows.shows);

  return (
    <ul className="shows-grid">
      {shows.map((show) => (
        <li key={show.id}>
          <Show show={show} />
        </li>
      ))}
    </ul>
  );
};

export default Shows;
