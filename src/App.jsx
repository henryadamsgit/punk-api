import { React, useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import SideNav from "./container/SideNav/SideNav";
import beers from "./assets/mockData";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [displayedBeers, setDisplayedBeers] = useState([]);

  const handleInput = (event) => {
    const allInput = event.target.value.toLowerCase();
    setSearchItem(allInput);
  };

  //

  const filterForPercentage = (beers) => {
    return beers.filter((beer) => {
      return beer.abv > 6;
    });
  };

  // Assuming you have a state variable `beers` that contains all your beers
  const handleFilterClick = () => {
    const highAbvBeers = filterForPercentage(beers);
    setDisplayedBeers(highAbvBeers);
  };

  return (
    <>
      <div className="App">
        <SideNav
          searchItem={searchItem}
          handleInput={handleInput}
          handleFilterClick={handleFilterClick}
          displayedBeers={displayedBeers}
        />
        <Main
          beers={beers}
          searchItem={searchItem}
          displayedBeers={displayedBeers}
          handleFilterClick={handleFilterClick}
        />
      </div>
    </>
  );
};

export default App;
