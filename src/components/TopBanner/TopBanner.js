import React, { useState, useEffect } from 'react';
import './TopBanner.scss';
import { getCityCurrentWeather } from '../../assets/fetchAPI/fetchOpenWeather';
import { getWeatherIcon } from '../../assets/weatherIcons';

function TopBanner() {
  // Fetch current weather data usign city's latitude and longitud

  useEffect(() => {
    const fetchData = async () => {
      let res = await getCityCurrentWeather(4.6097, -74.0817);
      updateTemp(res);
    };
    fetchData();
  }, []);

  //Set dinamic elements of the component

  const [degrees, setCelsius] = useState('0');
  const [condition, setCondition] = useState('Clear');
  const [weatherIcon, setWeatherIcon] = useState('fas fa-cloud-sun');

  const updateTemp = (res) => {
    setCelsius(res.main.temp.toFixed());
    setCondition(res.weather[0].main);
    setWeatherIcon(getWeatherIcon(res.weather[0].main));
  };

  return (
    <div className='topBanner'>
      <h1 className='title'>
        <i className='fas fa-map-marker-alt'></i> Bogotá
      </h1>
      <img src='./assets/map-col.png' alt='Map' className='map' />
      <section className='degrees'>
        <div className='degreesIcon'>
          <i className={weatherIcon + ' fa-2x'}></i>
          <h3>{condition}</h3>
        </div>
        <div className='degreesNumber'>
          <h2>{degrees}</h2>
          <span>°c</span>
        </div>
      </section>
    </div>
  );
}

export default TopBanner;
