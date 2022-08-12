import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../interfaces/interfaces";

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {

  transform(countries: Country[], search = ''): Country[] {
    if (!search.trim()) return countries
    return countries.filter(curr => {
      return curr.country.toLowerCase().includes(search.toLowerCase())
    })
  }

}
