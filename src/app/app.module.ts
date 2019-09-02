import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { DeciduousTreePage } from './deciduous-tree/deciduous-tree.page';
import { EvergreenTreePage } from './evergreen-tree/evergreen-tree.page';

@NgModule({
  declarations: [AppComponent, PopoverComponent, DeciduousTreePage, EvergreenTreePage],
  entryComponents: [PopoverComponent, DeciduousTreePage, EvergreenTreePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
