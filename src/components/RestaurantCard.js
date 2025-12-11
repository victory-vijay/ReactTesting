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

export default RestaurantCard;
