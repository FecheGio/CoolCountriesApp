import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

const routes: Routes = [

  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponent },
  { path: 'detail/:code', component: CountryDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
