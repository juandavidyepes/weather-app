# GradiWeather

GradiWeather is a web app developed with **_React_** for getting real time weather information using OpenWeather API.  

URL: https://gradi-weather.netlify.app/

##### Table of Contents

-[Development](#development)  
-[API](#api)  
-[Components](#components)  
-[Responsive](#responsive)  
-[Future implementations](#future-implementations)  

## Development

This project was developed using React due to it's ease for using dynamic components. The components structure goes as follow:

* App
  * TopBanner
  * ThreeDays
    * DailyWeather    
  * PlaceVisit
    * Card
  * Cities
    *  NewCity
    *  City  

This components can be found in the **components** folder. Additionally there is an **assets** folder where you will find the script for fetching the data from the API and a script that provides the icon class according to the type of weather

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API

All the information that is displayed in the app is being fetched in real time from the following endpoint in the OpenWeather API.

### Current Weather Data

This endpoint gives you access to the current weather information from a city of choice. From the data provided, the app uses the name of the city, country, current temperature, weather condition, humidity, wind speed and wind direction. 

### One Call API

With this endpoint, you can get information of the current weather and historical data aswell. This uses this data to provide the daily forecast of the next three following days.

## Components

![Screenshot](Screenshot.png)


You can find the following components in the web app, temperature is shown in Celsius and wind speed in km/h. :

### Main City

Shows the name of the city, map of the country, current weather and its corresponding icon, and current temperature in celsius.

### 3 Days Forecast

Displays three cards showing the forecast weather of the next three following days, you can find the day of the week, weather condition and its icon, and maximum and minimum temperature

### Place to Visit

Consist of information about places you might like to visit, it's photo and name.

### City cards

Here you can display information about the current weather in any city. The elements are city, country, temperature, weather condition, humidity, wind speed and wind direction.

## Responsive

This web app it's also devoloped to work on mobile devices  

![Screenshot](ScreenshotMobile.png)

## Future implementations

- Ability to change the cards of the cities.  
- Change the main city.  
- Dynamic cards at Place to Visit.  
- Show more info when selecting a card.

## Author

 - Juan David Yepes - [juandavidyepes](https://github.com/juandavidyepes)
