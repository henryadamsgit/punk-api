import React from "react";
import { useParams } from "react-router-dom";
import "./BeerDetails.scss";

const limitDescription = (description, limit = 30) => {
  const words = description.split(" ");
  if (words.length > limit) {
    description = words.slice(0, limit).join(" ") + "...";
  }
  return description;
};

const BeerDetails = ({ beers }) => {
  const limitedDescription = limitDescription(beer.description);

  const { id } = useParams();
  const beer = beers.find((beer) => beer.id === id);

  return (
    <div className="BeerDetails">
      {beer?.name && (
        <>
          <h2 className="beer-name">{beer.name}</h2>
          <img src={beer.image_url} alt="beer-img" />
          <p className="beer-food">
            🌭Best Food Pairings: {beer.food_pairing.join(", ")}
          </p>
          <p className="beer-info">ℹ️More Info: {limitedDescription}</p>
          <p className="beer-tips">🍺Brewer's Tips: {beer.brewers_tips}</p>
        </>
      )}
    </div>
  );
};

export default BeerDetails;
