import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import css from './Header.module.css';
const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <NavLink to="/" className={css.NavLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.NavLink}>
            Movies
          </NavLink>
        </div>
      </header>
      <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
