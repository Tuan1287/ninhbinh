import { useState, useEffect } from "react";

export interface WeatherDay {
  date: string;
  dayName: string;
  dayNameEn: string;
  high: number;
  low: number;
  condition: string;
  conditionEn: string;
  icon: string;
  humidity: number;
  wind: number;
  feels: number;
}

const weatherConditionsVi = [
  "Nắng đẹp",
  "Có mây",
  "Mưa nhẹ",
  "Nắng nhẹ",
  "Nhiều mây",
  "Mưa rào",
  "Sương mù buổi sáng",
];

const weatherConditionsEn = [
  "Sunny",
  "Cloudy",
  "Light rain",
  "Partly sunny",
  "Overcast",
  "Showers",
  "Morning fog",
];

const weatherIcons = ["☀️", "⛅", "🌧️", "🌤️", "☁️", "🌦️", "🌫️"];

const dayNamesVi = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const dayNamesEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateWeatherData(): WeatherDay[] {
  const days: WeatherDay[] = [];
  const now = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() + i);

    const condIdx = Math.floor(Math.random() * weatherConditionsVi.length);
    const baseTemp = 24 + Math.floor(Math.random() * 8);
    const high = baseTemp + Math.floor(Math.random() * 6);
    const low = baseTemp - 3 + Math.floor(Math.random() * 3);

    days.push({
      date: date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
      dayName: i === 0 ? "Hôm nay" : dayNamesVi[date.getDay()],
      dayNameEn: i === 0 ? "Today" : dayNamesEn[date.getDay()],
      high,
      low,
      condition: weatherConditionsVi[condIdx],
      conditionEn: weatherConditionsEn[condIdx],
      icon: weatherIcons[condIdx],
      humidity: 65 + Math.floor(Math.random() * 25),
      wind: 5 + Math.floor(Math.random() * 15),
      feels: high - 2 + Math.floor(Math.random() * 4),
    });
  }

  return days;
}

export function useWeather() {
  const [weather, setWeather] = useState<WeatherDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem("nb_weather");
    if (cached) {
      setWeather(JSON.parse(cached));
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const data = generateWeatherData();
      sessionStorage.setItem("nb_weather", JSON.stringify(data));
      setWeather(data);
      setLoading(false);
    }, 800);
  }, []);

  return { weather, loading };
}
