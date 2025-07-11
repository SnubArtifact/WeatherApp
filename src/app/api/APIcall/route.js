// Helper function to fetch weather data from WeatherAPI
// Usage: fetchWeather(city, apiKey)

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') ;
  const apiKey = process.env.WEATHER_API_KEY; // Use .env.local

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`
  );
  const data = await res.json();

  return Response.json(data);
}
 
