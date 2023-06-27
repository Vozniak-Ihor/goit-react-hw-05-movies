import { useEffect, useState } from 'react';
import { getTrending } from 'services/services';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom"


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
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(({id,title,name}) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`}state={{ from: location }}>
                {title || name}
              </NavLink>
            </li>
          ))}
      </ul>

      {error && (
        <h3>
          <p>There were errors on the server.</p>
          <p> We will try to resolve this issue as soon as possible.</p>
        </h3>
      )}
    </>
  );
};

export default Home