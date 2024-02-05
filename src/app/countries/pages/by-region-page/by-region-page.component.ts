import { Component, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{
  public countries : Country[] = [];

  public regions: Region [] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 
  public selectedRegion ?: Region;

  constructor( private countriesService: CountryService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }
  
  searchByRegion( region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchByRegion( region)
      .subscribe( countries => {
        this.countries = countries;
      })
  }

}
