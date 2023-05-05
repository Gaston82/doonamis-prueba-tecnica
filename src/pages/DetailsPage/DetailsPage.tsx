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

  return (
    <>
      <section className="details">
        <img
          className="details__image"
          src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
          alt=""
        />
        <article className="details__card">
          <img
            src={`https://image.tmdb.org/t/p/w200${series.poster_path}`}
            alt={series.name}
          />
          <div className="details__body">
            <h2>{series.name}</h2>
            <span>{series.first_air_date.split("-")[0]!}</span>
            <p className="details__description">{series.overview}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailsPage;
