import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const CardList = ({ beers, searchItem, handleClick }) => {
  return (
    <div className="CardList">
      <section className="cards">
        {beers.map((beer) => (
          <NavLink
            to={`/beers/${beer.id}`}
            key={beer.id}
            className="active-link"
          >
            <Card
              beer={beer}
              searchItem={searchItem}
              handleClick={handleClick}
            />
          </NavLink>
        ))}
      </section>
    </div>
  );
};

export default CardList;
