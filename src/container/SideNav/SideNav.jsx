import "./SideNav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const Nav = (props) => {
  const { handleFilterClick, handleInput, searchItem } = props;

  return (
    <div className="SideNav">
      <SearchBox
        label="Search beers"
        value={searchItem}
        handleInput={handleInput}
        className="search"
      />
      <div className="filter-buttons">
        <p>High ABV (&gt; 6.0%)</p>{" "}
        <button onClick={handleFilterClick}>Press Me</button>
        <p>Classic Range</p> <button>Press Me</button>
        <p>Acidic (ph &lt; 4)</p> <button>Press Me</button>
      </div>
    </div>
  );
};

export default Nav;

//onClick={handleFilterClick} onClick={filterForClassic} onClick={filterForAcidic}
