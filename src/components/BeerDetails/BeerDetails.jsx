import React from "react";
import { useParams } from "react-router-dom";
import "./BeerDetails.scss";
import HomeButton from "../HomeButton/HomeButton";

const limitDescription = (description, limit = 30) => {
  const words = description.split(" ");
  if (words.length > limit) {
    description = words.slice(0, limit).join(" ") + "...";
  }
  return description;
};

const BeerDetails = ({ beers }) => {
  const { id } = useParams();

  const beer = beers.find((beer) => beer.id == id);
  const limitedDescription = limitDescription(beer.description);

  return (
    <section className="beer-details">
      {beer?.name && (
        <>
          <h2 className="beer-name">{beer.name}</h2>
          <img className="beer-img" src={beer.image_url} alt="beer-img" />
          <p className="beer-food">
            🌭Best Food Pairings: {beer.food_pairing.join(", ")}
          </p>
          <p className="beer-info">ℹ️More Info: {limitedDescription}</p>
          <p className="beer-tips">🍺Brewer's Tips: {beer.brewers_tips}</p>
          <HomeButton className="button-return">Return</HomeButton>
        </>
      )}
    </section>
  );
};

export default BeerDetails;
