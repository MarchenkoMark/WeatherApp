import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { LocationResponse, WeatherResponse } from './weatherDTOs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private weatherService: WeatherService) {
    this.getUserLocation();
  }

  isFinished: boolean = false;
  inputCity: string;
  location: LocationResponse;
  weather: WeatherResponse;
  imagePath: string;


  getUserLocation() {
    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async position => {
      await this.getLocationByPosition(position);
      await this.updateByLocation();
    });
  }

  async getLocationByPosition(position: GeolocationPosition) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let locations = await this.weatherService.getLocationBy(lat, lng);
    this.location = locations[0];
  }

  async onSearch() {
    let locations = await this.weatherService.getLocation(this.inputCity);
    this.location = locations[0];

    await this.updateByLocation();
  }

  async updateByLocation() {
    this.weather = await this.weatherService.getForecast(this.location.woeid);

    this.updateImagePath();
    this.isFinished = true;
  }

  updateImagePath() {
    this.imagePath = "https://www.metaweather.com/static/img/weather/" + this.weather.consolidated_weather[0].weather_state_abbr + ".svg";
    console.log('this.imagePath', this.imagePath);
  }
}