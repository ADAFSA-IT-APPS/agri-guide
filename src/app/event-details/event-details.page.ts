import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { TopicImagesComponent } from '../common-component/topic-images/topic-images.component';
import { ApiService } from '../_services/api.service';
import { environment } from 'src/environments/environment';
import { HelperService } from '../_services/helper.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { TopicFilterComponent } from '../common-component/topic-filter/topic-filter.component';
import { UtilService } from '../_services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})

export class EventDetailsPage implements OnInit {
  details: any = {};
  pestDetails: any;
  path = environment.domain;
  favList: any;
  favFound: boolean;
  selectedId: any;
  confirm: any;
  guest: boolean = false;
  isBefore: boolean = false;
  currentLang: any;
  loaded: boolean = false;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private service: ApiService,
    private helperService: HelperService,
    private translateService: TranslateService,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private util: UtilService,
    private iab: InAppBrowser) { 
      this.currentLang = this.helperService.getLang();
       this.route.queryParams.subscribe(_res => {
        this.selectedId = _res.id;
        this.getEventById(this.selectedId);
      })
      if(localStorage.getItem('guest') == '1'){
        this.guest = true;
      }else{
        this.guest = false;
      }
    }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteEventsList;
      if (this.favList) {
        var fav = this.favList.filter(item => item.id == this.selectedId);
        this.favFound = fav.length > 0 ? true : false;
      }
      else {
        this.favFound = false;
      }
    }
  }

  ionViewDidEnter() {
  
  }

  async openImages(_images) {
    const modal = await this.modalCtrl.create({
      component: TopicImagesComponent,
      showBackdrop: false,
      componentProps: { details: _images }
    });
    return await modal.present();
  }

  getEventById(_id) {
    this.loaded = false;
    this.helperService.show();
    this.service.getEventsByID(_id).subscribe(_res => {
      this.loaded = true;
      this.details = _res;
      this.helperService.hide();
      const tempDT = this.details.endDate.replaceAll('/','-') +' '+ this.details.endTime;
      this.isBefore = moment(tempDT).isBefore(new Date());
    }, error=>{
      this.helperService.hide();
      this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
    })
  }

  addFavorite(_id) {
    if(this.guest){
      this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
    }else{
    this.service.addfavoriteEvent(_id).subscribe(_res => {
      this.helperService.show();
      this.util.publishProfile('updated');
      this.getProfile('1');
    })
  }
  }

  getProfile(_type) {
    this.service.getProfile().subscribe(_res => {
      localStorage.setItem('currentUser', JSON.stringify(_res));
      this.favList = _res.favouriteEventsList;
      if (this.favList) {
        var fav = this.favList.filter(item => item.id == this.selectedId);
        this.favFound = fav.length > 0 ? true : false;
      }
      else {
        this.favFound = false;
      }
      this.helperService.hide();
      if (_type == '1') {
        this.helperService.showToast(this.helperService.translate('successfullyAdded'), 'success', 'bottom');
      } else {
        this.helperService.showToast(this.helperService.translate('successfullyRemoved'), 'success', 'bottom')
      }
    })
  }

  async presentAlertConfirm() {
    var _self = this;
    var confirm = this.helperService.translate('confirm');
    
    const alert = await this.alertController.create({
      header: confirm,
      message: _self.helperService.translate("removeFavorite"),
      buttons: [
        {
          text: _self.helperService.translate('cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: _self.helperService.translate('okay'),
          handler: () => {
            console.log('Confirm Okay');
            _self.removeFavorite();
          }
        }
      ]
    });
    await alert.present();
  }

  removeFavorite() {
    this.service.deleteFavoriteEvent(this.selectedId).subscribe(_res => {
      this.helperService.show();
      this.getProfile('2');
    })
  }

  openBrowser(_url) {
    // this.iab.create(_url);
    window.open(_url, '_self');
  }

}
