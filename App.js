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

// today
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var feel = document.querySelector(".feel");
var description = document.querySelector(".description");
var feel_high = document.querySelector(".feel-high");
var humidity = document.querySelector(".humidity");
var precipitation = document.querySelector(".precipitation");
var windspeed = document.querySelector(".windspeed");
var icon = document.querySelector(".icon");
var date = document.querySelector(".date");
// tomorrow
var feel2 = document.querySelector(".feel2");
var description2 = document.querySelector(".description2");
var feel_high2 = document.querySelector(".feel-high2");
var humidity2 = document.querySelector(".humidity2");
var precipitation2 = document.querySelector(".precipitation2");
var windspeed2 = document.querySelector(".windspeed2");
var icon2 = document.querySelector(".icon2");
var date2 = document.querySelector(".date2");
// day3
var feel3 = document.querySelector(".feel3");
var description3 = document.querySelector(".description3");
var feel_high3 = document.querySelector(".feel-high3");
var humidity3 = document.querySelector(".humidity3");
var precipitation3 = document.querySelector(".precipitation3");
var windspeed3 = document.querySelector(".windspeed3");
var icon3 = document.querySelector(".icon3");
var date3 = document.querySelector(".date3");
// day4
var feel4 = document.querySelector(".feel4");
var description4 = document.querySelector(".description4");
var feel_high4 = document.querySelector(".feel-high4");
var humidity4 = document.querySelector(".humidity4");
var precipitation4 = document.querySelector(".precipitation4");
var windspeed4 = document.querySelector(".windspeed4");
var icon4 = document.querySelector(".icon4");
var date4 = document.querySelector(".date4");
// day5
var feel5 = document.querySelector(".feel5");
var description5 = document.querySelector(".description5");
var feel_high5 = document.querySelector(".feel-high5");
var humidity5 = document.querySelector(".humidity5");
var precipitation5 = document.querySelector(".precipitation5");
var windspeed5 = document.querySelector(".windspeed5");
var icon5 = document.querySelector(".icon5");
var date5 = document.querySelector(".date5");

fetch(
  "http://api.openweathermap.org/data/2.5/forecast?q=Cape Town&units=metric&APPID=f72987eddba8e99555da0940af6a7163"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var cityValue = data.city.name;
    var countryValue = data.city.country;
    var latValue = data.city.coord.lat;
    var lonValue = data.city.coord.lon;

    city.innerHTML = cityValue + ","+countryValue+"";
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=metric&exclude=minutely,hourly,current&appid=f72987eddba8e99555da0940af6a7163`
    )
      .then((response) => response.json())
      .then((data2) => {
        console.log(data2);
        // Todays weather
        var feelValue = data2.daily[0].temp.day;
        var descriptionValue = data2.daily[0].weather[0].description;
        var feel_highValue = data2.daily[0].temp.max;
        var feel_lowValue = data2.daily[0].temp.min;
        var humidityValue = data2.daily[0].humidity;
        var precipValue = data2.daily[0].pop;
        var windspeedValue = data2.daily[0].wind_speed;
        var iconValue = data2.daily[0].weather[0].icon;
        var dateValue = data.list[0].dt_txt;
        // tomorrows weather
        var feelValue2 = data2.daily[1].temp.day;
        var descriptionValue2 = data2.daily[1].weather[0].description;
        var feel_highValue2 = data2.daily[1].temp.max;
        var feel_lowValue2 = data2.daily[1].temp.min;
        var humidityValue2 = data2.daily[1].humidity;
        var precipValue2 = data2.daily[1].pop;
        var windspeedValue2 = data2.daily[1].wind_speed
        var iconValue2 = data2.daily[1].weather[0].icon;
        var dateValue2 = data.list[8].dt_txt;
        // day3 weather
        var feelValue3 = data2.daily[2].temp.day;
        var descriptionValue3 = data2.daily[2].weather[0].description;
        var feel_highValue3 = data2.daily[2].temp.max;
        var feel_lowValue3 = data2.daily[2].temp.min;
        var humidityValue3 = data2.daily[2].humidity;
        var precipValue3 = data2.daily[2].pop;
        var windspeedValue3 = data2.daily[2].wind_speed
        var iconValue3 = data2.daily[2].weather[0].icon;
        var dateValue3 = data.list[16].dt_txt;
        // day4 weather
        var feelValue4 = data2.daily[3].temp.day;
        var descriptionValue4 = data2.daily[3].weather[0].description;
        var feel_highValue4 = data2.daily[3].temp.max;
        var feel_lowValue4 = data2.daily[3].temp.min;
        var humidityValue4 = data2.daily[3].humidity;
        var precipValue4 = data2.daily[3].pop;
        var windspeedValue4 = data2.daily[3].wind_speed
        var iconValue4 = data2.daily[3].weather[0].icon;
        var dateValue4 = data.list[24].dt_txt;
        // day5 weather
        var feelValue5 = data2.daily[4].temp.day;
        var descriptionValue5 = data2.daily[4].weather[0].description;
        var feel_highValue5 = data2.daily[4].temp.max;
        var feel_lowValue5 = data2.daily[4].temp.min;
        var humidityValue5 = data2.daily[4].humidity;
        var precipValue5 = data2.daily[4].pop;
        var windspeedValue5 = data2.daily[4].wind_speed
        var iconValue5 = data2.daily[4].weather[0].icon;
        var dateValue5 = data.list[32].dt_txt;

        // today
        feel.innerHTML = Math.round(feelValue) + "℃";
        icon.src = "http://openweathermap.org/img/wn/" + iconValue + ".png";
        description.innerHTML = descriptionValue;
        feel_high.innerHTML = Math.round(feel_highValue) + "℃" + "/" + Math.round(feel_lowValue) + "℃";
        humidity.innerHTML = "HUMIDITY: " + humidityValue + "%";
        precipitation.innerHTML = "PRECIP: " + Math.round(precipValue * 100) + "%";
        windspeed.innerHTML = "WINDS: " + Math.round(windspeedValue * 3.6) + " km/h"; // *3.6 is used to convert the datas metres/sec to km/hour for the widget Wind 10km/h
        date.innerHTML = dateValue.toString();
        // tomorrow
        feel2.innerHTML = Math.round(feelValue2) + "℃";
        icon2.src = "http://openweathermap.org/img/wn/" + iconValue2 + ".png";
        description2.innerHTML = descriptionValue2;
        feel_high2.innerHTML = Math.round(feel_highValue2) + "℃" + "/" + Math.round(feel_lowValue2) + "℃";
        humidity2.innerHTML = "HUMIDITY: " + humidityValue2 + "%";
        precipitation2.innerHTML = "PRECIP: " + Math.round(precipValue2 * 100) + "%";
        windspeed2.innerHTML = "WINDS: " + Math.round(windspeedValue2 * 3.6) + " km/h"; // *3.6 is used to convert the datas metres/sec to km/hour for the widget
        date2.innerHTML = dateValue2.toString();
        // day3
        feel3.innerHTML = Math.round(feelValue3) + "℃";
        icon3.src = "http://openweathermap.org/img/wn/" + iconValue3 + ".png";
        description3.innerHTML = descriptionValue3;
        feel_high3.innerHTML = Math.round(feel_highValue3) + "℃" + "/" + Math.round(feel_lowValue3) + "℃";
        humidity3.innerHTML = "HUMIDITY: " + humidityValue3 + "%";
        precipitation3.innerHTML = "PRECIP: " + Math.round(precipValue3 * 100) + "%";
        windspeed3.innerHTML = "WINDS: " + Math.round(windspeedValue3 * 3.6) + " km/h"; // *3.6 is used to convert the datas metres/sec to km/hour for the widget
        date3.innerHTML = dateValue3.toString();
        // day4
        feel4.innerHTML = Math.round(feelValue4) + "℃";
        icon4.src = "http://openweathermap.org/img/wn/" + iconValue4 + ".png";
        description4.innerHTML = descriptionValue4;
        feel_high4.innerHTML = Math.round(feel_highValue4) + "℃" + "/" + Math.round(feel_lowValue4) + "℃";
        humidity4.innerHTML = "HUMIDITY: " + humidityValue4 + "%";
        precipitation4.innerHTML = "PRECIP: " + Math.round(precipValue4 * 100) + "%";
        windspeed4.innerHTML = "WINDS: " + Math.round(windspeedValue4 * 3.6) + " km/h"; // *3.6 is used to convert the datas metres/sec to km/hour for the widget
        date4.innerHTML = dateValue4.toString();
        // day5
        feel5.innerHTML = Math.round(feelValue5) + "℃";
        icon5.src = "http://openweathermap.org/img/wn/" + iconValue5 + ".png";
        description5.innerHTML = descriptionValue5;
        feel_high5.innerHTML = Math.round(feel_highValue5) + "℃" + "/" + Math.round(feel_lowValue5) + "℃";
        humidity5.innerHTML = "HUMIDITY: " + humidityValue5 + "%";
        precipitation5.innerHTML = "PRECIP: " + Math.round(precipValue5 * 100) + "%";
        windspeed5.innerHTML = "WINDS: " + Math.round(windspeedValue5 * 3.6) + " km/h"; // *3.6 is used to convert the datas metres/sec to km/hour for the widget
        date5.innerHTML = dateValue5.toString();
    });
  })
  .catch((err) => alert("Invalid information passed in!"));
