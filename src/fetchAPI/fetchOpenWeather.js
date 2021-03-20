const API_KEY = '08f5051484a62c4dd12aaad90f5275fa';

export const getCityCurrentWeather = async (lat, lon) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    {
      method: 'GET',
    }
  );
  const data = await resp.json();
  console.log(data);
  return data;
};

export const getThreeDaysForecast = async () => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lon=-74.0817&lat=4.6097&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`,
    {
      method: 'GET',
    }
  );
  const data = await resp.json();
  // console.log(data);
  return data;
};
