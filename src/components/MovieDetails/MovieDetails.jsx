export function MovieDetalis({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        width="400px"
        height="500px"
      />
      <div>
        <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p> User score: {((movie.vote_average / 10) * 100).toFixed(0)} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres.map(item => (
          <p key={item.id}> ☑️ {item.name}</p>
        ))}
      </div>
    </div>
  );
}
