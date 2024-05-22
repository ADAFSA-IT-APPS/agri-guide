import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdafsaMemberPageRoutingModule } from './adafsa-member-routing.module';

import { AdafsaMemberPage } from './adafsa-member.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdafsaMemberPageRoutingModule
  ],
  declarations: [AdafsaMemberPage]
})
export class AdafsaMemberPageModule {}
