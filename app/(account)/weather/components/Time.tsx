"use client";

import useInterval from "@/hooks/useInterval";
import { TimeInfo, getTimeInfo } from "@/utils/functions";
import { useState } from "react";
import { MapPin } from "react-feather";

const Time = () => {
  const [time, setTime] = useState<TimeInfo>({ timeString: "", period: "" });

  useInterval(() => {
    const currentTime = new Date();
    const timeInfo = getTimeInfo(currentTime);
    setTime(timeInfo);
  }, 1000);

  return (
    <header className="flex justify-between items-start">
      <div>
        <h2 className="font-semibold">Good {time.period} Briana</h2>
        <h3 className="font-bold mt-2 text-2xl">{time.timeString}</h3>
      </div>
      <div className="inline-flex items-center gap-2 text-white bg-primary opacity-75 p-2 rounded-md">
        <MapPin className="w-5" />
        <span>Lagos, Nigeria</span>
      </div>
    </header>
  );
};
export default Time;
