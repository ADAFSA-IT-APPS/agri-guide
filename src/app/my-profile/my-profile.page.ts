import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/environments/environment';
import { HelperService } from '../_services/helper.service';
import { UtilService } from '../_services/util.service';
import { FarmImagesComponent } from '../common-component/farm-images/farm-images.component';
import { ModalController, NavController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  profileTab: any = '1';
  profileData: any;
  lang: any;
  path = environment.domain;
  selectedFarm: any = {gallery:[]};
  guest: boolean = false;
  farmSelected: boolean = false;
  app_version: any;
  app_code: string | number;

  constructor(private service: ApiService,
    private router: Router,
    private authService: AuthenticationService,
    private helperService: HelperService,
    private translateService: TranslateService,
    private modalCtrl: ModalController,
    private appVersion: AppVersion,
    private navCtrl: NavController,
    private util: UtilService) {
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    } else {
      if (!localStorage.getItem('currentUser')) {
        this.getProfile();
      } else {
        this.profileData = JSON.parse(localStorage.getItem('currentUser'));
      }
      this.lang = this.profileData.preferredLang;
    }
  }

  ngOnInit() {
    this.appVersion.getVersionNumber().then( (versionNumber) => {
      this.app_version = versionNumber;
    },
    (error) => {
      console.log(error);
    });

    this.appVersion.getVersionCode().then(
      (getVersionCode) => {
        this.app_code = getVersionCode;
      },
      (error) => {
        console.log(error);
      });
  }
  
  ionViewWillEnter(){
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    } else {
      this.util.observProfile().subscribe(data => {
        this.getProfile();
      });
    }
  }

  ngAfterContentInit() {
    this.profileData = JSON.parse(localStorage.getItem('currentUser'));
    this.lang = localStorage.getItem('language');
    console.log('lang', this.lang);
    console.log('currentLang', this.translateService.currentLang);
  }

  goLogin(){
    this.navCtrl.navigateRoot(['/adafsa-login']);
  }

  showImage(_farm) {
    this.selectedFarm = _farm;
    this.farmSelected = true;
    console.log(_farm);
  }

  getProfile() {
    this.helperService.show();
    this.service.getProfile().subscribe(_res => {
      this.helperService.hide();
      localStorage.removeItem('currentUser');
      this.profileData = _res;
      localStorage.setItem('currentUser', JSON.stringify(_res));
    }, error => {
      localStorage.removeItem('token');
      this.router.navigate(['/adafsa-login']);
    })
  }

  addFarm() {
    this.router.navigate(['/add-location'], { queryParams: {type:'new', id: this.profileData.id } });
  }

  editFarm(_farm){
    this.farmSelected = false;
    this.selectedFarm = {gallery:[]};
    this.util.publishFarm(_farm);
    this.router.navigate(['/add-location'], { queryParams: { type:'edit', fid:_farm.id, id: this.profileData.id } });
  }

  deleteFarm(_item) {
    this.helperService.show();
    this.service.removeFarm(_item.id).subscribe(_res => {
      this.getProfile();
      this.helperService.hide();
      if (_item.id == this.selectedFarm.id) {
        this.selectedFarm = {gallery:[]}
      }
    })
  }

  changeLng() {
    localStorage.setItem('language', this.lang);
    console.log('language', this.lang);
    this.translateService.use(this.lang);
    if (this.lang == 'en') {
      this.helperService.setDir('ltr');
    } else {
      this.helperService.setDir('rtl');
    }
    this.helperService.show();
    location.reload();
    // this.updateProfile();
  }

  async openImages(_data) {
    
    const modal = await this.modalCtrl.create({
      component: FarmImagesComponent,
      showBackdrop: false,
      componentProps: { details: _data }
    });
    return await modal.present();
  }

  logout() {
    this.authService.logout();
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  // updateProfile() {
  //   var payload = {
  //     "Name": this.profileData.users.name,
  //     "profile": {
  //       "preferredLang": this.lang
  //     }
  //   }
  //   this.service.updateProfile(this.profileData.id, payload).subscribe(_res => {
  //     this.getProfile();
  //     location.reload();
  //   })
  // }

}