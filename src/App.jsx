import { React, useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import SideNav from "./container/SideNav/SideNav";
import beers from "./assets/mockData";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const handleInput = (event) => {
    const allInput = event.target.value.toLowerCase();
    setSearchItem(allInput);
  };

  return (
    <>
      <div className="App">
        <SideNav searchItem={searchItem} handleInput={handleInput} />
        <Main beers={beers} searchItem={searchItem} />
      </div>
    </>
  );
};

export default App;
