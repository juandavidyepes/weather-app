import React, { useState, useEffect } from 'react';
import './City.scss';

function City(props) {
  const { city, country, degrees, humidity, windDir, windvel } = props;
  const [weatherIcon, setWeatherIcon] = useState('fas fa-cloud-sun fa-2x');
  const [dir, setDir] = useState('NA');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (windDir < 22.5) {
      setDir('North');
    } else if (windDir < 67.5) {
      setDir('Northeast');
    } else if (windDir < 112.5) {
      setDir('East');
    } else if (windDir < 157.5) {
      setDir('Southeast');
    } else if (windDir < 202.5) {
      setDir('South');
    } else if (windDir < 247.5) {
      setDir('Southwest');
    } else if (windDir < 292.5) {
      setDir('West');
    } else if (windDir < 337.5) {
      setDir('Northwest');
    } else {
      setDir('North');
    }
  });

  return (
    <div className='city'>
      <section className='info'>
        <div className='iconContainer'>
          <i className={weatherIcon}></i>
        </div>

        <h2 className='degrees'>
          {degrees}
          <span>°c</span>
        </h2>
        <div className='place'>
          <h4 className='cityTitle'>{city}</h4>
          <h6 className='countryTitle'>{country}</h6>
        </div>
      </section>
      <section className='details'>
        <h5 className='det1'>Humidity {humidity}%</h5>
        <h5 className='det2'>{dir}</h5>
        <h5 className='det3'>{(windvel * 3.6).toFixed(1)}km/h</h5>
      </section>
    </div>
  );
}

export default City;
