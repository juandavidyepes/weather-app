import React, { useState, useEffect } from 'react';
import './ThreeDays.scss';
import DailyWeather from './DailyWeather/DailyWeather';
import { getThreeDaysForecast } from '../../fetchAPI/fetchOpenWeather';

function ThreeDays() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getThreeDaysForecast()
      .then((res) => collectData(res))
      .catch((err) => console.log(err));
  }, []);

  const collectData = (res) => {
    var data = [];
    let today = new Date();
    let day = today.getDay();
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
        day: daylist[day + i + 1],
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
