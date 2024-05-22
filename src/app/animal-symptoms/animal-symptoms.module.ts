import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalSymptomsPageRoutingModule } from './animal-symptoms-routing.module';

import { AnimalSymptomsPage } from './animal-symptoms.page';
import { SharedModule } from '../shared/shared.module';
import { CommonComponentPageModule } from '../common-component/common-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonComponentPageModule, 
    SharedModule,
    AnimalSymptomsPageRoutingModule
  ],
  declarations: [AnimalSymptomsPage]
})
export class AnimalSymptomsPageModule {}
