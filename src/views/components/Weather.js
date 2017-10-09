import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Huntington Beach",
      temp: null,
    }

    this.handleCityChange = this.handleCityChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(event) {
    const newCity = event.target.value;

    this.setState({cityName: newCity})
  }

  getWeather(city) {
    const query = city;

    const updateState = (data) => {
      console.log("DATA IS: ", data);
      this.setState({
        cityName: query,
        temp: data.main.temp
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

  handleSubmit(event) {
    event.preventDefault();
    this.getWeather(this.state.cityName);
  }

  render() {
    let cityName = this.state.cityName;
    let temp = this.state.temp;
    return (
      <div className="container center">
        <h5>{(cityName || "Find Weather")}</h5>
        <h6>{temp}</h6>
        <p>Search for Weather</p>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                onChange={this.handleCityChange}
                value={cityName}
                name="cityInput"
              />

              <button type="submit" className="btn btn-flat blue white-text">
                <i className="material-icons left">search</i>
                <span className="center">Search City</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Weather;
