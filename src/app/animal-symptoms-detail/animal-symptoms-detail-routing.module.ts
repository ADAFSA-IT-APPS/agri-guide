import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalSymptomsDetailPage } from './animal-symptoms-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalSymptomsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalSymptomsDetailPageRoutingModule {}
