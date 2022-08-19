import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherNavbar from "./components/WeatherNavbar";
import OneDayForecast from "./OneDayForeacst/OneDayForecast";
import SevenDays from "./components/SevenDaysForecast/SevenDays";
import Monthly from "./components/MonthlyForecast/Monthly";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import { BallTriangle } from "react-loader-spinner";
import { weather_api_key, weather_api_url } from "./components/Api";
import { useEffect, useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setforecastWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] =
      typeof searchData != "undefined" ? searchData.value : "no data";

    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
    );
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setforecastWeather({ city: searchData.label, ...forecastResponse });
    });
    console.log(currentWeatherFetch);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  console.log(currentWeather);
  console.log(forecastWeather);
  return (
    <>
      {!loading ? (
        <BrowserRouter>
          <WeatherNavbar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/search"
              element={<Search onSearchChange={handleOnSearchChange} />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/one"
              element={
                currentWeather && <OneDayForecast data={currentWeather} />
              }
            />
          </Routes>
          <Routes>
            <Route exact path="/week" element={<SevenDays />} />
          </Routes>
          <Routes>
            <Route exact path="/month" element={<Monthly />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="flex items-center justify-center bg-black h-[100vh] mt-[0rem] mb-[0rem] ml-auto mr-auto">
          <BallTriangle color="#ff6100" />
        </div>
      )}
    </>
  );
}

export default App;
