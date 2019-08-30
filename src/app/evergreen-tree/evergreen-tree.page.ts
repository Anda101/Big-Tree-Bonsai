import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-evergreen-tree',
  templateUrl: './evergreen-tree.page.html',
  styleUrls: ['./evergreen-tree.page.scss'],
})
export class EvergreenTreePage implements OnInit {

  extractedValue;

  constructor(public modalController: ModalController, public navParams: NavParams) {
    this.extractedValue = this.navParams.get('value');
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
