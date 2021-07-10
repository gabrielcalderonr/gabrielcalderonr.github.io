/* Weather Summary Data */

const weatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=febdc1013b948bdcfff6e4b39c5c0f7f&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
    // console.log(jsObject);
    // console.log(jsObject.list[0].main);

    document.getElementById("temperature").textContent =
      jsObject.list[0].main.temp;
    document.getElementById("conditions").textContent =
      jsObject.list[0].weather[0].description;
    document.getElementById("high").textContent =
      jsObject.list[0].main.temp_max;
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById("windspeed").textContent =
      jsObject.list[0].wind.speed;

    /* Five Day Forecast */

    const fivedayforecast = jsObject.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );

    for (let i = 0; i < fivedayforecast.length; i++) {
      var forecast = fivedayforecast[i];
      var tempElement = "temperature" + i;
      var iconElement = "icon" + i;
      var dayElement = "day" + i;
      var forecastDate = new Date(forecast.dt_txt);
      var forecastDay = days[forecastDate.getDay()];

      const desc = forecast.weather[0].description;
      const iconsrc =  "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";

      document.getElementById(dayElement).textContent = forecastDay;
      document.getElementById(iconElement).setAttribute("src", iconsrc);
      document.getElementById(iconElement).setAttribute("alt", desc);
      document.getElementById(tempElement).textContent = forecast.main.temp;
          
    }});