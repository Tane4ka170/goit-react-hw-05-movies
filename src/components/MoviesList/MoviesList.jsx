import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MoviesList({ searchMovies }) {
  const location = useLocation();

  if (!searchMovies || searchMovies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <ul>
      {searchMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://placeholder-url.com/placeholder-image.jpg'
              }
              alt={movie.title}
              height="446px"
            />
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
