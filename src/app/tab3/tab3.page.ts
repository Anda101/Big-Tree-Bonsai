import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeciduousTreePage } from '../deciduous-tree/deciduous-tree.page';
import { EvergreenTreePage } from '../evergreen-tree/evergreen-tree.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items: any = [];
  filterItems: any = [];
  searchTerm: string;

  constructor(public modalController: ModalController, private http: HttpClient) {
    this.RetrieveData();
  }

  RetrieveData() {
    const url = 'http://127.0.0.1:3000/evergreen';
    this.http.get(url).
      subscribe(result => {
        this.items = result;
        this.filterItems = this.items;
      });
  }

  async openTree(val) {
    const modal = await this.modalController.create({
      component: DeciduousTreePage,
      componentProps: { value: val }
    });
    return await modal.present();
  }

  initializeItems() {
    this.filterItems = [...this.items];
  }

  filteredItems(ev: any) {

    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.filterItems = this.items.filter(tree => tree.title.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
    }
  }

}
