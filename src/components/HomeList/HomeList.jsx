import { Link, useLocation } from 'react-router-dom';
import s from './HomeList.module.css';

export function HomeList({ trendings }) {
  const location = useLocation();
  return trendings.map(trending => {
    return (
      <li key={trending.id} className={s.trendingLi}>
        <Link to={`movies/${trending.id}`} state={{ from: location }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${trending.backdrop_path}`}
            alt={trending.title}
            className={s.trendingImg}
          />
          <p className={s.trendingTitle}>{trending.title}</p>
        </Link>
      </li>
    );
  });
}
