import { type ShowStructure } from "../../types";

interface ShowProps {
  show: ShowStructure;
}

const Show = ({
  show: { first_air_date, name, poster_path },
}: ShowProps): JSX.Element => (
  <article>
    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={name} />
    <h3>{name}</h3>
    <span>{first_air_date.split("-")[0]!}</span>
  </article>
);

export default Show;
