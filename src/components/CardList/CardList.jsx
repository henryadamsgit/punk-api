import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ beers, searchItem, handleClick }) => {
  return (
    <div className="CardList">
      <section className="cards">
        {beers.map((beer) => (
          <Card
            key={beer.id}
            beer={beer}
            searchItem={searchItem}
            handleClick={handleClick}
          />
        ))}
      </section>
    </div>
  );
};

export default CardList;
