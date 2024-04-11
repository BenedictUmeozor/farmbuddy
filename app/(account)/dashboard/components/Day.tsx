"use client";

import { WeatherInfo } from "@/types/types";
import { formatDayOfWeek } from "@/utils/functions";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  weatherInfo: WeatherInfo;
};

export default function Day({ weatherInfo }: Props) {
  const [day, setDay] = useState("Sun");

  useEffect(() => {
    if (weatherInfo.dt) {
      const date = new Date(weatherInfo.dt * 1000);
      const formattedDate = formatDayOfWeek(date);
      setDay(formattedDate);
    }
  }, [weatherInfo]);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        {/* <Sun className="w-8" /> */}
        <Image
          src={`http://openweathermap.org/img/wn//${weatherInfo.weather[0].icon}@4x.png`}
          alt="weather icon"
          height={50}
          width={50}
          className="w-14 cursor-pointer"
        />
      </div>
      <p className="text-xs font-semibold mt-2 mb-1">
        {weatherInfo.temp.day}&deg;C
      </p>
      <p className="text-xs font-semibold">{day}</p>
    </div>
  );
}
