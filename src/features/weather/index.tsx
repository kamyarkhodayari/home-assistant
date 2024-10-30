import { useState, useEffect, useMemo } from "react";

import WidgetCard from "../common/components/Widget";

// API
import { getCurrentWeather } from "./api";

// Components
import { RefreshIcon } from "./components/icons/Refresh";

// Constants
import { weatherTypes } from "./constants/weather-types";

// Types
import { Weather, DayStats } from "./types";

const location = {
  lat: 51.4287334,
  lng: 5.4630557,
};

const WeatherWidget = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
  const [currentDayStats, setCurrentDayStats] = useState<DayStats | null>(null);
  const [isDay, setIsDay] = useState<boolean>(false);

  const fetchWeather = async () => {
    setIsLoading(true);

    try {
      const { data } = await getCurrentWeather(location.lat, location.lng);

      const dayStats = {
        min_temperature: Math.round(data?.daily?.temperature_2m_min?.[0]),
        max_temperature: Math.round(data?.daily?.temperature_2m_max?.[0]),
        sunrise: new Date(data?.daily?.sunrise?.[0]),
        sunset: new Date(data?.daily?.sunset?.[0]),
      };

      const currentTime = new Date(data?.current?.time);

      setCurrentDayStats(dayStats);
      setCurrentWeather(data?.current);
      setIsDay(
        currentTime >= dayStats.sunrise && currentTime < dayStats.sunset
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const currentWeatherType = useMemo(() => {
    if (!currentWeather) return;
    const weatherType = weatherTypes[currentWeather.weather_code];

    return isDay ? weatherType.day : weatherType.night;
  }, [isDay, currentWeather]);

  return (
    <WidgetCard cols={2}>
      {isLoading ? (
        <div>Retrieving information</div>
      ) : currentWeather ? (
        <div className="flex justify-between p-5">
          <div className="flex gap-2 items-center">
            <img
              src={currentWeatherType?.image}
              alt="Sunny"
              className="w-24 h-24"
            />
            <div>
              <div className="text-5xl font-black">{`${Math.round(
                currentWeather.temperature_2m || 0
              )}°`}</div>
              <span>Today is {currentWeatherType?.description}!</span>
              <div className="flex gap-3 text-gray-500">
                <small>Hi: {`${currentDayStats?.max_temperature}°`}</small>
                <small>Lo: {`${currentDayStats?.min_temperature}°`}</small>
              </div>
            </div>
          </div>
          <div>
            <RefreshIcon onClick={() => fetchWeather()} />
          </div>
        </div>
      ) : (
        <div>Error retrieving weather data.</div>
      )}
    </WidgetCard>
  );
};

export default WeatherWidget;
