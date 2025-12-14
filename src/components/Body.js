import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

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
    setListofRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListofRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
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
            let filteredRes = listofRes.filter((res) => res.info.avgRating > 4);
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
          <RestaurantCard key={res?.info?.id || _i} resData={res?.info || {}} />
        ))}
      </div>
    </div>
  );
};

export default Body;
