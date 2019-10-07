import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  
  @ViewChild('map') mapElement;
  map: any;
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    let coords = new google.maps.LatLng(25, 100);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
  }

}
