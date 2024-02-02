import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1'


    constructor(private http: HttpClient) {      
    }

    searchCapital( term: string ): Observable<Country[]>  {
        const url: string = `${this.apiUrl }/capital/${ term }`
        return this.http.get<Country[]>( url)
            .pipe(
                catchError( error => {
                   return of( [] )
                })
            );
    }

}