import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OtpComponent } from '../common-component/otp/otp.component';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HelperService } from '../_services/helper.service';
import { Device } from '@ionic-native/device/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PasswordValidation } from '../_validators/validators.password';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

class Country {
  public ID: number;
  public NameEN: string;
  public NameAR: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  registerForm: FormGroup;
  submitted: boolean = false;
  public labelAttribute: string;
  marital: any[];
  applicationClass: any[];
  preflang: any[];
  public objects: any[];
  countries: Country[];
  country: Country;
  nationalities: Country[];
  nationality: Country;
  docImages: any = [];
  currentLang: any;
  startYear: string = moment(new Date()).format('yyyy-MM-DD');
  constructor(private formBuilder: FormBuilder,
    private service: ApiService,
    private camera: Camera,
    private helperService: HelperService,
    private oneSignal: OneSignal,
    private toastController: ToastController,
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private device: Device,
    private el: ElementRef,
    private translate: TranslateService,
    private router: Router) {
      var deviceVersion = this.device.version;
      console.log('before: ', deviceVersion);
      if(deviceVersion != null){
      if (deviceVersion.split('.').length > 2) {
        deviceVersion = deviceVersion.substr(0, deviceVersion.lastIndexOf('.')) + deviceVersion.substr((deviceVersion.lastIndexOf('.') + 1));
      }
    }
    this.currentLang = this.helperService.getLang();
    this.registerForm = formBuilder.group({
      FirstName: ['', Validators.required],
      FirstName_En: ['', Validators.required],
      SecondName: ['', Validators.required],
      SecondName_En: ['', Validators.required],
      LastName: ['', Validators.required],
      LastName_En: ['', Validators.required],
      IsActive: [false],
      BirthDate: ['', Validators.required],
      CityName: ['', Validators.required],
      CountryID: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      cemail: ['', Validators.required],
      ExpiryDate: ['', Validators.required],
      Gender: ['true', Validators.required],
      IdentificNO: ['', Validators.required],
      IdentificType: ['89', Validators.required],
      MaritalStatusID: ['01', Validators.required],
      Nationality: ['', Validators.required],
      PreferredLang: [this.currentLang == 'en' ? '36' : '35', Validators.required],
      PrefixName: ['2600', Validators.required],
      FirstMobileNO: ['', [Validators.required, Validators.pattern(/^([00])([0-9]{1,3})([0-9]){10}$/)]],
      Position: [''],
      Address: [''],
      DeviceType: ['Android'],
      SecondMobileNO: ['', [Validators.pattern(/^([00])([0-9]{1,3})([0-9]){10}$/)]],
      LoginName: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{7,50}')
      ])],
      cpassword: ['', Validators.required],
      agree: [false, Validators.required],
    }, {
      validator: [PasswordValidation.MatchPassword, PasswordValidation.MatchEmail]
    });

    this.marital = [
      { id: '01', name: this.helperService.translate('single') },
      { id: '02', name: this.helperService.translate('married') },
      { id: '04', name: this.helperService.translate('widow') },
      { id: '05', name: this.helperService.translate('divorced') }
    ];
    this.applicationClass = [
      { id: '89', name: this.helperService.translate('resident') },
      { id: '90', name: this.helperService.translate('citizen') },
      { id: '91', name: this.helperService.translate('GCC') },
      { id: '95', name: this.helperService.translate('visitor') }
    ];

    this.preflang = [
      { id: '36', name: this.helperService.translate('english') },
      { id: '35', name: this.helperService.translate('arabic') },
    ];

    this.oneSignal.getIds().then((data) => {
      console.log('iddddd', data);
      localStorage.setItem('fcm', data.userId);
    });
  }

  ngOnInit() {
    this.getNationalities();
    this.getCountries();
  }

  getCountries() {
    this.service.getCountries().subscribe(_res => {
      this.countries = _res.d.results
    });
  }

  identificChange($event) {
    debugger;
    this.registerForm.controls['IdentificNO'].setValue('');
  }


  getNationalities(): Country[] {
    this.service.getNationalities().subscribe(_res => {
      this.nationalities = _res.d.results;
    });
    return this.nationalities;
  }
  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('country:', event.value);
  }

  langChange() {
    if (this.registerForm.value.PreferredLang == '36') {
      this.translate.use('en');
      localStorage.setItem('language', 'en');
      this.helperService.setDir('ltr');
    } else {
      this.translate.use('ar');
      localStorage.setItem('language', 'ar');
      this.helperService.setDir('rtl');
    }
  }

  deleteImage(item, i) {
    (<HTMLInputElement>document.getElementById('file-input')).value = "";
    this.docImages.splice(i, 1);
  }

  upload(files: FileList) {
    let self = this;
    let file = files[0];
    let fileSize = files[0].size / 1024 / 1024;
    if (self.docImages.length < 4) {
      if (fileSize > 1) {
        this.helperService.showToast(this.helperService.translate('fileSize'), 'danger', 'bottom');
      }
      else {
        console.log(files[0].size / 1024 / 1024 + "MiB");
        console.log(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          console.log(reader.result);
          //me.image = reader.result;
          var img = reader.result.toString();
          if (img.indexOf('base64,') !== -1) {
            img = img.replace("data:image/jpeg;base64,", "");
          }
          var payload = {
            "FileBase64String": img
          }
          self.docImages.push(payload);
          console.log(self.docImages);
          (<HTMLInputElement>document.getElementById('file-input')).value = "";
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
    } else {
      this.helperService.showToast(this.helperService.translate('maxFiles'), 'danger', 'bottom');
    }

  }

  pickImage(sourceType) {
    var _self = this;
    const options: CameraOptions = {
      quality: 73,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      correctOrientation: true,
      targetWidth: 500,
      targetHeight: 500
    }
    this.camera.getPicture
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      var img = imageData;
      //this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      var payload = {
        "FileBase64String": img
      }
      _self.docImages.push(payload);
      console.log(_self.docImages);
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }


  get f() { return this.registerForm.controls; }

  submit() {
    debugger;
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.scrollToFirstInvalidControl();
      return;
    }

    if (this.docImages.length == 0) {
      this.helperService.showToast(this.helperService.translate('uploadAttachments'), 'danger', 'bottom');
      return;
    }

    this.helperService.show();
    this.registerForm.value.deviceIds = localStorage.getItem('fcm');
    this.registerForm.value.Password = window.btoa(this.registerForm.value.Password);
    var P2 = this.helperService.getDateInUtc(new Date());
    var P1 = this.helperService.EncryptData(P2);
    var deviceVersion = this.device.version;
    if (deviceVersion.split('.').length > 2) {
      deviceVersion = deviceVersion.substr(0, deviceVersion.lastIndexOf('.')) + deviceVersion.substr((deviceVersion.lastIndexOf('.') + 1));
    }
    var payload = {
      "p1": P1,
      "p2": P2,
      "requestObj": {
        "DeviceID": this.device.uuid,
        "ApplicationsForm": {
          "DeviceID": this.device.uuid,
          "VersionNo": parseFloat(deviceVersion),
          "Address": ""
        },
        "UserAccount": {
          "LoginName": this.registerForm.value.LoginName,
          "LoginPassword": this.registerForm.value.password,
          "IndividualInfo": {
            "FirstName": this.registerForm.value.FirstName,
            "FirstName_En": this.registerForm.value.FirstName_En,
            "SecondName": this.registerForm.value.SecondName,
            "SecondName_En": this.registerForm.value.SecondName_En,
            "LastName": this.registerForm.value.LastName,
            "LastName_En": this.registerForm.value.LastName_En,
            "IsActive": false,
            "BirthDate": "/Date(" + new Date(this.registerForm.value.BirthDate).valueOf() + "-0000)/",
            "CityName": this.registerForm.value.CityName,
            "CountryID": this.registerForm.value.CountryID.ID,
            "Email": this.registerForm.value.email,
            "ExpiryDate": "/Date(" + new Date(this.registerForm.value.ExpiryDate).valueOf() + "-0000)/",
            "Gender": this.registerForm.value.Gender,
            "IdentificNO": (this.registerForm.value.IdentificType == '89' || this.registerForm.value.IdentificType == '90') ? this.registerForm.value.IdentificNO.replaceAll('-', '') : this.registerForm.value.IdentificNO,
            "IdentificType": this.registerForm.value.IdentificType,
            "MaritalStatusID": this.registerForm.value.MaritalStatusID,
            "Nationality": this.registerForm.value.Nationality.ID,
            "PreferredLang": this.registerForm.value.PreferredLang,
            "PrefixName": this.registerForm.value.PrefixName,
            "FirstMobileNO": this.registerForm.value.FirstMobileNO,
            "Position": "",
            "Address": "",
            "DeviceType": this.device.platform,
            "SecondMobileNO": this.registerForm.value.SecondMobileNO
          }
        }
      },
      "AttachmentsObjs": this.docImages
    };

    console.log(payload);

    var _payload2 = {
      p1: P1,
      p2: P2
    }

    this.service.getServerTime(_payload2).subscribe(_res1 => {
      payload.p2 = this.helperService.getDateInUtc(_res1.result.GetServerDateTimeResult.serverDate);
      payload.p1 = this.helperService.EncryptData(payload.p2);
      this.service.adafsaRegister(payload).subscribe(_res => {
        this.helperService.hide();
        if (_res.statusCode == 200) {
          this.navCtrl.navigateRoot(['/adafsa-login']);
          setTimeout(() => {
            this.router.navigate(['/adafsa-login']);
          }, 200);
          this.helperService.showToast(_res.result.msg, 'success', 'bottom');
        } else {
          this.helperService.showToast(_res.result.msg, 'danger', 'bottom');
        }
      })
    }, error => {
      this.helperService.hide();
      this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
    })
  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      "form .ng-invalid"
    );
    this.content.scrollToPoint(0, firstInvalidControl.parentElement.offsetTop, 1000);
  }
}
