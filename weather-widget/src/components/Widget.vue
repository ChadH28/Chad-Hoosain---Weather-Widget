<template>
  <div class="container app-container">
    <h3>Weather Widget</h3>
    <h4>{{searchQuery.city.name}}, {{searchQuery.city.country}}</h4>
    <div class="row card-container">
      <div class="col-sm-12">
        <div class="card weather-card">
          <div class="row">
            <div class="col-sm-6">
              Present day
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
                    <h6 class="card-title"><span class="card-value">{{position}} {{Math.round(queriedCity[0].wind_speed * 3.6)}}KM/H</span> Winds</h6>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">Tomorrow </h5>
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
            <h5 class="card-title">{{Math.round(queriedCity[1].temp.max)}}℃</h5>
            <h6 class="card-title">{{Math.round(queriedCity[1].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">Day After</h5>
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
            <h5 class="card-title">{{Math.round(queriedCity[2].temp.max)}}℃</h5>
            <h6 class="card-title">{{Math.round(queriedCity[2].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">2 Days After </h5>
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
            <h5 class="card-title">{{Math.round(queriedCity[3].temp.max)}}℃</h5>
            <h6 class="card-title">{{Math.round(queriedCity[3].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">3 Days After </h5>
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
            <h5 class="card-title">{{Math.round(queriedCity[4].temp.max)}}℃</h5>
            <h6 class="card-title">{{Math.round(queriedCity[4].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">4 Days After </h5>
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
            <h5 class="card-title">{{Math.round(queriedCity[5].temp.max)}}℃</h5>
            <h6 class="card-title">{{Math.round(queriedCity[5].temp.min)}}℃</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-2">
        <div class="card weather-card">
          <div class="card-header">
            <h5 class="card-title">5 Days After </h5>
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
            <h5 class="card-title">{{Math.round(queriedCity[6].temp.max)}}℃</h5>
            <h6 class="card-title">{{Math.round(queriedCity[6].temp.min)}}℃</h6>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Widget",
  props: {},
  data() {
    return {
      searchQuery: [""],
      queriedCity: [""],
      position: "",
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
        "http://api.openweathermap.org/data/2.5/forecast?q=Cape Town&units=metric&APPID=f72987eddba8e99555da0940af6a7163"
      )
        .then(response => response.json())
        .then(json => {
          this.searchQuery = json;
          // console.log(json); // quereid city
          const latValue = json.city.coord.lat;
          const lonValue = json.city.coord.lon;
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=metric&exclude=minutely,hourly,current&appid=f72987eddba8e99555da0940af6a7163`
          )
            .then(response => response.json())
            .then(json => {
              this.queriedCity = json.daily;
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
              // console.log(json.daily[0].wind_deg);
              // console.log(json.daily); // weekly report
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

.card-container {
  padding: 8px;
}

.card {
  margin: 4px;
}

.app-container {
  margin: auto;
}

.card {
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  padding: 5px;
}

.weather-card .card-body {
  background-color: rgba(255, 255, 255, 0.3);
}

.weather-card .card-header {
  height: 130px;
  border: none;
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
  color: rgba(255, 0, 0,0.8);
}

.lo-temp{
  font-size: 24px;
  color: rgba(0, 0, 255,0.8);
}

.weather-desc{
  text-transform: capitalize
}

.card-value{
  color: lightblue;
  font-style: italic
}

</style>
