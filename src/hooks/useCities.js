import { useEffect } from "react";

export const useCities = ({ data, dataType }) => {
  const fetchData = async (lat, lon) => {
    let response =
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c4430174b031d1026a06cb6b8bd3695e
    `);
    return await response.json();
  };

  useEffect(() => {
    if (!data.length) return;
    data.map(async (city) => {
      const cityData = await fetchData(city.lat, city.lng);
      console.log(cityData);
    });
  }, [data]);

  return { fetchData };
};
