import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberLoginPageRoutingModule } from './member-login-routing.module';

import { MemberLoginPage } from './member-login.page';
import { SharedModule } from '../shared/shared.module';
import { Device } from '@ionic-native/device/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    MemberLoginPageRoutingModule
  ],
  providers: [Device, OneSignal],
  declarations: [MemberLoginPage]
})
export class MemberLoginPageModule {}
