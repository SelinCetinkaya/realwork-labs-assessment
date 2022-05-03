import React from "react";
import Button from "@mui/material/Button";
import CitiesList from "../components/CitiesList";
import beachCities from "../assets/beachCities.json";
import skiCities from "../assets/skiCities.json";

function Home(props) {
  return (
    <div>
      <span>hello world</span>
      <Button>button </Button>
      <CitiesList data={beachCities} dataType="beachCity" />
      <CitiesList data={skiCities} dataType="skiCity" />
    </div>
  );
}
export default Home;
