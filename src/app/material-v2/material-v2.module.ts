import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MaterialV2PageRoutingModule } from './material-v2-routing.module';
import { MaterialV2Page } from './material-v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialV2PageRoutingModule,
    MatNativeDateModule,
    MatTableModule,
    HttpClientModule,
  ],
  declarations: [MaterialV2Page]
})
export class MaterialV2PageModule {}
