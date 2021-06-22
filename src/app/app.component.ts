import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router){

  }
  queryParams() { 
    this.router.navigate(['countries'], { 
      queryParams: { city: 'medellin', currency: "COP"} 
    });
  }
  
  onClick(action: boolean){
    sessionStorage.setItem('authenticated', action ? "true" : "false")
    if(action === false){
      this.router.navigate(['/']);
    }
  }
}
