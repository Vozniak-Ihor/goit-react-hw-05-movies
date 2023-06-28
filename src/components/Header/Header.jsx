import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
// import { Suspense } from "react"
// import Loader from "components/Loader/Loader"
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
      {/* <Suspense fallback={<LoaderContainer><Loader/></LoaderContainer>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default Header;
