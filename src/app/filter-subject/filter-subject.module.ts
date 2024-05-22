import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterSubjectPageRoutingModule } from './filter-subject-routing.module';

import { FilterSubjectPage } from './filter-subject.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FilterSubjectPageRoutingModule
  ],
  declarations: [FilterSubjectPage]
})
export class FilterSubjectPageModule {}
