import { Component } from '@angular/core';

import { MenuController, ModalController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './_services/api.service';
import { UtilService } from './_services/util.service';
import { environment } from 'src/environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { HelperService } from './_services/helper.service';
import { SplashScreenPage } from './splash-screen/splash-screen.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  profileData: any;
  path = environment.domain;
  farming: any = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private util: UtilService,
    private nav: NavController,
    private menu: MenuController,
    private oneSignal: OneSignal,
    private translate: TranslateService,
    private service: ApiService,
    private helperService: HelperService,
    private modalCtrl: ModalController
  ) {
    const lng = localStorage.getItem('language');
    if (!lng || lng === null) {
      localStorage.setItem('language', 'ar');
      this.helperService.setDir('rtl');
    } else if (lng == 'en') {
      this.helperService.setDir('ltr');
    } else if (lng == 'ar') {
      this.helperService.setDir('rtl');
    }
    this.translate.use(localStorage.getItem('language'));
    this.initializeApp();
  }

  initializeApp() {
    //this.translate.setDefaultLang('en');
    let notifications = [];
    this.platform.ready().then(() => {
      console.log('appid', environment.onesignal.appId);
      console.log('googlenumnner', environment.onesignal.googleProjectNumber);
      setTimeout(async () => {
        await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
        this.oneSignal.getIds().then((data) => {
          console.log('iddddd', data);
          localStorage.setItem('fcm', data.userId);
        });
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
        this.oneSignal.handleNotificationReceived().subscribe((res: any) => {
          // do something when notification is received
          console.log('handleNotificationReceived', res);
          if (!res.payload.additionalData) {
            if (localStorage.getItem('notifications')) {
              notifications = JSON.parse(localStorage.getItem('notifications'));
            } else {
              notifications = [];
            }
            res['payload']['date'] = new Date();
            notifications.push(res['payload']);
            localStorage.setItem('notifications', JSON.stringify(notifications));
            localStorage.setItem('generalNotifications', JSON.stringify(res.payload));
            this.util.publishNotiCount(notifications.length);
            this.util.publishNoti(notifications);
          } else {
            if (localStorage.getItem('notifications')) {
              notifications = JSON.parse(localStorage.getItem('notifications'));
              res['payload']['date'] = new Date();
              // if (res.payload?.additionalData.type != 'chat') {
              notifications.push(res['payload']);
              //}
              localStorage.setItem('notifications', JSON.stringify(notifications));
              this.util.publishNotiCount(notifications.length);
              this.util.publishNoti(notifications);
            } else {
              res.paylaod
              res['payload']['date'] = new Date();
              //if (res.payload?.additionalData.type != 'chat') {
              notifications.push(res['payload']);
              //}
              localStorage.setItem('notifications', JSON.stringify(notifications));
            }
          }

        });

        this.oneSignal.handleNotificationOpened().subscribe((res: any) => {
          console.log('handleNotificationOpened', res);
          let data = res.notification.payload?.additionalData;
          switch (data.type) {
            case 'topic':
              this.router.navigate(['/tabs/home']);
              setTimeout(() => {
                this.router.navigate(['/topic-details'], { queryParams: { id: data['id'] } });
              }, 300);
              break;

            case 'event':
              this.router.navigate(['/tabs/home']);
              setTimeout(() => {
                this.router.navigate(['/event-details'], { queryParams: { id: data['id'] } });
              }, 300);
              break;

            case 'chat':
              this.router.navigate(['/tabs/chat']);
              break;

            default:
              break;
          }
          // do something when a notification is opened23       
        });

        await this.oneSignal.endInit();
      }, 1000);

      this.platform.backButton.subscribe(async () => {
        if (this.router.url.includes('/tabs/') || this.router.url.includes('/adafsa-login')) {
          navigator['app'].exitApp();
        }
      });
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      this.openSplash();
      var user = localStorage.getItem('token');
      if (user) {
        this.getProfile();
      } else {
        this.getTopicCategories();
        this.router.navigate(['/adafsa-login']);
        //this.router.navigate(['/member-login']);
      }
      // this.router.navigate(['/login-info']);
    });
  }
  async openSplash() {
    //this.router.navigate(['add-new-address']);
    const modal = await this.modalCtrl.create({
      component: SplashScreenPage,
      cssClass: 'splash-modal'
    });
    return await modal.present();
  }

  getProfile() {
    this.service.getProfile().subscribe(_res => {
      this.getTopicCategories();
      //localStorage.removeItem('currentUser');
      this.profileData = _res;
      if (!_res.selectedCategories) {
        this.router.navigate(['/filter-subject']);
      } else {
        this.router.navigate(['/tabs/home']);
      }
      //localStorage.setItem('currentUser', JSON.stringify(_res));
    })
  }

  filterChange(_ev) {
    this.util.publishFilter(_ev.detail.value);
  }

  getTopicCategories() {
    this.service.getTopicsCategory().subscribe(_res => {
      this.farming = _res;
    })
  }

  goToFav() {
    this.menu.toggle();
    this.router.navigate(['/favorite-events']);
  }
}