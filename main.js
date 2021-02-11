// Date
// Temperature /
// City / 
// Country /
// High and low /
// precipitation
// humidity /
// windspeed / 
// Weather icons /
// next 5 days weather forecast : high and lows and icons

var city = document.querySelector(".city");
var country = document.querySelector('.country')
var feel = document.querySelector(".feel");
var description = document.querySelector(".description");
var feel_high = document.querySelector(".feel-high");
var feel_low = document.querySelector(".feel-low");
var humidity = document.querySelector(".humidity");
var windspeed = document.querySelector('.windspeed');
var icon = document.querySelector('.icon');

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Cape Town&units=metric&APPID=f72987eddba8e99555da0940af6a7163"
)
  .then((response) => response.json())

  .then((data) => {
    console.log(data);
    var cityValue = data.name;
    var countryValue = data.sys.country
    var feelValue = data.main.temp;
    var descriptionValue = data.weather[0].description;
    var feel_highValue = data.main.temp_max;
    var feel_lowValue = data.main.temp_min;
    var humidityValue = data.main.humidity;
    var windspeedValue = data.wind.speed;
    var iconValue = data.weather[0].icon

    city.innerHTML = cityValue;
    country.innerHTML = countryValue;
    icon.src = 'http://openweathermap.org/img/wn/' + iconValue +'.png' 
    feel.innerHTML = Math.round(feelValue) + " ℃";
    description.innerHTML = descriptionValue;
    feel_high.innerHTML = "HI: " + Math.round(feel_highValue) + " ℃";
    feel_low.innerHTML = "LOW: " + Math.round(feel_lowValue) + " ℃";
    humidity.innerHTML = "HUMIDITY: " + humidityValue + "%";
    windspeed.innerHTML = "WINDS: " + Math.round(windspeedValue * 3.6) + " km/h"; // *3.6 is used to convert the datas metres/sec to km/hour for the widget
  })

  .catch((err) => alert("Invalid city or API key!"));