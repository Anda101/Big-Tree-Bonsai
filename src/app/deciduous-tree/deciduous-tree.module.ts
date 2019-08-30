import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeciduousTreePage } from './deciduous-tree.page';

const routes: Routes = [
  {
    path: '',
    component: DeciduousTreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeciduousTreePage]
})
export class DeciduousTreePageModule {}
