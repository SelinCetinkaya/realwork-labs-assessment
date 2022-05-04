import { useEffect, useState } from "react";

//data is the provided city lists, dataType is either "beachCity" or "skiCity" - definied in Home.jsx
export const useCities = ({ data, dataType }) => {
  const [cities, setCities] = useState([]);

  const fetchData = async (lat, lon) => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c4430174b031d1026a06cb6b8bd3695e&units=imperial`
    );
    return await response.json();
  };

  const validateCity = (city) => {
    const { current, alerts } = city;
    const warnings = [];
    //checks for all potential failing conditions and returns them in an array
    if (dataType === "beachCity") {
      if (current.temp < 70)
        warnings.push("It's too cold out to visit the beach!");
      if (current.wind_speed > 20)
        warnings.push("It's too windy to go to the beach!");
      if (current.clouds > 20)
        warnings.push("It's too cloudy to go to the beach!"); //unit is percentage
    }
    if (dataType === "skiCity") {
      if (current.temp > 50) warnings.push("It's too warm to ski!");
    }
    //checks if the city has an alerts array associated, and adds the description to warnings array if so
    alerts?.map((alert) => {
      warnings.push(alert.event);
    });
    return warnings;
  };

  useEffect(() => {
    if (!data?.length) return;
    const processCities = async () => {
      const mergedCities = data.map(async (city) => {
        const response = await fetchData(city.lat, city.lng);
        const warnings = validateCity(response);
        //mapping returns the provided city info, API response, and warnings array
        return { ...city, ...response.current, warnings };
      });
      //grab all city information and sort by whether or not they include warnings
      const _cities = await Promise.all(mergedCities);
      _cities.sort((a, b) => {
        return a.warnings.length > b.warnings.length;
      });
      setCities(_cities);
    };
    processCities();
    //store in sessionStorage to limit api calls
    //   sessionStorage.setItem(dataType, JSON.stringify(_cities));
    //   setCities(_cities);
    // };
    // const cachedCities = JSON.parse(sessionStorage.getItem(dataType));
    // if (cachedCities) {
    //   setCities(cachedCities);
    // } else {
    //   processCities();
    // }
  }, [data]);

  return { fetchData, cities };
};
