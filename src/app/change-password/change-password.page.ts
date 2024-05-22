import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/_validators/validators.password';
import { ApiService } from '../_services/api.service';
import { HelperService } from '../_services/helper.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  changeForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private helperService: HelperService,
    private authService: AuthenticationService) {
    this.changeForm = formBuilder.group({
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,50}')
      ])],
      cpassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    })
  }

  ngOnInit() {

  }

  get f() { return this.changeForm.controls; }

  submit() {
    this.submitted = true;
    if (this.changeForm.invalid) {
      return;
    }
    this.helperService.show();
    var payload = {
      "password": window.btoa(this.changeForm.value.password)
    }
    this.service.changePassword(payload).subscribe(_res => {
      this.helperService.hide();
      if (_res.code == "MSG200") {
        this.helperService.showToast(this.helperService.translate('successfullyUpdated'), 'success', 'bottom');
        setTimeout(() => {
          this.authService.logout();
        }, 1000);
      }
      else {
        //this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom')
      }
    })
  }

}
