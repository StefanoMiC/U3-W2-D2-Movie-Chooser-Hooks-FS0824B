import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MovieSelect from "./components/MovieSelect";
import MovieCard from "./components/MovieCard";

const App = () => {
  // stato condiviso tra i due componenti MovieSelect e MovieCard
  // state = {
  //   movieTitle: "Venom"
  // };

  const [movieTitle, setMovieTitle] = useState("Venom");

  // questo metodo è disponibile all'interno di MovieSelect passando il riferimento attraverso le sue prop
  const changeMovieTitle = newTitle => {
    setMovieTitle(newTitle);
  };

  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          {/* questo componente legge e scrive nello stato di App */}
          <MovieSelect movieTitle={movieTitle} changeMovieTitle={changeMovieTitle} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {/* questo componente legge dallo stato di App */}
          <MovieCard movieTitle={movieTitle} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
