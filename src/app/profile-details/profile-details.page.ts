import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { HelperService } from '../_services/helper.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../_services/authentication.service';

class Country {
  public ID: number;
  public NameEN: string;
  public NameAR: string;
}

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})

export class ProfileDetailsPage implements OnInit {

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
  userInfo: any;
  profileTab: any = '1';
  guest: boolean = false;
  lang: any;
  profileData: any;

  constructor(private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router,
    private translateService: TranslateService,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private helperService: HelperService,
    private oneSignal: OneSignal,) {

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

    this.userInfo = JSON.parse(localStorage.getItem('adafsacurrentUser'));
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
      Email: ['', [Validators.required]],
      ExpiryDate: ['', Validators.required],
      Gender: ['true', Validators.required],
      IdentificNO: ['', Validators.required],
      IdentificType: ['', Validators.required],
      MaritalStatusID: ['01', Validators.required],
      Nationality: ['', Validators.required],
      PreferredLang: ['36', Validators.required],
      PrefixName: ['2600', Validators.required],
      FirstMobileNO: ['', [Validators.required, Validators.pattern(/^(?:00971)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)]],
      Position: [''],
      Address: [''],
      DeviceType: ['Android'],
      SecondMobileNO: ['', [Validators.pattern(/^(?:00971)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)]],
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
    this.getCountries();
  }

  logout() {
    this.authService.logout();
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
      // this.router.navigate(['/member-login']);
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
    this.updateProfile();
  }


  goLogin(){
    this.navCtrl.navigateRoot(['/adafsa-login'])
  }

  updateProfile() {
    var payload = {
      "Name": this.profileData.users.name,
      "profile": {
        "preferredLang": this.lang
      }
    }
    this.service.updateProfile(this.profileData.id, payload).subscribe(_res => {
      this.getProfile();
      location.reload();
      // this.helperService.showToast(this.helperService.translate('successfullyUpdated'), 'success', 'bottom');
    })
  }


  getCountries() {
    this.service.getCountries().subscribe(_res => {
      this.countries = _res.d.results;
      this.getNationalities();
    });
  }


  getNationalities(): Country[] {
    this.service.getNationalities().subscribe(_res => {
      this.nationalities = _res.d.results;
      this.registerForm.patchValue(this.userInfo.DoLoginResult.UserAccountDetails.IndividualInfo);
      // this.registerForm.disable();
    });
    return this.nationalities;
  }

}

