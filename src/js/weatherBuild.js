import { API_WEATHER_KEY } from "./apiKey.js";
import { buildDom } from "./domBuilder.js";

//Starting city weather data
let location = "new york"
//Build weather table data::
const weatherApi = (api) => {
    //Weather Metrics:
    const weatherMetrics = api.current;
    const temp = weatherMetrics.temp_f;
    const wind = weatherMetrics.gust_mph;
    const humidity = weatherMetrics.humidity;
    const tempFeel = weatherMetrics.feelslike_f;
    
    //Weather conditions:
    const weatherConditions = weatherMetrics.condition;
    const weatherIcon = weatherConditions.icon;
    const condition = weatherConditions.text;
   
    //weather Location:
    const weatherLocation = api.location;
    const region = weatherLocation.region;
    const city = weatherLocation.name;
    const country = weatherLocation.country;
    //weather Object
    const weatherStats = {
        temp,
        wind,
        humidity,
        tempFeel,
        weatherIcon,
        condition,
        region,
        city,
        country
    }
    buildDom(weatherStats);
  
}

handleError = (err) => {
    console.error(err)
}
//On click method to update the weather data pr city the user enters
const onClick = (e) => {
    //e.preventDefault();
    let location = document.getElementById("cityName").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_WEATHER_KEY}&q=${location}&aqi=no`)
    .then(res => res.json())
    .then(json => weatherApi(json))
    .catch(error => handleError(error))
}
//Inital API call to display weather data
const intialCall = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_WEATHER_KEY}&q=${location}&aqi=no`)
    .then(res => res.json())
    .then(json => weatherApi(json))
    .catch(error => handleError(error))
}


document.querySelector("#btn").addEventListener("click",  onClick);


export{onClick, intialCall}