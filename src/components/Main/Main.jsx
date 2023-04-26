import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({ beers, searchItem, displayedBeers, handleClick }) => {
  return (
    <CardList
      beers={beers}
      searchItem={searchItem}
      displayedBeers={displayedBeers}
      handleClick={handleClick}
    />
  );
};

export default Main;
