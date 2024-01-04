//Dom builder:
const weatherContainer = document.getElementById('weatherContainer');
const weatherDiv = document.createElement('div');
weatherDiv.id = "weatherDiv";
const weatherStats = document.createElement('div');
weatherStats.id = "weatherStats";
const weatherLocation = document.createElement('div');
weatherLocation.id = "weatherLocation";
const temp = document.createElement('h3');
const wind = document.createElement('h3');
const humidity = document.createElement('h3');
const feel = document.createElement('h3');
const icon = document.createElement('img');
const condition = document.createElement('h3');
const city = document.createElement('h2');
const region = document.createElement('h2');
const country = document.createElement('h2');



const buildDom = (dom) => {
    temp.innerText = `Current Tempature: ${dom.temp}'F`;
    wind.innerText = `Wind Speed: ${dom.wind} mph`;
    humidity.innerText = `Humidity: ${dom.humidity}%`;
    feel.innerText = `Feels Like: ${dom.tempFeel}'F`;
    icon.src = dom.weatherIcon;
    condition.innerText = `Weather Condition: ${dom.condition}`;
    city.innerText = `City: ${dom.city}`;
    region.innerText = `Region: ${dom.region}`;
    country.innerText = `Country: ${dom.country}`;
    //create divs to hold weather information 
    weatherContainer.appendChild(weatherDiv);
    weatherDiv.appendChild(weatherLocation);
    weatherDiv.appendChild(weatherStats)
    //Create elements for weather location div
    weatherLocation.appendChild(city);
    weatherLocation.appendChild(region);
    weatherLocation.appendChild(country);
    //Create elements to hold weather stats 
    weatherStats.appendChild(temp);
    weatherStats.appendChild(wind);
    weatherStats.appendChild(humidity);
    weatherStats.appendChild(feel);
    weatherStats.appendChild(condition);
    weatherStats.appendChild(icon);
}


export{buildDom}


