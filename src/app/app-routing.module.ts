import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'deciduous-tree', loadChildren: './deciduous-tree/deciduous-tree.module#DeciduousTreePageModule' },
  { path: 'evergreen-tree', loadChildren: './evergreen-tree/evergreen-tree.module#EvergreenTreePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
