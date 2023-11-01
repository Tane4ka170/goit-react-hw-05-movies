import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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

        <ul className={s.movieUl}>
          <li className={s.movieLi}>
            <Link className={s.movieLink} to={`cast`} state={{ backLinkHref }}>
              Cast
            </Link>
          </li>
          <li className={s.movieLi}>
            <Link
              className={s.movieLink}
              to={`reviews`}
              state={{ backLinkHref }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoviesItem;
