import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  searchByCapital( term: string ): void {
    console.log(term);
  }

}
