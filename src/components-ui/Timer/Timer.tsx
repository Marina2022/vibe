'use client'

import { useState, useEffect } from "react";

const Timer = ({secondsNumber, onComplete}: {secondsNumber: number, onComplete: ()=>void }) => {

  const [secondsLeft, setSecondsLeft] = useState(secondsNumber); // 2 минуты = 120 секунд

  useEffect(() => {
    if (secondsLeft <= 0) {
      onComplete?.();
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // очистка интервала при анмаунте
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <>
      {minutes}:{seconds.toString().padStart(2, "0")}
    </>
  );
};

export default Timer;