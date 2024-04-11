"use client";

import { useEffect, useState } from "react";
import Day from "../dashboard/components/Day";
import { formatDate } from "@/utils/functions";
import { v4 as uuidV4 } from "uuid";
import { LocationWeather, WeatherInfo } from "@/types/types";
import Image from "next/image";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<LocationWeather | null>(null);
  const [date, setDate] = useState<string | null>(null);

  const getWeatherData = async (longitude: number, latitude: number) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { longitude, latitude } = position.coords;
        const data = await getWeatherData(longitude, latitude);
        setWeatherData(data);
      });
    }
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    setDate(formattedDate);
  }, []);

  return (
    <>
      {weatherData ? (
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={`http://openweathermap.org/img/wn//${weatherData.current.weather[0].icon}@4x.png`}
              alt="weather icon"
              height={50}
              width={50}
              className="w-20 cursor-pointer"
            />
            <div className="flex flex-col gap-2 justify-between">
              <p className="font-semibold">
                Today |{" "}
                <span className=" text-gray-400 font-normal">
                  {date ? date : "26th March 2024"}
                </span>
              </p>
              <p className="font-semibold">
                34&deg;C{" "}
                <span className="ml-2 capitalize">{weatherData.current.weather[0].description}</span>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Weekly Forecast</h3>
            <div className="grid grid-cols-7 gap-2">
              {weatherData.daily.slice(1, 8).map((day: WeatherInfo) => (
                <Day key={uuidV4()} weatherInfo={day} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </>
  );
};
export default Weather;
