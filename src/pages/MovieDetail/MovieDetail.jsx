import { useParams, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from '../../services/services';
import { BasicInformation } from 'components/BasicInformation/BasicInformation';
import { AdditionInformation } from 'components/AdditionInformation/AdditionInformation';
import css from './MovieDetail.module.css';

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesDetail = async () => {
      try {
        const details = await getMovieDetails(id);
        // console.log(details);
        setMovieDetail(details);
      } catch (error) {
        setError(error);
      }
    };
    fetchMoviesDetail();
  }, [id]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <>
      {movieDetail && (
        <>
          <div className={css.container}>
            <NavLink to={backLinkHref.current}>
              <button className={css.MoviesDetailBtn}>Go Back</button>
            </NavLink>
            <BasicInformation movieDetail={movieDetail} />
            <AdditionInformation />
          </div>
        </>
      )}
      {error && (
        <h3>
          <b>There were errors on the server.</b>
          <b> We will try to resolve this issue as soon as possible.</b>
        </h3>
      )}
    </>
  );
};

export default MovieDetail;
