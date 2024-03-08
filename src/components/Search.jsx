import React from "react";
import Coin from "../assets/coin.gif";

const Search = () => {
  return (
    <nav className="navbar d-flex container">
      <img
        className="navbar-brand"
        src={Coin}
        alt="Coin"
        width={100}
        height={100}
      />

      <form className="d-flex w-50">
        <input className="form-control me-2" type="text" />
        <button className="btn btn-primary">Search</button>
      </form>

      <img
        className="navbar-brand"
        src={Coin}
        alt="Coin"
        width={100}
        height={100}
      />
    </nav>
  );
};

export default Search;
