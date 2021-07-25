import React, { FunctionComponent } from "react";
import { Weather } from "../../types/types";

const DisplayWeatherListItem: FunctionComponent<{
  weather: Weather;
  deleteWeather: Function;
}> = ({ weather, deleteWeather }) => {
  return (
    <>
      <h1>
        {weather?.cityName} {weather ? "|" : ""} {weather?.country}
      </h1>
      <img src={weather?.icon} alt={weather?.description} />
      <h2>{weather?.temp}</h2>
      <h3>{weather?.humidity}</h3>
      <button onClick={() => deleteWeather(weather?.id)}>x</button>
    </>
  );
};

export default DisplayWeatherListItem;
