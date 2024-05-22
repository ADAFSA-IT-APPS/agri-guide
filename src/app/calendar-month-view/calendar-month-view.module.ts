import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarMonthViewPageRoutingModule } from './calendar-month-view-routing.module';

import { CalendarMonthViewPage } from './calendar-month-view.page';
import { AccordionComponent } from '../common-component/accordion/accordion.component';
import { CommonComponentPageModule } from '../common-component/common-component.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommonComponentPageModule,
    CalendarMonthViewPageRoutingModule
  ],
  declarations: [CalendarMonthViewPage, AccordionComponent]
})
export class CalendarMonthViewPageModule {}
