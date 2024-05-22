import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TopicPageRoutingModule } from './topic-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TopicPage } from './topic.page';
import { SharedModule } from '../shared/shared.module';
import { CommonComponentPageModule } from '../common-component/common-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule, 
    CommonComponentPageModule,
    ExploreContainerComponentModule,
    TopicPageRoutingModule
  ],
  declarations: [TopicPage]
})
export class TopicPageModule {}
