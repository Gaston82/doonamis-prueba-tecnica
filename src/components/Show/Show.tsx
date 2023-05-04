import { Link } from "react-router-dom";
import { type ShowStructure } from "../../types";

interface ShowProps {
  show: ShowStructure;
}

const Show = ({
  show: { first_air_date, name, poster_path, id },
}: ShowProps): JSX.Element => (
  <Link to={`${id}`}>
    <article>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={name} />
      <h3>{name}</h3>
      <span>{first_air_date.split("-")[0]!}</span>
    </article>
  </Link>
);

export default Show;
