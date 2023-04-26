import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";

const Main = ({ beers, searchItem, handleClick }) => {
  return (
    <CardList beers={beers} searchItem={searchItem} handleClick={handleClick} />
  );
};

export default Main;
