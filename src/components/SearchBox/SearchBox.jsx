import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <form className="search-box">
      <label className="search-box__label">Search any beer...</label>
      <input className="search-box__input" type="text" />
    </form>
  );
};

export default SearchBox;
