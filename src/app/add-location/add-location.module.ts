import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLocationPageRoutingModule } from './add-location-routing.module';

import { AddLocationPage } from './add-location.page';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SharedModule } from '../shared/shared.module';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    AddLocationPageRoutingModule
  ],
  providers:[AndroidPermissions, Camera, File],
  declarations: [AddLocationPage]
})
export class AddLocationPageModule {}
