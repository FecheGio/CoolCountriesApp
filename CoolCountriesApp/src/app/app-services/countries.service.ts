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



  getCountries(filter?: string): Observable<Country[]>{

    if(filter || filter !=""){
      if(filter == "EU") 
      return this.http.get<Country[]>(this.apiURL + "/regionalbloc/eu")
      if(filter == "EFTA") 
      return this.http.get<Country[]>(this.apiURL + "/regionalbloc/EFTA")
      if(filter == "EURcurrency")
      return this.http.get<Country[]>(this.apiURL + "/currency/eur")
    }else{
      return this.http.get<Country[]>(this.apiURL + "/region/europe")
    }

  }

}
