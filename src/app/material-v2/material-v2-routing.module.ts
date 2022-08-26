import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialV2Page } from './material-v2.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialV2PageRoutingModule {}
