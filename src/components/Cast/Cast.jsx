import { getMovieCast } from '../../services/services';
import { useState, useEffect, useRef } from 'react';
import { useParams ,NavLink,useLocation} from 'react-router-dom';
import css from './Cast.module.css'
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCast(id);
        setCast(data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    getCast();
  }, [id]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/movies/${id}`);
  
  return (
    <>
      <NavLink to={backLinkHref.current}>
        <button className={css.castBtn}>👆roll up</button>
      </NavLink>

      {error && (
        <b>Sorry, there are some problems. Try to come back a little later.</b>
      )}

   {cast && (
  <ul key={id} className={css.castList}>
    {cast.map(({ id, name, character, profile_path }) => (
      <li className={css.castItem} key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
          alt={name}
          className={css.castImg}
        />
        <b className={css.castName}>{name}</b>
        <p className={css.castCharacter}>{character}</p>
      </li>
    ))}
  </ul>
)}

    </>
  );
};
export default Cast;
