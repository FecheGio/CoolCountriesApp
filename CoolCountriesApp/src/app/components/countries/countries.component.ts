import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/app-services/countries.service';
import { Country } from 'src/app/app-models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  countries: Country[]
  constructor(private coutriesService: CountriesService) { }

  ngOnInit() {
    this.getCountries()
  }
  
  getCountries(){
    //Este no funciona
    this.coutriesService.getCountries()
    .subscribe((data: Country[]) => this.countries = data)
   
  }

}
