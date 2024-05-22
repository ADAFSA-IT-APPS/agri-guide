import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvisoryListPage } from './advisory-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisoryListPageRoutingModule {}
