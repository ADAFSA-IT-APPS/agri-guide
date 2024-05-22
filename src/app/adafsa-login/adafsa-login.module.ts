import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdafsaLoginPageRoutingModule } from './adafsa-login-routing.module';
import { Device } from '@ionic-native/device/ngx';
import { AdafsaLoginPage } from './adafsa-login.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    AdafsaLoginPageRoutingModule
  ],
  providers:[Device],
  declarations: [AdafsaLoginPage]
})
export class AdafsaLoginPageModule {}
