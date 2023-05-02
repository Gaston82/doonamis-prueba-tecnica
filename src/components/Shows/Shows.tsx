import { useEffect } from "react";
import useShows from "../../hooks/useShows/useShows";
import { useAppSelector } from "../../store/hooks";

const Shows = (): JSX.Element => {
  const { getAllShows } = useShows();

  useEffect(() => {
    (async () => {
      await getAllShows();
    })();
  }, []);

  const shows = useAppSelector((state) => state.shows);

  return (
    <ul className="shows-grid">
      {shows.map((show) => (
        <li key={show.id}>
          <article>
            <img
              src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
              alt={show.name}
            />
            <h3>{show.name}</h3>
            <span>{show.first_air_date.split("-")[0]!}</span>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Shows;
