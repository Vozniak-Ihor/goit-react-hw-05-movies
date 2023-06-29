import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('..//pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetail = lazy(() => import('../pages/MovieDetail/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </Router>
  );
};
