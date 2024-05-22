import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADAFSAMemberLoginPage } from './adafsa-member-login.page';

const routes: Routes = [
  {
    path: '',
    component: ADAFSAMemberLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADAFSAMemberLoginPageRoutingModule {}
