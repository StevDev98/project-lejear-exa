import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSencillaPageRoutingModule } from './tab-sencilla-routing.module';

import { TabSencillaPage } from './tab-sencilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSencillaPageRoutingModule
  ],
  declarations: [TabSencillaPage]
})
export class TabSencillaPageModule {}
