import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies && movies.map(item => {
        return (
          <li key={item.id} className={css.item}>
            <Link to={`/movies/${item.id}`} state={{ from: location }} className={css.link}>
              {item.title || item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
