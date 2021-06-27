import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryFormComponent } from './forms/country-form/country-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,                       
    AppRoutingModule, 
    NgbModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
