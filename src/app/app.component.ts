import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./services/countries.service";
import {Country, Weather} from "./interfaces/interfaces";
import {WeatherDbService} from "./services/weather-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countries: any
  searchCountry = ''
  searchCity = ''
  // @ts-ignore
  Country: Country
  City = ''
  // @ts-ignore
  Weather: Weather

  constructor(
    private getCountries: CountriesService,
    private weather: WeatherDbService
  ) {
  }

  ngOnInit(): void {
    this.getCountries.getCountries().subscribe(
      log => {
        // @ts-ignore
        this.countries = log.data

      }
    )

  }

  changeCountry(country: string) {
    this.loadCountry(country)
  }

  reloadInput(event: Event) {
    // @ts-ignore
    this.loadCountry(event.target.value)
  }

  loadCountry(country: string) {
    for (let obj of this.countries) {
      if (obj.country === country) {
        this.Country = obj
        break;
      } else {
        this.Country = {
          country:  '',
          cities: []
        }
      }
    }
  }

  getWeather() {
    this.weather.getWeather(this.City).subscribe(
      log => {
        this.Weather = log
        console.log(log)
      }
    )
  }
}
