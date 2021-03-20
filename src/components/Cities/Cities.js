import React, { useState, useEffect } from 'react';
import NewCity from './NewCity/NewCity';
import City from './City/City';
import { getCityCurrentWeather } from '../../assets/fetchAPI/fetchOpenWeather';

import './Cities.scss';

function Cities() {
  // Fetch current weather data usign city's latitude and longitud
  // Creates array to pass as props in the City component for each input.
  const [data, setData] = useState([]);

  const collectData = async (lat, lon) => {
    const res = await getCityCurrentWeather(lat, lon);
    let element = {
      id: res.id,
      city: res.name,
      country: res.sys.country,
      degrees: res.main.temp.toFixed(),
      humidity: res.main.humidity,
      windDir: res.wind.deg,
      windvel: res.wind.speed,
      type: res.weather[0].main,
    };
    return element;
  };

  useEffect(() => {
    Promise.all([
      collectData(45.7485, 4.8467),
      collectData(48.8534, 2.3488),
    ]).then((data) => setData(data));
  }, []);

  return (
    <div className='cities'>
      <NewCity />
      {data.map((element) => {
        return <City key={element.id} {...element}></City>;
      })}
    </div>
  );
}

export default Cities;
