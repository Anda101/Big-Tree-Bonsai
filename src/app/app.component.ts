import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: 'tabs/tab1',
      icon: 'leaf'
    },
    {
      title: 'Deciduous',
      url: 'tabs/tab2',
      icon: 'rose'
    },
    {
      title: 'Evegreen',
      url: 'tabs/tab3',
      icon: 'flower'
    },
    {
      title: 'Fertilizer and Treatment',
      url: '',
      icon: 'water'
    },
    {
      title: 'Tools',
      url: 'tools',
      icon: 'construct'
    },
    {
      title: 'Sign Out',
      url: '',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }
}
