import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreatmentDetailsPageRoutingModule } from './treatment-details-routing.module';

import { TreatmentDetailsPage } from './treatment-details.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    TreatmentDetailsPageRoutingModule
  ],
  declarations: [TreatmentDetailsPage]
})
export class TreatmentDetailsPageModule {}
