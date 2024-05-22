import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OtpComponent } from '../common-component/otp/otp.component';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HelperService } from '../_services/helper.service';
import { Device } from '@ionic-native/device/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-guest-login',
  templateUrl: './guest-login.page.html',
  styleUrls: ['./guest-login.page.scss'],
})
export class GuestLoginPage implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private service: ApiService,
    private helperService: HelperService,
    private oneSignal: OneSignal,
    private toastController: ToastController,
    private device: Device) {
    this.registerForm = formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Mobile: ['', [Validators.required,
      Validators.pattern(/^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)],
        this.helperService.existingMobileValidator()],
      Password: ['', Validators.required]
    });
    this.oneSignal.getIds().then((data) => {
      console.log('iddddd', data);
      localStorage.setItem('fcm', data.userId);
    });
  }

  ngOnInit() {
  }

  get f() { return this.registerForm.controls; }

  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value.deviceIds = localStorage.getItem('fcm');
    this.registerForm.value.Password = window.btoa(this.registerForm.value.Password);
    var payload = {};
    this.service.generateOTP(this.registerForm.value.Mobile).subscribe(_res => {
      var _payload = { "refCode": _res.refCode, "OTP": _res.otp, user: this.registerForm.value };
      this.helperService.openModal(OtpComponent, '', _payload);
      this.showToast(_res.otp, 'success', 'bottom');
    })
  }

  async showToast(msg, colors, positon) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      color: colors,
      position: positon
    });
    toast.present();
  }
}