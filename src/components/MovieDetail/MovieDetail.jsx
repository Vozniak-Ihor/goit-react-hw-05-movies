import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieDetails } from '../../services/services';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

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

  const { poster_path, original_title, overview, vote_average, genres } =
    movieDetail;
  return (
    <>
      <NavLink to={backLinkHref.current}>
        <button>Go back</button>
      </NavLink>
      {movieDetail && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt="placard"
            />
            <h2>{original_title}</h2>
            <p>{Math.round(vote_average * 10)} %</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <h4>Genres</h4>
            <ul>
              {genres?.map(item => (
                <li key={item.id}>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Addition information</h5>
            <ul>
              <li>
                <NavLink to="Cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="Reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
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
