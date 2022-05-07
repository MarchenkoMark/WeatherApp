import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  inputCity: string;
  title = 'WeatherApp';
}