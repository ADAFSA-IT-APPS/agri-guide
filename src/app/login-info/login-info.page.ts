import { UtilService } from './../_services/util.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '../_services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.page.html',
  styleUrls: ['./login-info.page.scss'],
})
export class LoginInfoPage implements OnInit {
  lang: any = 'en';
  constructor(private translate: TranslateService,
    private utilService: UtilService,
    private router: Router,
    private helperService: HelperService) { }

  ngOnInit() {
    localStorage.removeItem('token');
    if (localStorage.getItem('language')) {
      this.lang = localStorage.getItem('language');
    } else {
      this.lang = this.translate.currentLang;
    }
  }

  changeLng(lng) {
    localStorage.setItem('language', lng);
    this.lang = lng;
    this.translate.use(lng);
    if (this.lang == 'en') {
      this.helperService.setDir('ltr');
    } else {
      this.helperService.setDir('rtl');
    }
  }

  goToRegister(){
    this.router.navigate(['/login-main']);
  }

  guestVisitor(){
    localStorage.setItem('guest', '1');
    localStorage.removeItem('notifications');
    this.router.navigate(['/tabs/home']);
  }
  

}
