import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listofRes, setListofRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_API}`);

    const json = await data.json();
    setListofRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = listofRes.filter((res) => res.info.avgRating > 4);
            setListofRes(filteredRes);
          }}
        >
          Top rated restraunts
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListofRes(listofRes);
          }}
        >
          Clear
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((res, _i) => (
          <RestaurantCard key={res?.info?.id || _i} resData={res?.info || {}} />
        ))}
      </div>
    </div>
  );
};

export default Body;
