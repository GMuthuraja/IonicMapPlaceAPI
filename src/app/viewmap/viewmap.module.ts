import { NgModule } from '@angular/core';
import { ViewmapPageRoutingModule } from './viewmap-routing.module';
import { ViewmapPage } from './viewmap.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ViewmapPageRoutingModule
  ],
  declarations: [ViewmapPage]
})
export class ViewmapPageModule {}
