import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useShows from "../../hooks/useShows/useShows";
import { useAppSelector } from "../../store/hooks";
import Show from "../../components/Show/Show";

const DetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { getSeriesById } = useShows();

  useEffect(() => {
    void getSeriesById(id!);
  }, [id]);

  const series = useAppSelector((state) => state.shows.currentShow);

  return (
    <>
      <h1>Details</h1>
      <Show show={series} />
    </>
  );
};

export default DetailsPage;
