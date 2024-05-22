import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GuestLoginPageRoutingModule } from './guest-login-routing.module';
import { GuestLoginPage } from './guest-login.page';
import { SharedModule } from '../shared/shared.module';
import { Device } from '@ionic-native/device/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    GuestLoginPageRoutingModule
  ],
  providers:[Device, OneSignal],
  declarations: [GuestLoginPage]
})


export class GuestLoginPageModule {}
