import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
  }

  onCityChange(event) {
    console.log(event.target.value);
    const city = event.target.value;

    const { handleCityChange } = this.props;

    handleCityChange(city)

  }

  onSubmit(event) {
    event.preventDefault();
    const cityName = event.target.value;

    this.props.onSubmit(cityName);
  }

  render() {
    return (
      <div className="container center">
        <h5>{(this.props.cityName || "Find Weather")}</h5>
        <h6>{this.props.temp}</h6>
        <p>Search for Weather</p>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <form onSubmit={this.onSubmit}>
              <input type="text"
                onChange={this.onCityChange}
                value={this.props.value}
              />

              <button type="submit" className="btn btn-flat blue white-text">
                <i className="material-icons right">search</i> Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherForm;
