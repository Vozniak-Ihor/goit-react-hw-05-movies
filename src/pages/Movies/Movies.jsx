import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../services/services';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { InputMovies } from 'components/InputMovies/InputMovies';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState('');
  const [noResult, setNoResult] = useState(false);

  const queryName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryName) {
      return;
    }
    setNoResult(false);
    setSearchMovies('');
    const fetchSearchMovies = async () => {
      const data = await getSearchMovies(queryName);
      if (data.length === 0) {
        setNoResult(true);
        return;
      }
      setSearchMovies(data);
    };
    fetchSearchMovies();
  }, [queryName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main className={css.container}>
      {noResult && <b>No results for your request</b>}
      <InputMovies value={queryName} onChange={updateQueryString} />
      <MoviesList movies={searchMovies} />
    </main>
  );
};

export default Movies;
