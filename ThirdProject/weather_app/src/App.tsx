import React, { FormEvent, FunctionComponent } from "react";
import axios from "axios";
import SearchWeatherForm from "./components/SearchWeatherForm/SearchWeatherForm";
import { useState } from "react";
import DisplayWeatherList from "./components/DisplayWeatherList/DisplayWeatherList";
import { Weather } from "./types/types";
import { getWeathersFromLocalStorage } from "./utils/getWeathersFromLocalStorage";
import { setWeathersToLocalStorage } from "./utils/setWeathersToLocalStorage";

const App: FunctionComponent = () => {
  const [weathers, setWeathers] = useState<Weather[] | []>(
    getWeathersFromLocalStorage()
  );

  const getWeather = (e: any): void => {
    e.preventDefault();

    const cityName = e.target.cityName.value;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=95f750f0d64a8c4be9651f3606767661`
      )
      .then((res) => {
        const { id, name, main, sys, weather } = res.data;
        console.log(res);

        const celciusTemp = main.temp - 273.15;
        const newWeather: Weather = {
          id: id,
          cityName: name,
          temp: `Temp: ${celciusTemp.toFixed(1)} C`,
          humidity: `Humidity: ${main.humidity} %`,
          country: sys.country,
          icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
          description: weather[0].description,
        };

        const localStorageData: any = [...weathers, newWeather];
        setWeathersToLocalStorage(localStorageData);

        setWeathers([...weathers, newWeather]);
      })
      .catch((err) => {
        console.log(err);
        alert("City not found, try again.");
      });

    e.target.reset();
  };

  const deleteWeather = (weatherId: number) => {
    const filteredWeathers = weathers.filter(
      (weather) => weather.id !== weatherId
    );

    setWeathers(filteredWeathers);

    setWeathersToLocalStorage(filteredWeathers);
  };

  return (
    <>
      <SearchWeatherForm getWeather={getWeather} />
      <DisplayWeatherList weathers={weathers} deleteWeather={deleteWeather} />
    </>
  );
};

export default App;
