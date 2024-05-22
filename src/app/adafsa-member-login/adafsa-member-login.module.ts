import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADAFSAMemberLoginPageRoutingModule } from './adafsa-member-login-routing.module';

import { ADAFSAMemberLoginPage } from './adafsa-member-login.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ADAFSAMemberLoginPageRoutingModule
  ],
  declarations: [ADAFSAMemberLoginPage]
})
export class ADAFSAMemberLoginPageModule {}
