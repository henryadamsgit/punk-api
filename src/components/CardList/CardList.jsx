import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ beers, searchItem }) => {
  // filter the beers if search item exists
  const filteredBeers = searchItem
    ? beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    : beers;
  return (
    <div className="CardList">
      <section className="cards">
        {filteredBeers.map((beer) => (
          <Card key={beer.id} beer={beer} searchItem={searchItem} />
        ))}
      </section>
    </div>
  );
};

export default CardList;
