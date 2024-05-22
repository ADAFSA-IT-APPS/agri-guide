import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvisoryListPageRoutingModule } from './advisory-list-routing.module';

import { AdvisoryListPage } from './advisory-list.page';
import { SharedModule } from '../shared/shared.module';
import { SelectNewTopicComponent } from '../common-component/select-new-topic/select-new-topic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdvisoryListPageRoutingModule
  ],
  declarations: [AdvisoryListPage, SelectNewTopicComponent]
})
export class AdvisoryListPageModule {}
