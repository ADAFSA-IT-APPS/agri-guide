import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarMonthViewPage } from './calendar-month-view.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarMonthViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarMonthViewPageRoutingModule {}
