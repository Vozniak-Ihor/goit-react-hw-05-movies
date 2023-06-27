import Home from '../pages/Home';
import Header from './Header/Header';
import Movies from 'pages/Movies';
import MovieDetail from './MovieDetail/MovieDetail';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
