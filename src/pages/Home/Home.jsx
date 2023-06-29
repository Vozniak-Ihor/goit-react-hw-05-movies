import { useEffect, useState } from 'react';
import { getTrending } from 'services/services';
import { MoviesList } from 'components/MoviesList/MoviesList';
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
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>
          <span className={css.gg}></span> Trending today
        </h1>
        <MoviesList movies={movies} />
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
