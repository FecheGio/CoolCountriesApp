import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/app-models/country';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountriesService } from 'src/app/app-services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() country: Country;

  constructor(
    private countryService: CountriesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(){
    this.getCountry();
  }
  
  addFavorite(_country: Country){
    if(_country.favorite == false || _country.favorite == null){
      this.country.favorite = true
    }else{
      this.country.favorite = false
    }
    
  }

  getCountry(){
    const code = this.route.snapshot.paramMap.get('code');
    this.countryService.getCountry(code)
      .subscribe((country: Country) => this.country = country);
  }

}
