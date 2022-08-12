import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherDbService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=287125adfe45d9c5561a239abdfa4dad`)
  }

}
