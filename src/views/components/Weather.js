import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Huntington Beach",
      temp: 0,
      weatherIcon: "",
    }

    this.handleCityChange = this.handleCityChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(event) {
    const newCity = event.target.value;

    this.setState({cityName: newCity})
  }

  getIcon(weather) {
    switch (weather) {
      case 0:
        weather = 'tornado';
        break;

      case 1:
      case 2:
        weather = 'hurricane';
        break;

      case 3:
      case 4:
        weather = 'day-thunderstorm';
        break;

      case 5:
      case 6:
      case 7:
        weather = 'rain-mix';
        break;

      case 8:
      case 9:
        weather = 'showers';
        break;

      case 10:
      case 11:
      case 12:
        weather = 'rain';
        break;

      case 13:
      case 14:
      case 15:
      case 16:
        weather = 'snow';
        break;

      case 17:
      case 18:
        weather = 'hail';
        break;

      case 19:
        weather = 'dust';
        break;

      case 20:
      case 21:
        weather = 'fog';
        break;

      case 22:
        weather = 'smoke';
        break;

      case 23:
      case 24:
        weather = 'windy';
        break;

      case 25:
        weather = 'snowflake-cold';
        break;

      case 26:
        weather = 'cloudy';
        break;

      case 27:
      case 29:
        weather = 'night-cloudy';
        break;

      case 28:
      case 30:
        weather = 'day-cloudy';
        break;

      case 31:
        weather = 'night-clear';
        break;

      case 32:
        weather = 'day-sunny';
        break;

      case 33:
        weather = 'stars';
        break;

      case 34:
        weather = 'sunny';
        break;

      case 35:
        weather = 'rain-mix';
        break;

      case 36:
        weather = 'hot';
        break;

      case 37:
      case 38:
      case 39:
        weather = 'thunderstorm';
        break;

      case 40:
        weather = 'sprinkles';
        break;

      case 41:
      case 42:
        weather = 'snow';
        break;

      case 44:
        weather = 'day-cloudy';
        break;

      case 45:
        weather = 'thundershower';
        break;

      case 46:
        weather = 'snow';
        break;

      case 47:
        weather = 'storm-showers';
        break;

      case 3200:
        weather = 'thermometer-exterior';
        break;

      default:
        weather = 'thermometer-exterior';
    }
  }

  getWeather(city) {
    const query = city;

    const updateState = (data) => {
      console.log("DATA IS: ", data);

      this.setState({
        cityName: query,
        temp: data.main.temp,
      });
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=bb7b9d1cc6ee261c880dbe06b660e957`)
    .then(function(response) {
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      updateState(data);
    })
  }

  componentDidMount() {
    this.getWeather(this.state.cityName);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getWeather(this.state.cityName);
  }

  render() {
    let cityName = this.state.cityName.toLowerCase();
    let temp = this.state.temp;

    return (
      <div className="container center cityData">
        <h3 className="cityName">{(cityName || "Find Weather")}</h3>
        <h3><i className="wi wi-day-lightning"></i></h3>
        <h3>{temp.toFixed(1)} F</h3>

        <p>Search for Weather</p>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                className="cityName"
                onChange={this.handleCityChange}
                value={cityName}
                name="cityInput"
              />

              <button type="submit" className="btn btn-flat blue white-text">
                <i className="material-icons left">search</i>
                <span className="center">Lookup Weather</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Weather;
