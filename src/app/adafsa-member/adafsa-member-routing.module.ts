import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdafsaMemberPage } from './adafsa-member.page';

const routes: Routes = [
  {
    path: '',
    component: AdafsaMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdafsaMemberPageRoutingModule {}
