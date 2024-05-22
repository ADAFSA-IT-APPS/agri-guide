import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberLoginPage } from './member-login.page';

const routes: Routes = [
  {
    path: '',
    component: MemberLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberLoginPageRoutingModule {}
