import React, { useEffect, useState } from "react";
import { useCities } from "../hooks/useCities";
import ReportIcon from "@mui/icons-material/Report";

function CurrentLocationHeader(props) {
  const { fetchData } = useCities({});
  const [currentCity, setCurrentCity] = useState({});
  //on page load get the users current location and find current temp
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { current } = await fetchData(
        position.coords.latitude,
        position.coords.longitude
      );
      setCurrentCity(current);
    });
  }, []);

  return (
    <>
      <h1>Welcome! Let's plan your next vacation!</h1>
      <div>
        <b>It is currently {currentCity.temp} degrees where you are.</b>
      </div>
      <div>
        Hover over the <ReportIcon sx={{ color: "red" }} /> icon to see why it
        does not match the criteria for each city
      </div>
    </>
  );
}

export default CurrentLocationHeader;
