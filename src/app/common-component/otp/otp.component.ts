import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { interval } from 'rxjs';
import { ApiService } from 'src/app/_services/api.service';
import { HelperService } from 'src/app/_services/helper.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  expiry: string;
  private unsubscribe;
  timeLeft: any;
  otpExpired: boolean = false;
  data: any;
  otp: any;


  constructor(
    private modalController: ModalController,
    private helperService: HelperService,
    private toastController: ToastController,
    private service: ApiService,
    private router: Router) {

  }

  ngOnInit() {
    this.startTimer();
    console.log('payload', this.data);
  }

  onOtpChange(_ev) {
    if (_ev.length == 6) {
      this.otp = _ev;
      //this.modalController.dismiss({code: _ev});
      this.verifyOtp();
    }
  }

  back() {
    this.modalController.dismiss();
  }

  startTimer() {
    var timer = 120;
    var minutes;
    var seconds;

    this.unsubscribe = interval(1000).subscribe(x => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.timeLeft = minutes + ":" + seconds;
      timer--;
      if (timer < 0) {
        this.timeLeft = 0;
        this.otpExpired = true;
        this.unsubscribe.unsubscribe();
      }
    })
  }

  verifyOtp() {
    var payload = {
      "refCode": this.data.refCode,
      "OTP": this.otp
    }
    this.helperService.show();
    this.service.verifyOTP(payload).subscribe(_res => {
      if(_res.code != 'FG400-VOTP'){
        this.register(this.data.user);
      }else{
        this.helperService.hide();
        this.showToast(_res.msg, 'danger', 'bottom');
      }
    })
  }

  resendOTP() {
    this.service.generateOTP(this.data.user.mobile).subscribe(_res => {
      this.showToast(_res.otp, 'success', 'bottom');
      this.timeLeft = 0;
      this.otpExpired = false;
      this.startTimer();
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

  register(_payload) {
    this.service.register(_payload).subscribe(_res => {
        this.modalController.dismiss();
        this.helperService.hide();
        this.router.navigate(['/member-login']);
        this.helperService.showToast(this.helperService.translate('successfullyRegistered'),'success', 'bottom')
    })
  }

}
