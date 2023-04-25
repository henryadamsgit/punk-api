import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = (props) => {
  const { beers, searchItem } = props;
  return <CardList beers={beers} searchItem={searchItem} />;
};

export default Main;
