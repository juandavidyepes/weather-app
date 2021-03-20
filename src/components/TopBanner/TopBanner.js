import React, { useState, useEffect } from 'react';
import './TopBanner.scss';
import { getCityCurrentWeather } from '../../fetchAPI/fetchOpenWeather';
import { getWeatherIcon } from '../../assets/weatherIcons';

function TopBanner() {
  useEffect(() => {
    getCityCurrentWeather(4.6097, -74.0817)
      .then((res) => updateTemp(res))
      .catch((err) => console.log(err));
  }, []);

  const [degrees, setCelsius] = useState('0');
  const [condition, setCondition] = useState('Clear');
  const [weatherIcon, setWeatherIcon] = useState('fas fa-cloud-sun');

  const updateTemp = (res) => {
    setCelsius(res.main.temp);
    setCondition(res.weather[0].main);
    setWeatherIcon(getWeatherIcon(res.weather[0].main));
    console.log(weatherIcon);
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
