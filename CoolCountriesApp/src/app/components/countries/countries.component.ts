import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/app-services/countries.service';
import { Country } from 'src/app/app-models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  countries: Country[] = new Array<Country>()
  countriesStr: string;
  showingCountries = false;
  selectedCountry: Country;
  panelOpenState = false;
  constructor(private coutriesService: CountriesService) { }

  ngOnInit() {
    this.getCountries()
  }
  
  onSelect(country: Country): void {
    this.selectedCountry = country;
  }

  getCountries(){
    //Este no funciona
    this.coutriesService.getCountries().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        const country: Country = data[i];
        country.name = (data[i])['name']
        country.alpha2Code = (data[i])['alpha2Code']
        country.alpha3Code = (data[i])['alpha3Code']
        country.altSpellings = (data[i])['altSpellings']
        country.area = (data[i])['area']
        country.borders = (data[i])['borders']
        country.callingCodes = (data[i])['callingCodes']
        country.capital = (data[i])['capital']
        country.cioc = (data[i])['cioc']
        country.demonym = (data[i])['demonym']
        country.flag = (data[i])['flag']
        country.gini = (data[i])['gini']
        country.latlng = (data[i])['latlng']
        country.nativeName = (data[i])['nativeName']
        country.numericCode = (data[i])['numericCode']
        country.population = (data[i])['population']
        country.region = (data[i])['region']
        country.subregion = (data[i])['subregion']
        country.timezones = (data[i])['timezones']
        country.topLevelDomain = (data[i])['topLevelDomain']

        this.countries.push(country)        
      }
    })

    console.log(this.countries)
   
  }

}
