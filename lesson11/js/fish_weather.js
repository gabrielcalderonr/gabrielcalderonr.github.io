const weatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=4186955&appid=febdc1013b948bdcfff6e4b39c5c0f7f&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
  
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

    
          
    });