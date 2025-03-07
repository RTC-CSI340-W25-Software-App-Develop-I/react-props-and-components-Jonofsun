import { restaurants } from "./data/data.js";
import Restaurant from "./Restaurant.jsx";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
