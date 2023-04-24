import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ beers }) => {
  return (
    <div className="CardList">
      <section className="cards">
        {beers.map((beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </section>
    </div>
  );
};

export default CardList;
