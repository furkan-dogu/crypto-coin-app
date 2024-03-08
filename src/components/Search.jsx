import { useState } from "react";
import axios from "axios";
import ShowModal from "./Modal";

const Search = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);

  const getSearch = async (input) => {
    const url = `https://api.coinranking.com/v2/coins?search=${input}`;

    const options = {
      headers: { "x-access-token": process.env.REACT_APP_API_KEY },
    };

    try {
      const { data } = await axios.get(url, options);
      setInfo(data.data.coins[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      getSearch(search.trim());
    } 
  };

  return (
    
      <form className="container d-flex justify-content-center my-5" onSubmit={handleSubmit}>
        <input
          className="form-control me-2 w-75"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" onClick={handleShow}>
          Search
        </button>
        <ShowModal show={show} handleClose={handleClose} info={info} />
      </form>
    
  );
};

export default Search;
