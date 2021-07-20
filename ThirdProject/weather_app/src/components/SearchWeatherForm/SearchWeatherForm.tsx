import React, { FunctionComponent } from "react";

const SearchWeatherForm: FunctionComponent<{ getWeather: any }> = ({
  getWeather,
}) => {
  return (
    <form onSubmit={getWeather}>
      <label htmlFor="cityName">Enter city name: </label>
      <input type="search" placeholder="np. Warsaw" id="cityName" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchWeatherForm;
