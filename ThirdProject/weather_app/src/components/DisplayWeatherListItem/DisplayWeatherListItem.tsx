import React, { FunctionComponent } from "react";
import { Weather } from "../../types/types";
import "./DisplayWeatherListItem.scss";

const DisplayWeatherListItem: FunctionComponent<{
  weather: Weather;
  deleteWeather: Function;
}> = ({ weather, deleteWeather }) => {
  return (
    <div className="weatherItem">
      <h1 className="cityName">{weather?.cityName}</h1>
      <h2 className="countryName"> {weather?.country}</h2>
      <img
        src={weather?.icon}
        alt={weather?.description}
        className="weatherImage"
      />
      <h2 className="temp">{weather?.temp}</h2>
      <h3 className="humidity">{weather?.humidity}</h3>
      <button
        onClick={() => deleteWeather(weather?.id)}
        className="weatherButton"
      >
        X
      </button>
    </div>
  );
};

export default DisplayWeatherListItem;
