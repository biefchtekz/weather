import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<Object> {
    return this.http.get(`https://countriesnow.space/api/v0.1/countries`)
  }



}
