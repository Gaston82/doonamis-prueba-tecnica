import { Link } from "react-router-dom";
import { type ShowStructure } from "../../types";
import "./Show.scss";

interface ShowProps {
  show: ShowStructure;
}

const Show = ({
  show: { first_air_date, name, poster_path, id },
}: ShowProps): JSX.Element => (
  <Link to={`${id}`}>
    <article className="show">
      <img
        className="show__image"
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={name}
      />
      <h3>{name}</h3>
      <div className="box-year">
        <span className="show__year">{first_air_date.split("-")[0]!}</span>
      </div>
    </article>
  </Link>
);

export default Show;
