import React from "react";
import "./Card.scss";

const limitDescription = (description, limit = 20) => {
  const words = description.split(" ");
  if (words.length > limit) {
    description = words.slice(0, limit).join(" ") + "...";
  }
  return description;
};

const Card = ({ beer }) => {
  const limitedDescription = limitDescription(beer.description);

  return (
    <div className="Card">
      <img src={beer.image_url} alt="beer-images" />
      <h3 className="beer-name">{beer.name}</h3>
      <p className="beer-description">{limitedDescription}</p>
      <p className="beer-abv">{beer.abv}</p>
    </div>
  );
};

export default Card;
