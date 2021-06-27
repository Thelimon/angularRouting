import { Component, OnInit } from '@angular/core';
import { CurrencyI } from 'src/app/country/country.interface';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  public country:CurrencyI[] = [];

  newCountry = {
    name: "",
    code : ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  public enviar():void{
    const countryPreviousState = {...this.newCountry}
    this.country.push(countryPreviousState)
  }

}
