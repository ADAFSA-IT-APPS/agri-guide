import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CommonComponentPageModule } from '../common-component/common-component.module';
import { SharedModule } from '../shared/shared.module';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommonComponentPageModule,
    HomePageRoutingModule
  ],
  providers:[OneSignal],
  declarations: [HomePage]
})
export class HomePageModule {}
