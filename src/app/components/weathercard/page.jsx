import React from 'react';

function WeatherCard({ weather }) {
  if (!weather) return null;
  if (weather.error) {
    return (
      <div className="text-center mt-8 text-red-500">
        Error: {weather.error.message}
      </div>
    );
  }
  const iconUrl = weather.current?.condition?.icon
    ? `https:${weather.current.condition.icon}`
    : null;

  return (
    <div className="max-w-sm mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">
        {weather.location?.name}, {weather.location?.country}
      </h2>
      <div className="flex flex-col items-center">
        {iconUrl && (
          <img src={iconUrl} alt={weather.current?.condition?.text} />
        )}
        <p className="text-4xl font-bold">
          {weather.current?.temp_c}&deg;C
        </p>
        <p className="text-lg">{weather.current?.condition?.text}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
