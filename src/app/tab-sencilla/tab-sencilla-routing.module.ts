import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSencillaPage } from './tab-sencilla.page';

const routes: Routes = [
  {
    path: '',
    component: TabSencillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSencillaPageRoutingModule {}
