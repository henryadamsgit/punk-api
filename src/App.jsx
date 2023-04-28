import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import SideNav from "./container/SideNav/SideNav";
import BeerDetails from "./components/BeerDetails/BeerDetails";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [filterABV, setFilterABV] = useState(false);
  const [filterClassic, setFilterClassic] = useState(false);
  const [filterPH, setFilterPH] = useState(false);

  const getBeers = async (filterABV, filterClassic, filterPH) => {
    const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
    let urlWithFilters = url;

    if (filterABV) {
      urlWithFilters += `&abv_gt=6`;
    }

    if (filterClassic) {
      urlWithFilters += `&brewed_before=1-2010`;
    }

    if (filterPH) {
      setFilteredBeers(filterByPH(beers));
      return;
    }

    const res = await fetch(urlWithFilters);
    const data = await res.json();
    setBeers(data);
  };

  const filterByPH = (beers) => {
    return beers.filter((beer) => beer.ph < 4);
  };

  useEffect(() => {
    getBeers(filterABV, filterClassic, filterPH);
  }, [filterABV, filterClassic, filterPH]);

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
      setFilterPH(false);
    } else if (buttonClicked === "buttonClassic") {
      setFilterABV(false);
      setFilterClassic(true);
      setFilterPH(false);
    } else if (buttonClicked === "buttonPH") {
      setFilterABV(false);
      setFilterClassic(false);
      setFilterPH(true);
    }
  };

  const resetFilters = () => {
    setFilterABV(false);
    setFilterClassic(false);
    setFilterPH(false);
  };

  return (
    <Router>
      <div className="App">
        <SideNav
          searchItem={searchItem}
          handleInput={handleInput}
          handleClick={handleClick}
          resetFilters={resetFilters}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  beers={filteredBeers}
                  searchItem={searchItem}
                  handleClick={handleClick}
                />
                {filteredBeers.length === 0 && (
                  <h1 className="displayMessage">
                    ❌🍺 No beers found 😢 Please try a different search or
                    filter option.
                  </h1>
                )}
              </>
            }
          />
          <Route path="/beers/:id" element={<BeerDetails beers={beers} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
