import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdafsaLoginPage } from './adafsa-login.page';

const routes: Routes = [
  {
    path: '',
    component: AdafsaLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdafsaLoginPageRoutingModule {}
