import { getMovieCast } from '../../services/services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCast(id);
        setCast(data);
      } catch (error) {
        setError(error);
      }
    };
    getCast();
  }, [id]);
  return (
    <>
      {error && (
        <p>Sorry, there are some problems. Try to come back a little later.</p>
      )}
      {cast &&
        cast?.map(({ id, name, character, profile_path }) => {
          return (
            <ul key={id}>
              <li>
                <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={name} />
                <b>{name}</b>
                <p>{character}</p>
              </li>
            </ul>
          );
        })}
    </>
  );
};
export default Cast;
