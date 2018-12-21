import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../app-models/country';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiURL = "https://restcountries.eu/rest/v2/region/europe" //filtered by european countries
  constructor(private http: HttpClient) { }

  getCountry(code: string){

    return this.http.get<Country[]>(this.apiURL)
  }


  getCountries(): Observable<Country[]>{

    return this.http.get<Country[]>(this.apiURL).pipe(
      map((data: Country[]) => {
        return data;
      })
      )

  }

}
