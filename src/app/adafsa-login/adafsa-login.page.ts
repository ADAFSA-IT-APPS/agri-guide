import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HelperService } from '../_services/helper.service';
import { Device } from '@ionic-native/device/ngx';
import { IonSlides, NavController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-adafsa-login',
  templateUrl: './adafsa-login.page.html',
  styleUrls: ['./adafsa-login.page.scss'],
})

export class AdafsaLoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  userDetails: any;
  slides: any;
  slideOpts: any;
  selectedLang: any = 'ar';
  slideInterval: any;
  @ViewChild('bgslides') ionSlides: IonSlides;

  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private service: ApiService,
    private nav: NavController,
    private helperService: HelperService,
    private translate: TranslateService,
    private router: Router,
    private oneSignal: OneSignal,
    private device: Device) {
    this.slideOpts = {
      on: {
        beforeInit() {
          const swiper = this;
          swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
          const overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true,
            autoplay: true
          };
          swiper.params = Object.assign(swiper.params, overwriteParams);
          swiper.params = Object.assign(swiper.originalParams, overwriteParams);
          this.setTranslate();
        },
        setTranslate() {
          const swiper = this;
          const { slides } = swiper;
          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = swiper.slides.eq(i);
            const offset$$1 = $slideEl[0].swiperSlideOffset;
            let tx = -offset$$1;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
              ty = tx;
              tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
              : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            $slideEl
              .css({
                opacity: slideOpacity,
              })
              .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
          }
        },
        setTransition(duration) {
          const swiper = this;
          const { slides, $wrapperEl } = swiper;
          slides.transition(duration);
          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            slides.transitionEnd(() => {
              if (eventTriggered) return;
              if (!swiper || swiper.destroyed) return;
              eventTriggered = true;
              swiper.animating = false;
              const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        },
      }
    }

    var currentInd = 0;
    this.slideInterval = setInterval(() => {
      if(currentInd >= 4){
        currentInd = 0;
      }
        this.ionSlides.slideTo(currentInd);
        currentInd++;
    }, 5000);

  
    this.slides = ['./assets/slides/slide1.jpg',
      './assets/slides/slide2.jpg',
      './assets/slides/slide3.jpg',
      './assets/slides/slide4.jpg',
      './assets/slides/slide5.jpg']
      
    this.oneSignal.getIds().then((data) => {
      console.log('iddddd', data);
      localStorage.setItem('fcm', data.userId);
    });
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    if (localStorage.getItem('language')) {
      this.selectedLang = localStorage.getItem('language');
    } else {
      this.selectedLang = this.translate.currentLang;
    }
  }

  changeLng() {
    
    if (this.selectedLang == 'en') {
      this.selectedLang = 'ar';
      this.translate.use(this.selectedLang);
      this.helperService.setDir('rtl');
      localStorage.setItem('language', this.selectedLang);
    } else {
      this.selectedLang = 'en';
      this.translate.use(this.selectedLang);
      this.helperService.setDir('ltr');
      localStorage.setItem('language', this.selectedLang);
    }
    location.reload();
  }


  goToRegister() {
    this.router.navigate(['/registration']);
  }

  guestVisitor() {
    localStorage.setItem('guest', '1');
    localStorage.removeItem('notifications');
    this.router.navigate(['/tabs/home']);
  }

  goToForgot() {
    this.router.navigate(['/forgot-password']);
  }

  get f() { return this.loginForm.controls; }

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.helperService.show();

    var P2 = this.helperService.getDateInUtc(new Date());
    var P1 = this.helperService.EncryptData(P2);
    var _payload = {
      p1: P1,
      p2: P2,
      UserName: this.helperService.EncryptData(this.loginForm.value.username),
      Password: this.helperService.EncryptData(this.loginForm.value.password),
      DeviceIds: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
    }

    var _payload2 = {
      p1: P1,
      p2: P2
    }
    this.service.getServerTime(_payload2).subscribe(_res1 => {
      console.log('serverDate', _res1.result.serverDate);
      _payload.p2 = this.helperService.getDateInUtc(_res1.result.GetServerDateTimeResult.serverDate);
      _payload.p1 = this.helperService.EncryptData(_payload.p2);
      this.authService.adafsalogin(_payload).subscribe(_res => {
        if (_res.statusCode != 200) {
          this.helperService.showToast(_res.result.msg, 'danger', 'bottom');
          this.helperService.hide();
        } else {
          localStorage.setItem('adafsacurrentUser', JSON.stringify(_res.result.data));
          this.service.getProfile().subscribe(_res1 => {
            this.helperService.hide();
            if (localStorage.getItem('currentUser')) {
              if (JSON.parse(localStorage.getItem('currentUser')).usersId != _res1.usersId) {
                localStorage.removeItem('notifications');
                localStorage.removeItem('generalNotifications');
              }
            }
            localStorage.setItem('currentUser', JSON.stringify(_res1));
            this.userDetails = _res1;
            if (!this.userDetails.selectedCategories) {
              this.nav.navigateRoot(['/filter-subject']);
            } else {
              this.nav.navigateRoot(['/tabs/home']);
            }
          });
        }
      }, error=>{
          this.helperService.hide();
          this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
      })
    })
  }
}