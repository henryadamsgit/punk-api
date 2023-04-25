import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { label, value, handleInput } = props;

  return (
    <form className="search-box">
      <label className="search-box__label">{label}</label>
      <input
        type="text"
        value={value}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
