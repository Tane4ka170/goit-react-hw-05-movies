import { fetchCastMovieById } from 'api/api';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { idMovies } = useParams();

  useEffect(() => {
    fetchCastMovieById(idMovies.id).then(fetchCast => setCast(fetchCast.cast));
  }, [idMovies.id]);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <ul>
          {cast.map(person => {
            return (
              <li key={person.id}>
                <img
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : 'no Photo'
                  }
                  alt={`${person.name}`}
                />
                <div>
                  <p>{person.name}</p>
                  <p>Character: {person.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Suspense>
  );
}
