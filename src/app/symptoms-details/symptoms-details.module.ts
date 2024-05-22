import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsDetailsPageRoutingModule } from './symptoms-details-routing.module';

import { SymptomsDetailsPage } from './symptoms-details.page';
import { SharedModule } from '../shared/shared.module';
import { CommonComponentPageModule } from '../common-component/common-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommonComponentPageModule,
    SymptomsDetailsPageRoutingModule
  ],
  declarations: [SymptomsDetailsPage]
})
export class SymptomsDetailsPageModule {}
