import { NgModule } from '@angular/core';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MapPageRoutingModule
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
