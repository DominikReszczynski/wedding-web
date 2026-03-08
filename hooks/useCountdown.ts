"use client";

import { useEffect, useState } from "react";

type CountdownValues = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: string): CountdownValues {
  const total = new Date(targetDate).getTime() - new Date().getTime();
  const safe = Math.max(total, 0);

  return {
    total,
    days: Math.floor(safe / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safe / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safe / (1000 * 60)) % 60),
    seconds: Math.floor((safe / 1000) % 60),
  };
}

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}