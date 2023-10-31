import s from './MovieDetails.module.css'

export function MovieDetalis({ movie }) {
  return (
    <div className={s.movieOverlay}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        width="400px"
        height="500px"
        className={s.poster}
      />
      <div className={s.movieInfo}>
        <h2 className={s.movieTitle}>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p className={s.score}> User score: {((movie.vote_average / 10) * 100).toFixed(0)} %</p>
        <h3 className={s.moviesHeading}>Overview</h3>
        <p className={s.movieP}>{movie.overview}</p>
        <h3 className={s.moviesHeading}>Genres</h3>
        {movie.genres.map(item => (
          <p key={item.id} className={s.movieP}> ☑️ {item.name}</p>
        ))}
      </div>
    </div>
  );
}
