import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalSymptomsDetailPageRoutingModule } from './animal-symptoms-detail-routing.module';

import { AnimalSymptomsDetailPage } from './animal-symptoms-detail.page';

import { SharedModule } from '../shared/shared.module';
import { CommonComponentPageModule } from '../common-component/common-component.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommonComponentPageModule,
    ExploreContainerComponentModule,
    AnimalSymptomsDetailPageRoutingModule
  ],
  declarations: [AnimalSymptomsDetailPage]
})
export class AnimalSymptomsDetailPageModule {}
