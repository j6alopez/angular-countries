import { Component, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  countries : Country[] = [];

  constructor( private countriesService: CountryService) {}
  
  searchByRegion( term: string): void {
    this.countriesService.searchByRegion( term)
      .subscribe( countries => {
        this.countries = countries;
      })
  }

}
