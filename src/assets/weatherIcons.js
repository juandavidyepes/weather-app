//Object with icon class according to type of weather

const types = {
  Thunderstorm: 'fas fa-bolt',
  Drizzle: 'fas fa-cloud-rain',
  Rain: 'fas fa-cloud-showers-heavy',
  Snow: 'far fa-snowflake',
  Clear: 'fas fa-sun',
  Clouds: 'fas fa-cloud',
};

//Assign class string according to the input weather

export const getWeatherIcon = (main) => {
  let iconClass = '';
  switch (main) {
    case 'Thunderstorm':
      iconClass = types.Thunderstorm;
      break;
    case 'Drizzle':
      iconClass = types.Drizzle;
      break;
    case 'Rain':
      iconClass = types.Rain;
      break;
    case 'Snow':
      iconClass = types.Snow;
      break;
    case 'Clear':
      iconClass = types.Clear;
      break;
    case 'Clouds':
      iconClass = types.Clouds;
      break;
    default:
      iconClass = types.Clouds;
      break;
  }
  return iconClass;
};
