import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HelperService } from '../_services/helper.service';
import { ModalController, NavController } from '@ionic/angular';
import { OtpComponent } from '../common-component/otp/otp.component';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  userDetails: any;
  success: boolean = false;

  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private service: ApiService,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private helperService: HelperService,
    private router: Router) {
  
    this.loginForm = formBuilder.group({
      IdentifcationNo: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }

  get f() { return this.loginForm.controls; }

  async openOtp(){
    const modal = await this.modalCtrl.create({
      component: OtpComponent,
      cssClass: '',
      componentProps: {data: ''}
    });
    return await modal.present();
  }

  submit() {
    //this.helperService.showToast('Working on SMS gateway integration', 'warning', 'bottom');
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
      UserName: ''
    };

    var _payload1 = {
      p1: P1,
      p2: P2,
      IdentifcationNo: this.loginForm.value.IdentifcationNo
    };
    var _payload2 = {
      p1: P1,
      p2: P2
    }
    this.service.getServerTime(_payload2).subscribe(_res1 => {
      if(_res1.statusCode == 200){
        _payload1.p2 = this.helperService.getDateInUtc(_res1.result.GetServerDateTimeResult.serverDate);
        _payload1.p1 = this.helperService.EncryptData(_payload.p2);
        console.log('_payload1', _payload1);
      this.service.getFarmerInfo(_payload1).subscribe(_res2=>{
        if(_res2.statusCode == 200){
          if(_res2.result.data.GetCustomerContactDetailsResult.CustomerContactDetails.length > 0){
            _payload.UserName = _res2.result.data.GetCustomerContactDetailsResult.CustomerContactDetails[0];
            this.service.adafsaForgotPassword(_payload).subscribe(_res=>{
              debugger;
              if(_res.statusCode == 200){
                this.success = true;
                this.helperService.hide();
                this.helperService.showToast(this.helperService.translate('passwordResetMsg'), 'success', 'bottom');
              }else{
                this.helperService.hide();
                this.helperService.showToast(_res.result.msg, 'danger', 'bottom');
              }
            })
            }else{
          this.helperService.hide();
          this.helperService.showToast(this.helperService.translate('invalid') + ' ' +this.helperService.translate('emirateID') + '/'+ this.helperService.translate('passportNumber'), 'danger', 'bottom');
        }
          }else{
            this.helperService.hide();
            this.helperService.showToast(_res2.result.msg, 'danger', 'bottom');
          }
      }, error=>{
        this.helperService.hide();
        this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
      })
    }else{
      this.helperService.hide();
      this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
    }
    })
  }
}
