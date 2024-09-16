async function getWeatherData(location) {
    const apiKey = "BWNWUX8G7RLB4E9ABTFMFM79Q";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json&include=current&elements=datetime,address,temp,conditions,windspeed,humidity,winddir,visibility,sunrise,sunset,dew,precip,precipprob,icon`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getWeatherData };