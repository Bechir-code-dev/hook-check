import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const MovieCard = ({ id,title, description, posterURL, rating }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="movie-card">
      <Link to={`/trailer/${id}`}>
      <Card style={{ width: "18rem" , height:'650px'}}>
        <Card.Img  variant="top" src={posterURL} style={{height:'350px'}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" style={{marginLeft:'60px', marginTop:'10px'}}>Go somewhere</Button>
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
      </Link>
    </div>
  );
};
export default MovieCard;
