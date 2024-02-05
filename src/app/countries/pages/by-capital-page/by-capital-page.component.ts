import { Component, ElementRef } from '@angular/core';
import { CountryService as CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
