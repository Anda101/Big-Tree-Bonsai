import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deciduous-tree',
  templateUrl: './deciduous-tree.page.html',
  styleUrls: ['./deciduous-tree.page.scss'],
})
export class DeciduousTreePage implements OnInit {

  extractedValue;
  waterClicked = false;
  positionClicked = false;
  fertilizerClicked = false;
  pruningClicked = false;
  wiringClicked = false;
  propogationClicked = false;
  repottingClicked = false;
  pestsClicked = false;


  constructor(public modalController: ModalController, public navParams: NavParams) {
    this.extractedValue = this.navParams.get('value');
  }

  ngOnInit() {
  }

  hideOnWaterClicked() {
    this.waterClicked = !this.waterClicked;
  }

  hideOnPositionClick() {
    this.positionClicked = !this.positionClicked;
  }

  hideOnFertilizerClicked() {
    this.fertilizerClicked = !this.fertilizerClicked;
  }

  hideOnPruningClicked() {
    this.pruningClicked = !this.pruningClicked;
  }

  hideOnWiringClicked() {
    this.wiringClicked = !this.wiringClicked;
  }

  hideOnPropogationClicked() {
    this.propogationClicked = !this.propogationClicked;
  }

  hideOnRepottingClicked() {
    this.repottingClicked = !this.repottingClicked;
  }

  hideOnPestsClicked() {
    this.pestsClicked = !this.pestsClicked;
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
