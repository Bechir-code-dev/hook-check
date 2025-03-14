import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";

const MovieCard = ({ title, description, posterURL, rating }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          color2={"#ffd700"}
          half={true}
          value={rating}
          edit={false}
        />
      </Card>
    </>
  );
};
export default MovieCard;
