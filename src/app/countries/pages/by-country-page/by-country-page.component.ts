import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{
  public countries : Country[] = [];
  public selectedCountry: string = ''

  constructor( private countriesService: CountryService) {}

  ngOnInit(): void {
    this.selectedCountry = this.countriesService.cacheStore.byCountries.term;
    this.countries = this.countriesService.cacheStore.byCountries.countries;
  }
  
  searchByCountry( term: string): void {
    this.countriesService.searchByCountry( term )
    .subscribe( countries => {
        this.selectedCountry = term;
        this.countries = countries;
      })
  }
}
