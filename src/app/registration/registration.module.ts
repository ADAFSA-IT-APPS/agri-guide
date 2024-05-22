import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { SharedModule } from '../shared/shared.module';
import { Device } from '@ionic-native/device/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { IonicSelectableModule } from 'ionic-selectable';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    IonicModule,
    BrMaskerModule,
    RegistrationPageRoutingModule
  ],
  providers:[Device, OneSignal, Camera, File],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
