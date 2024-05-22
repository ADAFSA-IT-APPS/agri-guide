import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMainPageRoutingModule } from './login-main-routing.module';

import { LoginMainPage } from './login-main.page';
import { SharedModule } from '../shared/shared.module';
import { Device } from '@ionic-native/device/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LoginMainPageRoutingModule
  ],
  providers:[Device],
  declarations: [LoginMainPage]
})
export class LoginMainPageModule {}
