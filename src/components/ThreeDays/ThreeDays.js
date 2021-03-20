import React, { useState, useEffect } from 'react';
import './ThreeDays.scss';
import DailyWeather from './DailyWeather/DailyWeather';
import { getThreeDaysForecast } from '../../assets/fetchAPI/fetchOpenWeather';

function ThreeDays() {
  // Fetch 3 days forecast of Bogota

  useEffect(() => {
    const fetchData = async () => {
      let res = await getThreeDaysForecast();
      collectData(res);
    };
    fetchData();
  }, []);

  //Creates array to pass as props in the DailyWeather component for each day.

  const [data, setData] = useState([]);

  const collectData = (res) => {
    var data = [];
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let daylist = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday ',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
    ];
    for (let i = 0; i < 3; i++) {
      let element = {
        id: i,
        day: daylist[currentDay + i + 1],
        type: res.daily[i + 1].weather[0].main,
        maxTemp: res.daily[i + 1].temp.max,
        minTemp: res.daily[i + 1].temp.min,
      };
      data.push(element);
    }
    setData(data);
  };

  return (
    <div className='threeDays'>
      <h1 className='title'>
        3 Days <span>Forecast</span>
      </h1>
      {data.map((element) => {
        return <DailyWeather key={element.id} {...element}></DailyWeather>;
      })}
    </div>
  );
}

export default ThreeDays;
