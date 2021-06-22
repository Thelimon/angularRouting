import { Injectable } from '@angular/core';
import { CurrencyI } from './country.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = "https://us-central1-softlabs-30335.cloudfunctions.net/countries"
  constructor(private http: HttpClient) { }

  getAllCountries():Observable<CurrencyI[]>{
    return this.http.get<CurrencyI[]>(this.urlAPI);
  }
}
