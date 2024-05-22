import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginInfoPageRoutingModule } from './login-info-routing.module';

import { LoginInfoPage } from './login-info.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LoginInfoPageRoutingModule
  ],
  declarations: [LoginInfoPage]
})
export class LoginInfoPageModule {}
