import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SearchCountryPipe} from './pipes/search-country.pipe';
import {FormsModule} from "@angular/forms";
import {SearchCityPipe} from './pipes/search-city.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NotFoundComponent} from './alerts/not-found/not-found.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchCountryPipe,
    SearchCityPipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
