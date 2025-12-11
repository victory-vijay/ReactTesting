import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *   - Restaurant Card
 *    - Image
 *    - Name
 *    - Rating, cuisin, delivery time
 * Footer
 *  - Links
 *  - Copyright
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-cotainer">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVVIf86eibvCRG6Szxa_8xXN-_GEz-9pm2Q&s"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine, rating, time } = props.resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/21/33bbf2be-1176-4156-831a-69940fa3a3b5_1099894.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

let resList = [
  {
    id: 101,
    resName: "Meghna Foods",
    cuisine: "Biriyani, North Indian",
    rating: "4.4",
    time: "38 minutes",
  },
  {
    id: 102,
    resName: "KFC",
    cuisine: "Western",
    rating: "3.4",
    time: "98 minutes",
  },
  {
    id: 103,
    resName: "Hyderabad chefs",
    cuisine: "Biriyani",
    rating: "3.4",
    time: "98 minutes",
  },
  {
    id: 104,
    resName: "Andhra ruchulu",
    cuisine: "Western",
    rating: "3.4",
    time: "98 minutes",
  },
  {
    id: 105,
    resName: "satyabhama",
    cuisine: "Western",
    rating: "3.4",
    time: "98 minutes",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res, _i) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
