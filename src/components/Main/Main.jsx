import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({ beers, searchItem, handleClick }) => {
  return (
    <CardList beers={beers} searchItem={searchItem} handleClick={handleClick} />
  );
};

export default Main;
