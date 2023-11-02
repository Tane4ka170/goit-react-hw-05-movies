import { fetchCastMovieById } from '../../api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import nophoto from '../../Images/nophoto.jpg';
import s from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchCastMovieById(id);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [id]);

  return (
    <>
      {cast.length !== 0 && (
        <div className={s.castContainer}>
          <h2 className={s.castTitle}>Movie Cast</h2>
          <ul className={s.castList}>
            {cast.map(actor => (
              <li key={actor.id} className={s.castItem}>
                <img
                  width="200px"
                  height="300px"
                  className={s.castImage}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${nophoto}`
                  }
                  alt={actor.original_name}
                />
                <p className={s.castName}>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && (
        <div className={s.noCastMessage}>
          We don't have any cast for this movie.
        </div>
      )}
    </>
  );
};

export default Cast;
