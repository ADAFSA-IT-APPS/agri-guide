import { Component, DoCheck, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ApiService } from '../_services/api.service';
import { UtilService } from '../_services/util.service';
import { environment } from 'src/environments/environment';
import { CategoryModalComponent } from '../common-component/category-modal/category-modal.component';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { HelperService } from '../_services/helper.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit, DoCheck {
  date: Date = new Date();
  dummy = Array(4);
  profileData: any;
  eventList: any;
  farming: any = [];
  path = environment.domain;
  scanSelectedCat: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10
  };
  generalNotification: any;
  generalNotification$: Observable<any>;
  
  currentLang: any;
  guest: boolean = false;

  constructor(private menuCtrl: MenuController,
    private service: ApiService,
    private util: UtilService,
    private oneSignal: OneSignal,
    private helperService: HelperService,
    private modalCtrl: ModalController,
    private ngZone: NgZone,
    private router: Router) {
   
    this.currentLang = this.helperService.getLang();
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    } else {
      this.util.observProfile().subscribe(data => {
        this.getProfile();
      });
    }
  }

  async ngOnInit() {
    this.generalNotification$ = this.util.observNoti();
    this.util.observNoti().subscribe(_res => {
      console.log('observNotify', _res);
      this.ngZone.run(() => {
        this.generalNotification = JSON.parse(localStorage.getItem('generalNotifications'));
      })
      console.log('generalNotification', this.generalNotification);
    })
  }

  ionViewWillEnter() {
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
      this.getEvents();
    } else {
      this.farming = [];
      this.getProfile();
      this.getEvents();
      this.generalNotification = JSON.parse(localStorage.getItem('generalNotifications'));
    }
  }

  ngDoCheck() {
    //this.generalNotification = JSON.parse(localStorage.getItem('generalNotifications'));
  }

  removeNoti() {
    localStorage.removeItem('generalNotifications');
    this.generalNotification = undefined;
  }

  toggleMenu() {
    // this.menuCtrl.toggle();
    this.router.navigate(['/filter-subject']);
  }

  getProfile() {
    // this.helperService.show();
    this.service.getProfile().subscribe(_res => {
      // this.helperService.hide();
      console.log('appid', environment.onesignal.appId);
      console.log('googlenumnner', environment.onesignal.googleProjectNumber);
      this.oneSignal.getIds().then((data) => {
        console.log('iddddd', data);
        localStorage.setItem('fcm', data.userId);
      });
      localStorage.removeItem('currentUser');
      this.util.chatService();
      this.profileData = _res;
      this.farming = _res.categoryList;
      this.dummy = [];
      localStorage.setItem('currentUser', JSON.stringify(_res));
    })
  }

  scanImage(_id) {
    this.router.navigate(['/scan-image'], { queryParams: { cid: _id } })
  }

  async openModal(_type) {
    //this.router.navigate(['add-new-address']);
    const modal = await this.modalCtrl.create({
      component: CategoryModalComponent,
      cssClass: 'category-modal',
      componentProps: {type: _type}
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data && data.role == '1') {
          this.scanSelectedCat = data.data.cat;
          this.scanImage(this.scanSelectedCat.id);
        }else if (data.data && data.role == '2') {
          this.goToAnimalSymptoms();
        }
      })       
    return await modal.present();
  }

  getEvents() {
    this.eventList = [];
    this.service.getEvents().subscribe(_res => {
      this.eventList = _res;
    })
  }

  goToTopics(item) {
    var payload = { id: item.id, name: item.name,  name_ar: item.name_ar, icon: item.icon };
    localStorage.setItem('selectedTopic', JSON.stringify(payload))
    this.router.navigate(['/tabs/topic'], { queryParams: { id: item.id } });
  }

  goToEvent(id) {
    this.router.navigate(['/event-details'], { queryParams: { id } })
  }

  goToAnimalSymptoms(){
    this.router.navigate(['/animal-symptoms'])
  }

  onError(event) {
    event.srcElement.src = '/assets/no-image.svg';
  }
}