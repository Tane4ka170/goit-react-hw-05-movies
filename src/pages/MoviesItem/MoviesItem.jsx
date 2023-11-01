import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { findMovieById } from '../../api/api';
import { MovieDetalis } from '../../components/MovieDetails/MovieDetails';
import s from './MoviesItem.module.css';

const MoviesItem = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    findMovieById(id).then(response => setMovie(response));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.movieWrapper}>
      <div className={s.movieOverlay}>
        <Link className={s.return} to={backLinkHref}>
          &#8592; Return
        </Link>
        <MovieDetalis movie={movie} />

        <NavLink className={s.movieLink} to={`cast`} state={{ backLinkHref }}>
          Cast
        </NavLink>

        <NavLink
          className={s.movieLink}
          to={`reviews`}
          state={{ backLinkHref }}
        >
          Reviews
        </NavLink>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesItem;
