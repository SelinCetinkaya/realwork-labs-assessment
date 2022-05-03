import React from "react";
import { useCities } from "../hooks/useCities";

function CitiesList({ data, dataType }) {
  const { cities } = useCities({ data, dataType });
  console.log(cities);
  return (
    <div>
      {cities.map((city) => {
        return `${city.name} - ${city.temp} `;
      })}
    </div>
  );
}

export default CitiesList;
