import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule }    from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    CountriesComponent,
    FooterComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }