import { Component, OnInit } from '@angular/core';
import { CurrencyI } from './country.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

  public country:CurrencyI[] = [];
  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.dataSvc.getAllCountries().subscribe(data => (this.country = data))
  }

}
