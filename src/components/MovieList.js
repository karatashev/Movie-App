
const MovieList = ({ movies, title, director, rating, img, handleDelete}) => {

  return (
    <div className="movie-list">
      <h2>{ title }</h2>
      {movies.map(movie => (
        <div className="movie-preview" key={movie.id}>
          <img src={movie.img} alt=""/>
          <h2>{ movie.title }</h2>
          <p>Directed by { movie.director }</p>
          <p>Rating: { movie.rating }/10</p>
          <button onClick={() => handleDelete(movie.id)}>Already watched</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList