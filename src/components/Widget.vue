<template>
  <div class="container app-container">
    <h3>Weather Widget</h3>
    <h4>{{searchQuery.city.name}}, {{searchQuery.city.country}}</h4>
    <div class="row card-container">
      <div class="col-sm-12">
        <div class="card weather-card">
          <div class="row">
            <div class="col-sm-6">
              {{today}}
              <h1 class="card-title main-temp">{{Math.round(searchQuery.list[0].main.temp)}}℃</h1>
              <h5 class="card-title"><span class="hi-temp">{{Math.round(queriedCity[0].temp.max)}}℃</span> / <span class="lo-temp">{{Math.round(queriedCity[0].temp.min)}}℃</span></h5>
            </div>
            <div class="col-sm-6">
              <h5 class="card-title weather-desc">{{queriedCity[0].weather[0].description}}</h5>
              <img
                :src='"http://openweathermap.org/img/wn/" + queriedCity[0].weather[0].icon + ".png"'
                class="card-img img-fluid weather-img"
                alt="..."
              >
                <div class="row">
                  <div class="col-sm-4">
                    <h6 class="card-title"><span class="card-value">{{queriedCity[0].pop * 100}}%</span> Precipitation</h6>
                  </div>
                  <div class="col-sm-4">
                    <h6 class="card-title"><span class="card-value">{{queriedCity[0].humidity}}%</span> Humidity</h6>
                  </div>
                  <div class="col-sm-4">
                    <h6 class="card-title"><span class="card-value">{{Math.round(queriedCity[0].wind_speed * 3.6)}}KM/H {{position}}</span> Winds</h6>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">{{tomorrow}} </h5>
            <h6 class="card-title">{{queriedCity[1].weather[0].description}}</h6>
          </div>
          <div class="card-body">
            <img
              :src='"http://openweathermap.org/img/wn/" + queriedCity[1].weather[0].icon + ".png"'
              class="card-img"
              alt="..."
            >
          </div>
          <div class="card-footer">
            <h5 class="footer-hi-temp">{{Math.round(queriedCity[1].temp.max)}}℃</h5>
            <h6 class="footer-lo-temp">{{Math.round(queriedCity[1].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">{{two_days}}</h5>
            <h6 class="card-title">{{queriedCity[2].weather[0].description}}</h6>
          </div>
          <div class="card-body">
            <img
              :src='"http://openweathermap.org/img/wn/" + queriedCity[2].weather[0].icon + ".png"'
              class="card-img"
              alt="..."
            >
          </div>
          <div class="card-footer">
            <h5 class="footer-hi-temp">{{Math.round(queriedCity[2].temp.max)}}℃</h5>
            <h6 class="footer-lo-temp">{{Math.round(queriedCity[2].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">{{three_days}} </h5>
            <h6 class="card-title">{{queriedCity[3].weather[0].description}}</h6>
          </div>
          <div class="card-body">
            <img
              :src='"http://openweathermap.org/img/wn/" + queriedCity[3].weather[0].icon + ".png"'
              class="card-img"
              alt="..."
            >
          </div>
          <div class="card-footer">
            <h5 class="footer-hi-temp">{{Math.round(queriedCity[3].temp.max)}}℃</h5>
            <h6 class="footer-lo-temp">{{Math.round(queriedCity[3].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">{{four_days}}</h5>
            <h6 class="card-title">{{queriedCity[4].weather[0].description}}</h6>
          </div>
          <div class="card-body">
            <img
              :src='"http://openweathermap.org/img/wn/" + queriedCity[4].weather[0].icon + ".png"'
              class="card-img"
              alt="..."
            >
          </div>
          <div class="card-footer">
            <h5 class="footer-hi-temp">{{Math.round(queriedCity[4].temp.max)}}℃</h5>
            <h6 class="footer-lo-temp">{{Math.round(queriedCity[4].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">{{five_days}}</h5>
            <h6 class="card-title">{{queriedCity[5].weather[0].description}}</h6>
          </div>
          <div class="card-body">
            <img
              :src='"http://openweathermap.org/img/wn/" + queriedCity[5].weather[0].icon + ".png"'
              class="card-img"
              alt="..."
            >
          </div>
          <div class="card-footer">
            <h5 class="footer-hi-temp">{{Math.round(queriedCity[5].temp.max)}}℃</h5>
            <h6 class="footer-lo-temp">{{Math.round(queriedCity[5].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">{{six_days}}</h5>
            <h6 class="card-title">{{queriedCity[6].weather[0].description}}</h6>
          </div>
          <div class="card-body">
            <img
              :src='"http://openweathermap.org/img/wn/" + queriedCity[6].weather[0].icon + ".png"'
              class="card-img"
              alt="..."
            >
          </div>
          <div class="card-footer">
            <h5 class="footer-hi-temp">{{Math.round(queriedCity[6].temp.max)}}℃</h5>
            <h6 class="footer-lo-temp">{{Math.round(queriedCity[6].temp.min)}}℃</h6>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "Widget",
  props: {},
  data() {
    return {
      searchQuery: [""],
      queriedCity: [""],
      position: null,
      today: null,
      tomorrow: null
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    getWeather() {
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
      fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=Cape Town&units=metric&APPID=f72987eddba8e99555da0940af6a7163",
        {mode: "cors"}
      )
        .then(response => response.json())
        .then(json => {
          this.searchQuery = json;
          // console.log(json); // quereid city
          const latValue = json.city.coord.lat;
          const lonValue = json.city.coord.lon;
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=metric&exclude=minutely,hourly,current&appid=f72987eddba8e99555da0940af6a7163`,
              {mode: "cors"}
          )
            .then(response => response.json())
            .then(json => {
              this.queriedCity = json.daily;     
              this.today =(moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')) 
              this.tomorrow =(moment(new Date()).add(1, 'days').format('dddd'));       // Tomorrow at 12:40 PM) 
              this.two_days =(moment(new Date()).add(2, 'days').format('dddd')) 
              this.three_days =(moment(new Date()).add(3, 'days').format('dddd')) 
              this.four_days =(moment(new Date()).add(4, 'days').format('dddd')) 
              this.five_days =(moment(new Date()).add(5, 'days').format('dddd')) 
              this.six_days =(moment(new Date()).add(6, 'days').format('dddd')) 
              this.degrees = json.daily[0].wind_deg;
              this.position = "";
              if (this.degrees < 90) {
                this.position = "NE";
              }
              if (this.degrees > 90 && this.degrees < 180) {
                this.position = "SE";
              }
              if (this.degrees > 180 && this.degrees < 270) {
                this.position = "SW";
              }
              if (this.degrees > 270 && this.degrees < 360) {
                this.position = "NW";
              }
              if (this.degrees == 0 && this.degrees == 360) {
                this.position = "N";
              }
              if (this.degrees == 90) {
                this.position = "E";
              }
              if (this.degrees == 180) {
                this.position = "S";
              }
              if (this.degrees == 270) {
                this.position = "W";
              }
              console.log(json.daily[1].dt_txt);
              console.log(json.daily[2].dt);
              console.log(json.daily[3].dt);
              console.log(moment(json.daily[1].dt_txt).format("MMM Do YY")); // weekly report
              console.log(moment(json.daily[2].dt_txt).format("MMM Do YY")); // weekly report
              console.log(moment(json.daily[3].dt_txt).format("MMM Do YY")); // weekly report
              console.log(moment(json.daily[4].dt_txt).format("MMM Do YY")); // weekly report
              console.log(moment(json.daily[5].dt_txt).format("MMM Do YY")); // weekly report
            });
        })
        .catch(err => alert(err, "Invalid information passed in!"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.footer-hi-temp{
  font-size: 26px;
  font-style: italic;
  opacity: 0.6
}

.footer-lo-temp{
  font-size: 20px;
  font-style: italic;
  opacity: 0.4
}

.card-container {
  
}



.card {
  margin: 5px;
}

.app-container {
  margin: auto;
}

.card {
  border-radius: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  border: none;
  width: 100%;
  background-color: rgba(80, 133, 165,0.6);
}

.weather-card {
  
}


.weather-card .card-header,
.weather-card .card-body,
.weather-card .card-footer {
  background-color: rgba(80, 133, 165,0.6);
}

.weather-card .card-header {
  height: 130px;
  border: none;
  text-transform: capitalize;
}

.weather-card .card-footer {
  border: none;
}

.weather-img {
  width: 180px;
  height: 180px;
}

.main-temp{
  font-size: 120px;
}

.hi-temp{
  font-size: 30px;
  opacity: 0.6;
}

.lo-temp{
  font-size: 24px;
  opacity: 0.4;
}

.weather-desc{
  text-transform: capitalize
}

.card-value{
  color: lightblue;
  font-style: italic
}

</style>
