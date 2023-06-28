import { useParams, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
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
      <NavLink to={backLinkHref.current}>
        <button className={css.MoviesDetailBtn}><span className={css.MoviesDetailBtn2}>Go Back</span></button>
      </NavLink>
      {movieDetail && (
        <>
          <div className={css.container}>
            <BasicInformation movieDetail={movieDetail} />
            <AdditionInformation/>
          </div>
        </>
      )}
      {error && (
        <h3>
          <p>There were errors on the server.</p>
          <p> We will try to resolve this issue as soon as possible.</p>
        </h3>
      )}
    </>
  );
};

export default MovieDetail;
