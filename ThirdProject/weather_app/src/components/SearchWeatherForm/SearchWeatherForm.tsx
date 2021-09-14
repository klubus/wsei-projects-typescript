import React, { FunctionComponent } from "react";
import "./SearchWeatherForm.scss";

const SearchWeatherForm: FunctionComponent<{ getWeather: any }> = ({
  getWeather,
}) => {
  return (
    <form className="getWeatherForm" onSubmit={getWeather}>
      <label className="cityLabel" htmlFor="cityName">
        Enter city name:{" "}
      </label>
      <input
        type="search"
        placeholder="np. Warsaw"
        id="cityName"
        required
        className="citynameInput"
      />
      <button className="button" type="submit">Search</button>
    </form>
  );
};

export default SearchWeatherForm;
