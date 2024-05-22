import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareDetailsPage } from './care-details.page';

const routes: Routes = [
  {
    path: '',
    component: CareDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareDetailsPageRoutingModule {}
