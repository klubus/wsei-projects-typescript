import React, { FunctionComponent } from "react";
import { Weather } from "../../types/types";
import DisplayWeatherListItem from "../DisplayWeatherListItem/DisplayWeatherListItem";

const DisplayWeatherList: FunctionComponent<{
  weathers: Weather[] | [];
  deleteWeather: Function;
}> = ({ weathers, deleteWeather }) => {
  return (
    <ul>
      {weathers?.map((weather) => {
        return (
          <li key={weather?.id}>
            <DisplayWeatherListItem
              weather={weather}
              deleteWeather={deleteWeather}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayWeatherList;
