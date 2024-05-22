import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalSymptomsPage } from './animal-symptoms.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalSymptomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalSymptomsPageRoutingModule {}
