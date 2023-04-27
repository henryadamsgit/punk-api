import React from "react";
import "./Card.scss";

const Card = ({ beer }) => {
  return (
    <div className="card">
      <h3 className="card-namee">{beer.name}</h3>
      <img className="card-image" src={beer.image_url} alt="beer-images" />
      <p className="card-tagline">{beer.tagline}</p>
      <p className="card-abv">{beer.abv}%</p>
    </div>
  );
};

export default Card;
