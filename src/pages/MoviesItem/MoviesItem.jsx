import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { findMovieById } from '../../api/api';
import { MovieDetalis } from '../../components/MovieDetails/MovieDetails';

export const MoviesItem = () => {
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
    <div>
      <div>
        <MovieDetalis movie={movie} />

        <ul>
          <li>
            <Link to="cast" state={{ backLinkHref }}>
              {' '}
              Cast{' '}
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ backLinkHref }}>
              {' '}
              reviews{' '}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};