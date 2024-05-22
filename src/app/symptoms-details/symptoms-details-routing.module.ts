import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsDetailsPage } from './symptoms-details.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsDetailsPageRoutingModule {}
