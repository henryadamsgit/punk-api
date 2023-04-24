import { useState, React } from "react";
import "./SideNav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const Nav = (props) => {
  const [searchItem, setSearchItem] = useState("");

  //const handleInput = (event) => {
  // setSearchTerm(event.target.value);

  return (
    <div className="SideNav">
      <SearchBox className="search" />
      <div className="filter-buttons">
        <p>High ABV (&gt; 6.0%)</p> <button>Press Me</button>
        <p>Classic Range</p> <button>Press Me</button>
        <p>Acidic (ph &lt; 4)</p> <button>Press Me</button>
      </div>
    </div>
  );
};

export default Nav;
