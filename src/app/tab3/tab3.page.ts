import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeciduousTreePage } from '../deciduous-tree/deciduous-tree.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  evergreen = [
    {
      title: 'Juniper',
      description: '6',
      image: '../../assets/images/Green_Mound_Juniper_Bonsai_Tree_GMJ08__87832.1429075503.jpg'
    },
    {
      title: 'Ficus',
      description: '7',
      image: '../../assets/images/0019479_bonsai-ficus-retusa-60_540.jpeg'
    },
    {
      title: 'Pine tree',
      description: '8',
      image: '../../assets/images/japanese-black-pine-bonsai-tree.jpg'
    }
  ];

  constructor(public modalController: ModalController) { }

  async openTree(val) {
    const modal = await this.modalController.create({
      component: DeciduousTreePage,
      componentProps: { value: val }
    });
    return await modal.present();
  }

}
