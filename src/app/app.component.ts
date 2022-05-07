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

  }

  inputCity: string;
  location: LocationResponse;
  weather: WeatherResponse;

  title = 'WeatherApp';

  async onSearch() {
    let locations = await this.weatherService.getLocation(this.inputCity);
    this.location = locations[0];
    this.weather = await this.weatherService.getForecast(this.location.woeid);
    console.log('this.weather', this.weather);
  }
}