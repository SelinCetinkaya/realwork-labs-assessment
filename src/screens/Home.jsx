import React from "react";
import CitiesList from "../components/CitiesList";
import beachCities from "../assets/beachCities.json";
import skiCities from "../assets/skiCities.json";
import CurrentLocationHeader from "../components/CurrentLocationHeader";

function Home(props) {
  return (
    <div>
      <CurrentLocationHeader />
      <div className="city-lists">
        {/* passing the provided city list data and type of city to each CityList component to render two separate lists */}
        <CitiesList data={beachCities} dataType="beachCity" />
        <CitiesList data={skiCities} dataType="skiCity" />
      </div>
    </div>
  );
}
export default Home;
