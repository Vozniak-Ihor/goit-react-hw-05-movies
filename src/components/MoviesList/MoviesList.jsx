import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies &&
        movies?.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Link
                to={`/movies/${item.id}`}
                state={{ from: location }}
                className={css.link}
              >
                {item.title || item.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
