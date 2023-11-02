import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovieByName } from '../../api/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import s from './Movies.module.css';

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
    <section className={s.moviesSection}>
      <form className={s.moviesForm} onSubmit={handleSubmit}>
        <label className={s.moviesLabel}>
          Input a search query &#8595;{' '}
          <input
            className={s.moviesInput}
            value={inputChange}
            onChange={e => {
              setInputChange(e.target.value);
            }}
          />
        </label>
        <button className={s.moviesButton} type="submit">
          Search
        </button>
      </form>
      <MoviesList searchMovies={searchMovies} />
    </section>
  );
}
