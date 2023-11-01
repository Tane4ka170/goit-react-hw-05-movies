import { fetchCastMovieById } from '../../api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : 'no photo'
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;
