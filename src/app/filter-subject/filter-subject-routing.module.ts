import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterSubjectPage } from './filter-subject.page';

const routes: Routes = [
  {
    path: '',
    component: FilterSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterSubjectPageRoutingModule {}
