import React from "react";
import { useCities } from "../hooks/useCities";

function CitiesList({ data, dataType }) {
  const { cities } = useCities({ data, dataType });
  return (
    <div>
      {/* {cities.map(() => {
        city.name
      })} */}
    </div>
  );
}

export default CitiesList;
