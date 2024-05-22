import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather/weather.component';
import { OtpComponent } from './otp/otp.component';
import { TopicFilterComponent } from '../common-component/topic-filter/topic-filter.component';
import { TopicImagesComponent } from '../common-component/topic-images/topic-images.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { BtnNotificationComponent } from './btn-notification/btn-notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { EventSearchComponent } from './event-search/event-search.component';
import { FarmImagesComponent } from './farm-images/farm-images.component';
import { CategoryTypesComponent } from './category-types/category-types.component';
import { SelectAdvisoryComponent } from './select-advisory/select-advisory.component';

const components = [
  WeatherComponent,
  OtpComponent,
  TopicFilterComponent,
  TopicImagesComponent,
  CategoryModalComponent,
  BtnNotificationComponent,
  NotificationsComponent,
  EventSearchComponent,
  FarmImagesComponent,
  CategoryTypesComponent,
  SelectAdvisoryComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    NgOtpInputModule,
    SharedModule
  ],
  declarations: [components],
  exports: [...components]
})
export class CommonComponentPageModule { }