import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareDetailsPageRoutingModule } from './care-details-routing.module';

import { CareDetailsPage } from './care-details.page';
import { SharedModule } from '../shared/shared.module';
import { CommonComponentPageModule } from '../common-component/common-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommonComponentPageModule,
    CareDetailsPageRoutingModule
  ],
  declarations: [CareDetailsPage]
})
export class CareDetailsPageModule {}
