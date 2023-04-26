import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const CardList = ({ beers, searchItem, handleClick }) => {
  return (
    <div className="CardList">
      <section className="cards">
        {beers.map((beer) => (
          <Link to={`/beers/${beer.id}`} key={beer.id}>
            <Card
              beer={beer}
              searchItem={searchItem}
              handleClick={handleClick}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CardList;
