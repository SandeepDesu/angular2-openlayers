import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AppComponent } from './app.component';
import { MapComponent }  from '../maps/maps.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
