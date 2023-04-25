import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({ beers, searchItem, displayedBeers, handleFilterClick }) => {
  return (
    <CardList
      beers={beers}
      searchItem={searchItem}
      displayedBeers={displayedBeers}
      handleFilterClick={handleFilterClick}
    />
  );
};

export default Main;
