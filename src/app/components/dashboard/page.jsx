"use client"
import React, { useState } from 'react'
import Searchbar from '../searchbar/page'
import WeatherCard from '../weathercard/page'


const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!search) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/APIcall?city=${encodeURIComponent(search)}`);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError('Could not fetch weather.');
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className='text-3xl mt-10 text-center font-bold'>Dashboard</h1>
      <Searchbar
        value={search}
        onChange={e => setSearch(e.target.value)}
        onSearch={handleSearch}
      />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  )
}

export default Dashboard
