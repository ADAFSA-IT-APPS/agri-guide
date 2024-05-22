import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-info',
    loadChildren: () => import('./login-info/login-info.module').then( m => m.LoginInfoPageModule)
  },
  {
    path: 'adafsa-member',
    loadChildren: () => import('./adafsa-member/adafsa-member.module').then( m => m.AdafsaMemberPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login-main',
    loadChildren: () => import('./login-main/login-main.module').then( m => m.LoginMainPageModule)
  },
  {
    path: 'member-login',
    loadChildren: () => import('./member-login/member-login.module').then( m => m.MemberLoginPageModule)
  },
  {
    path: 'filter-subject',
    loadChildren: () => import('./filter-subject/filter-subject.module').then( m => m.FilterSubjectPageModule)
  },
  {
    path: 'guest-login',
    loadChildren: () => import('./guest-login/guest-login.module').then( m => m.GuestLoginPageModule)
  },
  {
    path: 'adafsa-member-login',
    loadChildren: () => import('./adafsa-member-login/adafsa-member-login.module').then( m => m.ADAFSAMemberLoginPageModule)
  },
  {
    path: 'topic-details',
    loadChildren: () => import('./topic-details/topic-details.module').then( m => m.TopicDetailsPageModule)
  },
  {
    path: 'calendar-month-view',
    loadChildren: () => import('./calendar-month-view/calendar-month-view.module').then( m => m.CalendarMonthViewPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  },
  {
    path: 'scan-image',
    loadChildren: () => import('./scan-image/scan-image.module').then( m => m.ScanImagePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'add-location',
    loadChildren: () => import('./add-location/add-location.module').then( m => m.AddLocationPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'care-details',
    loadChildren: () => import('./care-details/care-details.module').then( m => m.CareDetailsPageModule)
  },
  {
    path: 'treatment-details',
    loadChildren: () => import('./treatment-details/treatment-details.module').then( m => m.TreatmentDetailsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'favorite-events',
    loadChildren: () => import('./favorite-events/favorite-events.module').then( m => m.FavoriteEventsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'adafsa-login',
    loadChildren: () => import('./adafsa-login/adafsa-login.module').then( m => m.AdafsaLoginPageModule)
  },
  {
    path: 'profile-details',
    loadChildren: () => import('./profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'symptom-details',
    loadChildren: () => import('./symptoms-details/symptoms-details.module').then( m => m.SymptomsDetailsPageModule)
  },
  {
    path: 'animal-symptoms',
    loadChildren: () => import('./animal-symptoms/animal-symptoms.module').then( m => m.AnimalSymptomsPageModule)
  },
  {
    path: 'animal-symptoms-detail',
    loadChildren: () => import('./animal-symptoms-detail/animal-symptoms-detail.module').then( m => m.AnimalSymptomsDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
