import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ beers, searchItem, displayedBeers, handleFilterClick }) => {
  // filter the beers if search item exists
  const filteredBeers = searchItem
    ? beers
        .filter((beer) =>
          beer.name.toLowerCase().includes(searchItem.toLowerCase())
        )
        .filter((beer) => beer.abv > 6) // added filter for ABV
    : beers.filter((beer) => beer.abv > 6); // added filter for ABV

  const beersToRender =
    displayedBeers && displayedBeers.length > 0
      ? displayedBeers.filter((beer) => beer.abv > 6)
      : filteredBeers.filter((beer) => beer.abv > 6);

  return (
    <div className="CardList">
      <section className="cards">
        {beersToRender.map((beer) => (
          <Card
            key={beer.id}
            beer={beer}
            searchItem={searchItem}
            handleFilterClick={handleFilterClick}
            displayedBeers={displayedBeers}
          />
        ))}
      </section>
    </div>
  );
};

export default CardList;
