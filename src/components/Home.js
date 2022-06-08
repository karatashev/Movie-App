import { useState } from "react";
import MovieList from "./MovieList";

const Home = () => {
  const [movies, setMovies] = useState([
    {
      title: "Gladiator",
      body: "lorem ipsum...",
      director: "Ridley Scott",
      rating: 8.5,
      img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/11/Russell-Crowe-in-Gladiator.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
      id: 1,
    },
    {
      title: "The Italian job",
      body: "lorem ipsum...",
      director: "F.Garry Grey",
      rating: 7.0,
      img: "https://www.wallpaperup.com/uploads/wallpapers/2014/07/07/389947/81c512ff06b10845ca4eda8b74167c82-700.jpg",
      id: 2,
    },
    {
      title: "Enemy of the state",
      body: "lorem ipsum...",
      director: "Tony Scott",
      rating: 7.3,
      img: 'https://www.denofgeek.com/wp-content/uploads/2013/05/enemy-state-main.jpg?fit=640%2C380',
      id: 3,
    },
    {
      title: "Man on fire",
      body: "lorem ipsum...",
      director: "Tony Scott",
      rating: 7.7,
      img: 'https://www.flixwatch.co/wp-content/uploads/60034560.jpg',
      id: 4,
    },
    {
      title: "The silence of the lambs",
      body: "lorem ipsum...",
      director: "Jonathan Demme",
      rating: 8.6,
      img: 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/silence-of-the-lambs-1991-013-quad-poster-hopkins-behind-foster-blue-tint-1000x750.jpg?itok=ZtVgAmX0',
      id: 5,
    },
  ]);

  // To delete a movie from list
  const handleDelete = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

  return (
    <div className="home">
      <MovieList
        movies={movies}
        title="Watchlist"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
