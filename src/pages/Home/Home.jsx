import { useEffect, useState } from 'react';
import { getTrending } from 'services/services';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrending();
        setMovies(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, []);
  const location = useLocation();
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Trending today</h1>
        <ul className={css.list}>
          {movies &&
            movies.map(({ id, title, name }) => (
              <li key={id} className={css.item}>
                <NavLink
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={css.link}
                >
                  {title || name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
      {error && (
        <h3>
          <p>There were errors on the server.</p>
          <p> We will try to resolve this issue as soon as possible.</p>
        </h3>
      )}
    </>
  );
};

export default Home;
