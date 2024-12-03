import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = props => {
  // state = {
  //   movie: null
  // };
  const [movie, setMovie] = useState(null);

  const fetchMovieData = async () => {
    // "http://www.omdbapi.com/?apikey=43a932c8&s="
    console.log("CARD fetch()");

    // la prop movieTitle mi corrisponde al dato aggiornato dello stato movieTitle in App.jsx
    // quando il metodo fetchMovieData verrà ri-chiamato sarà quello il momento in cui ri-leggeremo il valore di this.props.movieTitle aggiornato al momento attuale
    const resp = await fetch("http://www.omdbapi.com/?apikey=43a932c8&s=" + props.movieTitle);
    if (resp.ok) {
      const movieData = await resp.json();

      console.log("CARD setState()");
      setMovie(movieData.Search[0]);
    }
  };

  // questo effetto scatta sia al mount che all'update della prop.movieTitle
  useEffect(() => {
    fetchMovieData();
  }, [props.movieTitle]);

  // this.fetchMovies() // non posso chiamare fetchMovies dentro render === LOOP INFINITO
  console.log("CARD RENDER");
  return (
    <>
      {movie ? (
        <Card>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Year}</Card.Text>
            <Button variant="primary">{movie.imdbID}</Button>
          </Card.Body>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MovieCard;
