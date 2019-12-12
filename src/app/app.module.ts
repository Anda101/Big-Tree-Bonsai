import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { DeciduousTreePage } from './deciduous-tree/deciduous-tree.page';
import { EvergreenTreePage } from './evergreen-tree/evergreen-tree.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { GoogleMapComponent } from '../app/google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    DeciduousTreePage,
    EvergreenTreePage
  ],
  entryComponents: [PopoverComponent, DeciduousTreePage, EvergreenTreePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
