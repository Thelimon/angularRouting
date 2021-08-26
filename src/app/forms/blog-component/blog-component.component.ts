import { FormI } from './../../country/form.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss'],
})
export class BlogComponentComponent implements OnInit {
  public form: FormI[] = [];

  newForm = {
    id: 0,
    title: '',
    body : ''
  };
  constructor() {}

  ngOnInit(): void {}

  public enviar(): void {
    const formPreviousState = { ...this.newForm };
    this.form.push(formPreviousState);
  }
}
