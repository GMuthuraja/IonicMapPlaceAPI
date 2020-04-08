import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmapPage } from './viewmap.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmapPageRoutingModule {}
