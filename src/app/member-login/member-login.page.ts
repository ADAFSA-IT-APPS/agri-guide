import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HelperService } from '../_services/helper.service';
import { Device } from '@ionic-native/device/ngx';
import { NavController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.page.html',
  styleUrls: ['./member-login.page.scss'],
})
export class MemberLoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  userDetails: any;

  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private service: ApiService,
    private nav: NavController,
    private helperService: HelperService,
    private router: Router,
    private oneSignal: OneSignal,
    private device: Device) {
      this.oneSignal.getIds().then((data) => {
        console.log('iddddd', data);
        localStorage.setItem('fcm', data.userId);
      });
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required,
        // Validators.pattern(/^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)
      ]
      ],
      //username: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  goToForgot(){
    this.router.navigate(['/forgot-password']);
  }

  get f() { return this.loginForm.controls; }

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.helperService.show();
   
    var _payload = {
      username: this.loginForm.value.username,
      password: window.btoa(this.loginForm.value.password),
      deviceIds: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
    };
    this.authService.login(_payload).subscribe(_res => {
      if (_res.message) {
        this.helperService.showToast(_res.message, 'danger', 'bottom');
        this.helperService.hide();
      } else {
        this.service.getProfile().subscribe(_res => {
          this.helperService.hide();
          localStorage.setItem('adafsacurrentUser', JSON.stringify(_res));
          this.userDetails = _res;
          if (!this.userDetails.selectedCategories) {
            this.router.navigate(['/filter-subject']);
          } else {
            this.nav.navigateRoot(['/tabs/home']);
            //this.router.navigate(['/tabs/home']);
          }
        })
      }

      //[routerLink]="[ '/filter-subject']"
    })
  }

  guestVisitor() {
    localStorage.setItem('guest', '1');
    localStorage.removeItem('notifications');
    this.router.navigate(['/tabs/home']);
  }
}