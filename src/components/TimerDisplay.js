import React, { useState, useEffect } from 'react';

const TimerDisplay = () => {
  const [time, setTime] = useState({ seconds: 0, minutes: 0 });
  useEffect(() => {
    const ticker = setInterval(() => {
      const seconds = time.seconds + 1;
      setTime(
        seconds > 60
          ? { minutes: time.minutes + 1, seconds: 0 }
          : { minutes: time.minutes, seconds }
      );
    }, 1000);
    return () => clearInterval(ticker);
  });
  return (
    <div>{`${time.minutes}:${time.seconds < 10 ? '0' : ''}${
      time.seconds
    }`}</div>
  );
};

export default TimerDisplay;
