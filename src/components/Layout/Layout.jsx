import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink className={s.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={s.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
