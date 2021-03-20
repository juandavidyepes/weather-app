import React, { useState, useEffect } from 'react';
import NewCity from './NewCity/NewCity';
import City from './City/City';
import { getCityCurrentWeather } from '../../fetchAPI/fetchOpenWeather';

import './Cities.scss';

function Cities() {
  const [data, setData] = useState([
    {
      id: 1,
      city: 2,
      country: 3,
      degrees: 4,
      humidity: 5,
      windDir: 6,
      windvel: 8,
    },
  ]);

  const getData = async (lat, lon) => {
    const response = await getCityCurrentWeather(lat, lon);
    const res = await response;
    let element = {
      id: res.id,
      city: res.name,
      country: res.sys.country,
      degrees: res.main.temp.toFixed(),
      humidity: res.main.humidity,
      windDir: res.wind.deg,
      windvel: res.wind.speed,
    };
    return element;
  };

  useEffect(() => {
    Promise.all([
      getData(45.7485, 4.8467),
      getData(48.8534, 2.3488),
    ]).then((data) => setData(data));
    setData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
