import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanImagePage } from './scan-image.page';

const routes: Routes = [
  {
    path: '',
    component: ScanImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanImagePageRoutingModule {}
