import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCity'
})
export class SearchCityPipe implements PipeTransform {

  transform(cities: string[], search = ''): string[] {
    if (!search.trim()){
      return cities
    } else {
      return cities.filter(curr => {
        return curr.toLowerCase().includes(search.toLowerCase())
      })
    }

  }

}
