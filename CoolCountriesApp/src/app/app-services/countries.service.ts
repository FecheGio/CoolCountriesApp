import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../app-models/country';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiURL = "https://restcountries.eu/rest/v2" 
  constructor(private http: HttpClient) { }

  getCountriesFiltered(filter: string[]){

  }

  getCountry(code: string): Observable<Country>{

    return this.http.get<Country>(this.apiURL + "/alpha/" + code)

  }


  getCountries(filter?: string[]): Observable<Country[]>{

    if(filter){

    }else{
      return this.http.get<Country[]>(this.apiURL + "/region/europe")
    }

  }

}
