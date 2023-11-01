import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovieByName } from '../../api/api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function Movies() {
  const [inputChange, setInputChange] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = (searchParams.get('query') ?? '').trim();

  useEffect(() => {
    setInputChange(productName);

    if (productName === '') return;
    findMovieByName(searchParams.get('query')).then(data => {
      setSearchMovies(data);
    });
  }, [productName, searchParams]);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputChange.trim() !== '') {
      setSearchParams({ query: inputChange.trim() });
    }

    e.target.reset();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Provide a search term{' '}
          <input
            value={inputChange}
            onChange={e => {
              setInputChange(e.target.value);
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <MoviesList searchMovies={searchMovies} />
    </section>
  );
}
