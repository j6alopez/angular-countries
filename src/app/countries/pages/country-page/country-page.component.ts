import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({id}) => {

        this.countryService.searchCountryByAlphaCode( id )
          .subscribe( country => {
            console.log({ country })
          })

      });
  }

}

