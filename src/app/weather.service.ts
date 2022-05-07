import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocationResponse, WeatherResponse } from './weatherDTOs';

const baseUrl = `https://www.metaweather.com/api`;


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getLocation(location: string): Promise<LocationResponse> {
    return this.http
          .get<LocationResponse>(`${baseUrl}/location/search/?query=${location}`)
          .pipe(
              catchError((error: HttpErrorResponse) => {
                  alert(error.message + ' status: ' + error.status + ' text ' + error.statusText);
                  return throwError(error.message);
              })
          ).toPromise();
  }

  getForecast(woeid: number): Promise<WeatherResponse> {
    return this.http
          .get<WeatherResponse>(`${baseUrl}/location/${woeid}`)
          .pipe(
              catchError((error: HttpErrorResponse) => {
                  alert(error.message + ' status: ' + error.status + ' text ' + error.statusText);
                  return throwError(error.message);
              })
          ).toPromise();
  }
}
