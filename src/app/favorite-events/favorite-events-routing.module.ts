import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteEventsPage } from './favorite-events.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteEventsPageRoutingModule {}
