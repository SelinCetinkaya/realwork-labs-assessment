import { useEffect, useState } from "react";

export const useCities = ({ data, dataType }) => {
  const [cities, setCities] = useState([]);

  const fetchData = async (lat, lon) => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c4430174b031d1026a06cb6b8bd3695e&units=imperial`
    );
    return await response.json();
  };

  useEffect(() => {
    if (!data.length) return;
    const processCities = async () => {
      const mergedCities = data.map(async (city) => {
        const { current } = await fetchData(city.lat, city.lng);
        return { ...city, ...current };
      });
      setCities(await Promise.all(mergedCities));
    };
    processCities();
  }, [data]);

  return { fetchData, cities };
};
