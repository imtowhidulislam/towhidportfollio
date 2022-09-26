import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

import "../style/time.css";
const Time = () => {
  const [times, setTimes] = useState("");
  const currentTime = () => {
    const hour = new Date().getHours() % 12;
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    console.log(hour, minute, second);
    setTimes(`${hour} : ${minute} : ${second}`);
  };
  useEffect(() => {
    setTimeout(() => {
      currentTime();
    }, 1000);
  }, [times]);
  console.log(times);
  return (
    <div className="bg-blue-200 time">
      <span className="clock">
        <FaClock />
        <p className="times">{times}</p>
      </span>
    </div>
  );
};

export default Time;
