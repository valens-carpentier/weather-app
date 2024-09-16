import { getWeatherData } from "./getWeatherData.js";

async function displayData(location) {
    const weatherData = await getWeatherData(location);
    
    const currentTemp = document.createElement("p");
    currentTemp.textContent = `Current temperature: ${weatherData.currentConditions?.temp ?? 'N/A'}°C`;
    document.body.appendChild(currentTemp);

    const currentCity = document.createElement("p");
    currentCity.textContent = `Current city: ${weatherData.address}`;
    document.body.appendChild(currentCity);

    const currentTime = document.createElement("p");
    currentTime.textContent = `Current time: ${weatherData.currentConditions?.datetime}`;
    document.body.appendChild(currentTime);

    const currentConditions = document.createElement("p");
    currentConditions.textContent = `Current conditions: ${weatherData.currentConditions?.conditions ?? 'N/A'}`;
    document.body.appendChild(currentConditions);

    const currentWindSpeed = document.createElement("p");
    currentWindSpeed.textContent = `Current wind speed: ${weatherData.currentConditions?.windspeed ?? 'N/A'} Km/h`;
    document.body.appendChild(currentWindSpeed);

    const currentWindDirection = document.createElement("p");
    currentWindDirection.textContent = `Current wind direction: ${weatherData.currentConditions?.winddir ?? 'N/A'}`;
    document.body.appendChild(currentWindDirection);

    const currentHumidity = document.createElement("p");
    currentHumidity.textContent = `Current humidity: ${weatherData.currentConditions?.humidity ?? 'N/A'}%`;
    document.body.appendChild(currentHumidity);

    const currentVisibility = document.createElement("p");
    currentVisibility.textContent = `Current visibility: ${weatherData.currentConditions?.visibility ?? 'N/A'} Km`;
    document.body.appendChild(currentVisibility);

    const currentSunrise = document.createElement("p");
    currentSunrise.textContent = `Current sunrise: ${weatherData.currentConditions?.sunrise ?? 'N/A'}`;
    document.body.appendChild(currentSunrise);

    const currentSunset = document.createElement("p");
    currentSunset.textContent = `Current sunset: ${weatherData.currentConditions?.sunset ?? 'N/A'}`;
    document.body.appendChild(currentSunset);

    const currentDew = document.createElement("p");
    currentDew.textContent = `Dew Point: ${weatherData.currentConditions?.dew ?? 'N/A'}°C`;
    document.body.appendChild(currentDew);

    const currentPrecip = document.createElement("p");
    currentPrecip.textContent = `Precipitation: ${weatherData.currentConditions?.precip ?? 'N/A'} mm`;

    const currentPrecipprob = document.createElement("p");
    currentPrecipprob.textContent = `Precipitation probability: ${weatherData.currentConditions?.precipprob ?? 'N/A'}%`;
    document.body.appendChild(currentPrecipprob);

    const currentIcon = document.createElement("img");
    currentIcon.src = `https://www.visualcrossing.com/weather-icons/${weatherData.currentConditions?.icon}.svg`;
    document.body.appendChild(currentIcon);
    
}

export { displayData };