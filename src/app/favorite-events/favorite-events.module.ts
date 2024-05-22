import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteEventsPageRoutingModule } from './favorite-events-routing.module';

import { FavoriteEventsPage } from './favorite-events.page';
import { SharedModule } from '../shared/shared.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ExploreContainerComponentModule,
    FavoriteEventsPageRoutingModule
  ],
  declarations: [FavoriteEventsPage]
})
export class FavoriteEventsPageModule {}
