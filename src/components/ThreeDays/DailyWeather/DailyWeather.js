import React, { useState, useEffect } from 'react';
import './DailyWeather.scss';

function DailyWeather(props) {
  const { day, type, maxTemp, minTemp } = props;

  const [weatherIcon, setWeatherIcon] = useState('fas fa-cloud-sun');
  const [dayText, setDayText] = useState(day);
  const [tempClass, setTempClass] = useState('temp');

  useEffect(() => {
    const { id } = props;
    if (id === 0) {
      setTempClass('temp first');
    }
  }, [props]);

  return (
    <div className='dailyWeather'>
      <i className={weatherIcon}></i>
      <div>
        <h1>{dayText}</h1>
        <h6>{type}</h6>
      </div>
      <div className={tempClass}>
        <h5>{maxTemp.toFixed()} </h5>
        <span className='unit'>°c</span>
        <span> / </span>
        <h5> {minTemp.toFixed()}</h5>
        <span className='unit'>°c</span>
      </div>
    </div>
  );
}

export default DailyWeather;
