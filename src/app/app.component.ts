import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./services/countries.service";
import {Country, Weather} from "./interfaces/interfaces";
import {WeatherDbService} from "./services/weather-db.service";
import {DialogsService} from "./services/dialogs.service";

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
  buttonPressed = false

  constructor(
    private getCountries: CountriesService,
    private weather: WeatherDbService,
    private dialog: DialogsService
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
    document.getElementById('cityChoice').reset()
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
    this.buttonPressed = true
    this.weather.getWeather(this.City).subscribe(
      log => {
        this.Weather = log
      },
      error => {
        this.dialog.notFound()
        this.buttonPressed = false
      }
    )
  }

  weatherCom(lat: string, lon: string) {
    // @ts-ignore
    window.open(`https://weather.com/weather/today/l/${lat},${lon}`, '_blank').focus()
  }
}
