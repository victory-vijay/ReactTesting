import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API_URL}${resId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResInfo(data.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];
  console.log(
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards
  );

  return (
    <div>
      <h1>{name || "Restaurant Name Not Available"}</h1>
      <p>
        {cuisines ? cuisines.join(", ") : "Cuisines Not Available"} -{" "}
        {costForTwoMessage || "Cost Info Not Available"}
      </p>
      <h2>Menu</h2>
      <ul className="resMenu">
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id} className="itemCard">
              <div className="eachCard">
                <div>
                  <h4>{item.card.info.name} - </h4>
                  <h5>
                    Cost :{" "}
                    {item.card.info.price
                      ? Math.floor(item.card.info.price / 100)
                      : "Price Not Available"}
                  </h5>
                  <p>
                    {item.card.info.description || "Description Not Available"}
                  </p>
                </div>
                <img
                  className="cardImage"
                  src={CDN_URL + item.card.info.imageId}
                  alt=""
                />
              </div>
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
