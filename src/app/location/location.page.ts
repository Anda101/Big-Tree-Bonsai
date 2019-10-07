import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss']
})
export class LocationPage implements OnInit {

  constructor(private geolocation: Geolocation, private googleMap: GoogleMapComponent) {}

  data = '';
  ngOnInit() {
    // this.geolocation
    //   .getCurrentPosition()
    //   .then(resp => {
    //     // resp.coords.latitude
    //     // resp.coords.longitude
    //     this.data =
    //       'Lat: ' +
    //       resp.coords.latitude +
    //       ' <br>' +
    //       'Lng: ' +
    //       resp.coords.longitude;
    //   })
    //   .catch(error => {
    //     console.log('Error getting location', error);
    //   });
  }

  // locate() {
  // }


}
