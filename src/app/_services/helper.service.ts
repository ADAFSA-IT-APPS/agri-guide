import { Inject, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from "rxjs";
import { map, debounceTime, take, switchMap } from "rxjs/operators";
import { ApiService } from './api.service';
import { DOCUMENT } from '@angular/common';

import CryptoJS from 'crypto-js';

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value === null || value.length === 0;
}

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  isLoading = false;
  fullDate: any;
  constructor(private toastCtrl: ToastController,
    private translateService: TranslateService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    @Inject(DOCUMENT) private doc,
    private service: ApiService) { }

  async showToast(msg, colors, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: colors,
      position: positon
    });
    toast.present();
  }

  translate(str) {
    const currentLang = this.translateService.currentLang;
    const returnValue = this.translateService.translations[currentLang][str];
    if (returnValue === undefined) {
      return this.translateService.translations.en_merch[str];
    } else {
      return returnValue;
    }
  }

  async show(msg?) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  setDir(dir: string) {
    this.doc.dir = dir;
  }

  getLang() {
    return localStorage.getItem('language');
  }

  async openModal(_modal, _css, _data) {
    //this.router.navigate(['add-new-address']);
    const modal = await this.modalCtrl.create({
      component: _modal,
      cssClass: _css,
      componentProps: { data: _data }
    });
    return await modal.present();
  }

  existingMobileValidator(initialEmail: string = ""): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (isEmptyInputValue(control.value)) {
        return of(null);
      } else if (control.value === initialEmail) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          debounceTime(500),
          take(1),
          switchMap(_ =>
            this.service
              .checkMobileNo(control.value)
              .pipe(
                map(user =>
                  user.code == 'FG200-CMN' ? { existingMobile: true } : null
                )
              )
          )
        );
      }
    };
  }

  chnageMobileValidator(initialEmail: string = ""): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (isEmptyInputValue(control.value)) {
        return of(null);
      } else if (control.value === initialEmail) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          debounceTime(500),
          take(1),
          switchMap(_ =>
            this.service
              .checkMobileNo(control.value)
              .pipe(
                map(user =>
                  user.code == 'FG200-CMN' ? null : { existingMobile: true }
                )
              )
          )
        );
      }
    };
  }

  async getWeather(url = '', data = {}) {

    var _self = this;
    let _url = url;
    try {
      const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      console.log('fetch response : ', response);
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject();
      }
    }
    catch (error) {
      console.error('fetch error : ', error);
    }
  }

  //var P2=getDateInUtc(new Date());  /***it will convert the serverDate to UTC**/
  //var P1=EncryptData(P2);           /** it will encrypt p2***/
  getDateInUtc(serverDate) {
    var now = new Date(serverDate);
    this.fullDate = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    this.fullDate = this.fullDate.toString().substr(0, this.fullDate.toString().length - 3);
    return this.fullDate;
  };

  EncryptData(dataToEncrypt) {
    // console.log(dataToEncrypt);
    var key = CryptoJS.enc.Utf8.parse('8080808080808080');
    var iv = CryptoJS.enc.Utf8.parse('8080808080808080');
    var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(dataToEncrypt), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    encryptedlogin = this.convertTob64(encryptedlogin);
    // console.log(encryptedlogin);
    return encryptedlogin;
  };

  convertTob64(s) {
    return btoa(unescape(encodeURIComponent(s)));
  }
}