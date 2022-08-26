import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialPageRoutingModule } from './material-routing.module';
import { MaterialPage } from './material.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialPageRoutingModule,
    MatNativeDateModule,
    MatTableModule
  ],
  declarations: [MaterialPage]
})
export class MaterialPageModule {}
