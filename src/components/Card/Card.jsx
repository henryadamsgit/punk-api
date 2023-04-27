import React from "react";
import "./Card.scss";

const Card = ({ beer }) => {
  return (
    <div className="Card">
      <img src={beer.image_url} alt="beer-images" />
      <h3 className="beer-name">{beer.name}</h3>
      <p className="beer-tagline">{beer.tagline}</p>
      <p className="beer-abv">{beer.abv}</p>
    </div>
  );
};

export default Card;
