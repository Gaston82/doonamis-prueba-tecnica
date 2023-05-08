import { useEffect } from "react";
import useShows from "../../hooks/useShows/useShows";
import { useAppSelector } from "../../store/hooks";
import "./Shows.scss";
import Show from "../Show/Show";
import Spinner from "../Spinner/Spinner";

const Shows = (): JSX.Element => {
  const { getAllShows } = useShows();

  useEffect(() => {
    (async () => {
      await getAllShows();
    })();
  }, []);

  const shows = useAppSelector((state) => state.shows.shows);

  return (
    <main className="series">
      <h2 className="series__title">Series online</h2>
      <ul className="series-grid">
        {shows.map((show) => (
          <li key={show.id}>
            <Show show={show} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shows;
