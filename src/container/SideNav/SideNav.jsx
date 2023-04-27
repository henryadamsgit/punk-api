import "./SideNav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const Nav = (props) => {
  const { handleClick, handleInput, searchItem, resetFilters } = props;

  return (
    <div className="SideNav">
      <SearchBox
        label="Search any beer ⬇️"
        value={searchItem}
        handleInput={handleInput}
        className="search"
      />
      <div className="filter-buttons">
        <p> High ABV </p>{" "}
        <button value="buttonABV" onClick={handleClick}>
          Click
        </button>
        <p>Classic Range</p>{" "}
        <button value="buttonClassic" onClick={handleClick}>
          Click
        </button>
        <p>Acidic</p>{" "}
        <button value="buttonPH" onClick={handleClick}>
          Click
        </button>
        <button id="buttonReset" onClick={resetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Nav;

//onClick={handleClick} onClick={filterForClassic} onClick={filterForAcidic}
