import { getWeatherData } from "./getWeatherData.js";

async function displayData(location) {
    const weatherData = await getWeatherData(location);

    document.getElementById('city').textContent = weatherData.address;
    document.getElementById('temperature').textContent = `${Math.round(weatherData.currentConditions?.temp ?? 'N/A')}°`;
    document.getElementById('condition').textContent = weatherData.currentConditions?.conditions ?? 'N/A';
    
    //const weatherIcon = document.getElementById('weather-icon');
    //weatherIcon.src = `https://www.visualcrossing.com/weather-icons/${weatherData.currentConditions?.icon}.svg`;
    //weatherIcon.alt = weatherData.currentConditions?.conditions ?? 'Weather icon';

    const detailsContainer = document.querySelector('.weather-details');
    detailsContainer.innerHTML = '';

    const details = [
        { label: 'Wind', value: `${weatherData.currentConditions?.windspeed ?? 'N/A'} km/h` },
        { label: 'Humidity', value: `${weatherData.currentConditions?.humidity ?? 'N/A'}%` },
        { label: 'Visibility', value: `${weatherData.currentConditions?.visibility ?? 'N/A'} km` },
        { label: 'Sunrise', value: weatherData.currentConditions?.sunrise ?? 'N/A' },
        { label: 'Sunset', value: weatherData.currentConditions?.sunset ?? 'N/A' },
        { label: 'Precipitation', value: `${weatherData.currentConditions?.precip ?? 'N/A'} mm` }
    ];

    details.forEach(detail => {
        const detailElement = document.createElement('p');
        detailElement.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
        detailsContainer.appendChild(detailElement);
    });
}

export { displayData };