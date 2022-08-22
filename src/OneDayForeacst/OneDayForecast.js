import React, { useEffect, useState } from "react";
import axios from "axios";
const OneDayForecast = ({ cityData }) => {
  console.log(cityData);
  const [data, setdata] = useState();

  function TemperatureMaxConvert() {
    const degreeMax = (data.Temperature.Maximum.Value - 32) * (5 / 9);
    return Math.round(degreeMax);
  }
  function TemperatureMinConvert() {
    const degreeMin = (data.Temperature.Minimum.Value - 32) * (5 / 9);
    return Math.round(degreeMin);
  }
  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityData.Key}?apikey=atn3uMwJfYdYUruhtXNQysB5DjLzsfBq&units=17`
      )
      .then((response) => {
        console.log(response.data);
        setdata(response.data.DailyForecasts[0]);
      });
  }, [cityData.Key]);

  console.log("data", data);
  return (
    <div className="relative">
      {data && (
        <div className="absolute top-[-230px] overflow-hidden left-[-20px] lg:left-[440px] sm:left-[-20px] weather w-[350px] lg:w-[500px] md:w-[500px] sm:w-[200px] rounded-[6px] shadow-[10px_-2px_20px_2px rgb(0 0 0 /30%)] text-white bg-[#333]  ml-auto mr-auto sm:z-[9999] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
          <div className="top flex justify-between items-center">
            <div>
              <p className="city font-semibold text-[18px] tracking-[1px] leading-1 m-0">
                {cityData.EnglishName},{" "}
                {cityData.AdministrativeArea.EnglishName}
              </p>
              <p className="description font-normal text-[14px] leading-1"></p>
            </div>
            <img src={`https://developer.accuweather.com/sites/default/files/${data.Day.Icon}-s.png`} className='img-fluid w-full' alt="" />
          </div>
          <div className="bottom flex items-center justify-between flex-col mt-4">
            <div className="flex">
              <div className="flex items-center flex-col justify-between">
                <p>Max Temp :</p>
                <p className="temperature font-bold text-[55px] w-auto tracking-[-5px] mt-[10px] mb-[10px] ml-auto mr-auto">
                  {TemperatureMaxConvert(data.Temperature?.Maximum.Value)}°C
                </p>
              </div>
              <div className="flex flex-col items-center justify-between ml-10">
                <p>Min Temp :</p>
                <p className="temperature font-bold text-[55px] w-auto tracking-[-5px] mt-[10px] mb-[10px] ml-auto mr-auto">
                  {TemperatureMinConvert(data.Temperature?.Minimum.Value)}°C
                </p>
              </div>
            </div>
            {/* <div className="details w-full pl-[30px]">
              <div className="parameters-row flex justify-between items-center">
                <span className="parameter-label font-normal text-[12px]">
                  Details
                </span>
              </div>
              <div className="parameters-row flex justify-between">
                <span className="parameter-label text-left font-normal text-[12px]">
                  Feels like
                </span>
                <span className="parameter-value text-right font-medium text-[12px]">
                  °C
                </span>
              </div>
              <div className="parameters-row flex justify-between">
                <span className="parameter-label text-left font-normal text-[12px]">
                  Wind
                </span>
                <span className="parameter-value text-right font-medium text-[12px]">
                  m/s
                </span>
              </div>
              <div className="parameters-row flex justify-between">
                <span className="parameter-label text-left font-normal text-[12px]">
                  Humidity
                </span>
                <span className="parameter-value text-right font-medium text-[12px]">
                  %
                </span>
              </div>
              <div className="parameters-row flex justify-between">
                <span className="parameter-label text-left font-normal text-[12px]">
                  Pressure
                </span>
                <span className="parameter-value text-right font-medium text-[12px]">
                  {" "}
                  hPa
                </span>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default OneDayForecast;
