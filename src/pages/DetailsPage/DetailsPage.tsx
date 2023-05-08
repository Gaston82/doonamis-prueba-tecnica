import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useShows from "../../hooks/useShows/useShows";
import { useAppSelector } from "../../store/hooks";
import "./DetailsPage.scss";

const DetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { getSeriesById } = useShows();

  useEffect(() => {
    void getSeriesById(id!);
  }, [id]);

  const series = useAppSelector((state) => state.shows.currentShow);

  const actors = series.credits.cast.slice(1, 3);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <section className="details">
        <img
          className="details__image"
          src={`${imageUrl}${series?.backdrop_path || series?.poster_path} `}
          alt={series.name}
        />
        <article className="details__card">
          <img
            src={`https://image.tmdb.org/t/p/w200${series.poster_path}`}
            alt={series.name}
          />
          <div className="details__body">
            <h2>{series.name}</h2>
            <div className="cast-container">
              {series.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
            <span>{series.first_air_date.split("-")[0]!}</span>
            <div className="cast-container">
              {actors.map((actor) => (
                <span key={actor.id}>{`${actor.name},`} </span>
              ))}
            </div>
            <div>
              <p className="details__description">{series.overview}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailsPage;
