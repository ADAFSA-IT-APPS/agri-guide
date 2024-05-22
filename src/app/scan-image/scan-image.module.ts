import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanImagePageRoutingModule } from './scan-image-routing.module';

import { ScanImagePage } from './scan-image.page';
import { Camera } from '@ionic-native/camera/ngx';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ScanImagePageRoutingModule
  ],
  providers:[Camera],
  declarations: [ScanImagePage]
})
export class ScanImagePageModule {}
