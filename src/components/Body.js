import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRes, setListofRes] = useState([]);
  const [filteredlistofRes, setFilteredListofRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_API}`);

    const json = await data.json();
    console.log(json);
    setListofRes(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListofRes(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the res cards
              const filteredRes = listofRes.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredListofRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = listofRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredListofRes(filteredRes);
          }}
        >
          Top rated restraunts
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredListofRes(listofRes);
          }}
        >
          Clear
        </button>
      </div>
      <div className="res-container">
        {filteredlistofRes.map((res, _i) => (
          <Link key={res?.info?.id || _i} to={"/restaurants/" + res?.info?.id}>
            <RestaurantCard resData={res?.info || {}} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
