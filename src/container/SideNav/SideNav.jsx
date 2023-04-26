import "./SideNav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const Nav = (props) => {
  const { handleClick, handleInput, searchItem, resetFilters } = props;

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
        <button value="buttonABV" onClick={handleClick}>
          Press Me
        </button>
        <p>Classic Range</p>{" "}
        <button value="buttonClassic" onClick={handleClick}>
          Press Me
        </button>
        <p>Acidic (ph &lt; 4)</p>{" "}
        <button value="buttonPH" onClick={handleClick}>
          Press Me
        </button>
        <button onClick={resetFilters}>Reset</button>
      </div>
    </div>
  );
};

export default Nav;

//onClick={handleClick} onClick={filterForClassic} onClick={filterForAcidic}
