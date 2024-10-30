import axios from "axios";

export const getCurrentWeather = async (
  latitude: number,
  longitude: number
) => {
  return axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=CET&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset`
  );
};
