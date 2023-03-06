import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";
import {NativeGeocoder} from "@awesome-cordova-plugins/native-geocoder/ngx";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {Calendar} from "@awesome-cordova-plugins/calendar/ngx";
import {EditorModule} from "@tinymce/tinymce-angular";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { StatusBar, Style } from '@capacitor/status-bar';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, EditorModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,AutocompleteLibModule],
  providers: [ FileOpener, Calendar, Geolocation, NativeGeocoder, HttpClientModule,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
    StatusBar.hide();
  }
}
