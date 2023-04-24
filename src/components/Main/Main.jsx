import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = (props) => {
  const { beers } = props;
  return <CardList beers={beers} />;
};

export default Main;
