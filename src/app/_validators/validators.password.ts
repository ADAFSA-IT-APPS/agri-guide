import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('cpassword').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('cpassword').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }

    static MatchEmail(AC: AbstractControl) {
        let email = AC.get('email').value; // to get value in input tag
        let cemail = AC.get('cemail').value; // to get value in input tag
        if (email != cemail) {
            AC.get('cemail').setErrors({ MatchEmail: true })
        } else {
            return null
        }
    }
}