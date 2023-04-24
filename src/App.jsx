import React from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import SideNav from "./container/SideNav/SideNav";
import beers from "./assets/mockData";

const App = () => {
  return (
    <>
      <div className="App">
        <SideNav />
        <Main beers={beers} />
      </div>
    </>
  );
};

export default App;
