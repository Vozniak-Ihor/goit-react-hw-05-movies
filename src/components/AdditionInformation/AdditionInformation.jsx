import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import css from './AdditionInformation.module.css';

export const AdditionInformation = () => {
  return (
    <div className={css.containerAdditionInformation}>
      <h5 className={css.titleAddition}>Addition information</h5>
      <ul className={css.listAddition}>
        <li className={css.itemAddition}>
          <NavLink to="Cast" className={css.linkAddition}>
            Cast
          </NavLink>
        </li>
        <li className={css.itemAddition}>
          <NavLink to="Reviews" className={css.linkAddition}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
