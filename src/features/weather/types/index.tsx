export interface DayStats {
    min_temperature: number;
    max_temperature: number;
    sunrise: Date;
    sunset: Date;
}

export interface Weather {
  temperature_2m: number;
  weather_code: number;
}

export interface WeatherType {
  day: { description: string; image: string };
  night: { description: string; image: string };
}
