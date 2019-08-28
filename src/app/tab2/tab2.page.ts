import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  deciduous = [
    {
        title: 'Maple tree',
        description: '6',
        image: '../../assets/images/il_570xN.1729851711_e8dq.jpg'
    },
    {
        title: 'Cotoneaster',
        description: '7',
        image: '../../assets/images/s-l300.jpg'
    },
    {
        title: 'Chinese Elm',
        description: '8',
        image: '../../assets/images/800510-03-2.jpg'
    }
];
  constructor() {}

}
