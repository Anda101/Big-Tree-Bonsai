import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeciduousTreePage } from '../deciduous-tree/deciduous-tree.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // title: 'Cotoneaster',
  // description: '7',
  // image: '../../assets/images/s-l300.jpg',
  // position: '',
  // water: '',
  // fertilizer: '',
  // pruning: '',
  // wiring: '',
  // repotting: '',
  // propogation: '',
  // pests: ''

  deciduous = [
    {
      title: 'Maple tree',
      description: '6',
      image: '../../assets/images/il_570xN.1729851711_e8dq.jpg',
      position: '',
      water: '',
      fertilizer: '',
      pruning: '',
      wiring: '',
      repotting: '',
      propogation: '',
      pests: ''
    },
    {
      title: 'Cotoneaster',
      description: '7',
      image: '../../assets/images/s-l300.jpg',
      position: '',
      water: '',
      fertilizer: '',
      pruning: '',
      wiring: '',
      repotting: '',
      propogation: '',
      pests: ''
    },
    {
      title: 'Chinese Elm',
      description: 'The Chinese Elm is the most popular Elm for Bonsai purposes although other elms are also very suitable. The Elm is often confused with the Zelkova but if you compare their leaves the difference is clearly recognizable; the Zelkova has single-toothed leaves whereas the Chinese Elm has double-toothed leaves.',
      image: '../../assets/images/800510-03-2.jpg',
      // tslint:disable-next-line: max-line-length
      position: 'The Chinese elm grows well in full sun and also in partial shade. In mild climates it can stay outside during the winter. A Chinese Elm bought as an indoor Bonsai can be placed outside during the summer and in winter it is best to take it into a cold frost-free room. Chinese Elms can usually endure some frost but it seems that it differs depending on the region it was imported from. Trees from northern Chinese regions seem to be more frost-hardy that those from southern areas. Depending on the temperatures of their winter quarters Chinese Elms can either drop their leaves or keep them until spring when the new shoots emerge.',
      water: 'The Chinese Elm must be watered generously as soon as the soil gets dry. Drought should be avoided as well as permanent wetness.',
      fertilizer: 'During the growing season the Chinese Elm should be fed well. It doesnt require very special fertilizer. A combination of solid organic fertilizer and a well-balanced liquid chemical product is a good concept. When the elm is in a cold place in winter it should not be fed during dormancy.',
      pruning: 'Younger Chinese Elms should be repotted every two years, older and large specimens can be repotted in longer intervals. Spring is the best time for repotting. Root pruning should be done with precision and as the Chinese Elm tends to produce crooked and intertwined roots you should work on them very carefully in order to create a regular nebari as good as possible. The Chinese Elm has no special requirements concerning the soil, but it should be well-drained. A standard soil mixture can be used.',
      wiring: '',
      repotting: 'Younger Chinese Elms should be repotted every two years, older and large specimens can be repotted in longer intervals. Spring is the best time for repotting. Root pruning should be done with precision and as the Chinese Elm tends to produce crooked and intertwined roots you should work on them very carefully in order to create a regular nebari as good as possible. The Chinese Elm has no special requirements concerning the soil, but it should be well-drained. A standard soil mixture can be used.',
      propogation: 'Chinese Elm Bonsai trees can be propagated by cuttings without problems usually. Propagation by seeds is less recommendable.',
      pests: 'Often the Chinese Elm is infested by spider mites or scale when humidity is low. Appropriate pesticides should be used and frequent spraying with water might help additionally. Spraying with thinned lime-sulfur or systemic pesticides can make the Chinese Elm drop all its leaves, so avoid these products.',

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
