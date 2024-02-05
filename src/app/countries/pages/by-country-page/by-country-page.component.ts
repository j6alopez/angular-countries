import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  @Input()
  public countries : Country[] = [];

  constructor( private countriesService: CountryService) {}
  
  searchByCountry( term: string): void {
    this.countriesService.searchByCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      })
  }
}
