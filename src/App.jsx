import { React, useState, useEffect } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import SideNav from "./container/SideNav/SideNav";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterABV, setFilterABV] = useState(false);
  const [filterClassic, setFilterClassic] = useState(false);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const getBeers = async (filterABV, filterClassic, filterPH) => {
    const url = "https://api.punkapi.com/v2/beers";
    let urlWithFilters = url;

    if (filterABV) {
      urlWithFilters += `?abv_gt=6`;
    }

    if (filterClassic) {
      urlWithFilters += `?brewed_before=1-2010`;
    }

    if (filterPH) {
      urlWithFilters += `?ph_lt=4`;
    }

    const res = await fetch(urlWithFilters);
    const data = await res.json();
    console.log(data);
    setBeers(data);
  };

  useEffect(() => {
    getBeers(filterABV, filterClassic);
  }, [filterABV, filterClassic]);

  useEffect(() => {
    setFilteredBeers(
      beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [beers, searchItem]);

  const handleInput = (event) => {
    const allInput = event.target.value.toLowerCase();
    setSearchItem(allInput);
  };

  const handleClick = (event) => {
    const buttonClicked = event.target.value;
    if (buttonClicked === "buttonABV") {
      setFilterABV(true);
      setFilterClassic(false);
    } else if (buttonClicked === "buttonClassic") {
      setFilterABV(false);
      setFilterClassic(true);
    }
  };

  const resetFilters = () => {
    setFilterABV(false);
    setFilterClassic(false);
  };

  return (
    <>
      <div className="App">
        <SideNav
          searchItem={searchItem}
          handleInput={handleInput}
          handleClick={handleClick}
          resetFilters={resetFilters}
        />
        <Main
          beers={filteredBeers}
          searchItem={searchItem}
          handleClick={handleClick}
        />
        {filteredBeers.length === 0 && (
          <p>
            ❌🍺 No beers found 😢 Please try a different search or filter
            option.
          </p>
        )}
      </div>
    </>
  );
};

export default App;
