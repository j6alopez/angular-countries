import { Component, ElementRef, OnInit } from '@angular/core';
import { CountryService as CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { count } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit{
  
  public countries: Country[] = [];
  public initialvalue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialvalue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
