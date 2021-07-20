import React, { FormEvent, FunctionComponent } from "react";
import axios from "axios";
import SearchWeatherForm from "./components/SearchWeatherForm/SearchWeatherForm";
import { useState } from "react";

type Weather = {
  id: number;
  cityName: string;
  temp: string;
  humidity: number;
  country: string;
};

const App: FunctionComponent = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  // Metody Http:
  // 1. GET
  // 2. POST
  // 3. DELETE
  // 4. PUT

  const getWeather = (e: any): void => {
    e.preventDefault();

    // console.log(e.target, "TUTAJ");
    // console.log(e.target.cityName.value, "Input");

    const cityName = e.target.cityName.value;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=95f750f0d64a8c4be9651f3606767661`
      )
      .then((res) => {
        const { id, name, main, sys } = res.data;

        const celciusTemp = main.temp - 273.15;
        const newWeather: Weather = {
          id: id,
          cityName: name,
          temp: celciusTemp.toFixed(1),
          humidity: main.humidity,
          country: sys.country,
        };

        setWeather(newWeather);
      })
      .catch((err) => {
        console.log(err);
        alert("City not found, try again.");
      });

    e.target.reset();
  };

  return (
    <>
      <SearchWeatherForm getWeather={getWeather} />
    </>
  );
};

export default App;
