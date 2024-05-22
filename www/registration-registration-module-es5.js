(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"registerAccount\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" #content>\n  <div class=\"main\">\n    <form [formGroup]=\"registerForm\" novalidate>\n      <div class=\"content\">\n\n        <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n          <ion-label>{{\"individualRegistration\" | translate}}</ion-label>\n        </ion-item-divider>\n\n        <ion-list class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\" mode=\"ios\">{{\"prefix\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-radio-group mode=\"md\" formControlName=\"PrefixName\" class=\"gender-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\" class=\"ion-no-padding\">\n                    <ion-label>{{\"mr\" | translate}}</ion-label>\n                    <ion-radio slot=\"start\" value=\"2600\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>{{\"mrs\" | translate}}</ion-label>\n                    <ion-radio slot=\"start\" value=\"2601\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.PrefixName.invalid\">\n          <span *ngIf=\"f.PrefixName.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- First Name Ar -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"firstNameAr\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input dir=\"rtl\" type=\"text\" id=\"FirstName\" formControlName=\"FirstName\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.FirstName.invalid\">\n          <span *ngIf=\"f.FirstName.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- First Name En -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"firstNameEn\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"text\" formControlName=\"FirstName_En\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.FirstName_En.invalid\">\n          <span *ngIf=\"f.FirstName_En.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Second Name Ar -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"secondNameAr\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input dir=\"rtl\" type=\"text\" formControlName=\"SecondName\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.SecondName.invalid\">\n          <span *ngIf=\"f.SecondName.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Second Name En -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"secondNameEn\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"text\" formControlName=\"SecondName_En\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\" color=\"danger\" *ngIf=\"submitted && f.SecondName_En.invalid\">\n          <span *ngIf=\"f.SecondName_En.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Last Name Ar -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"familyNameAr\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input dir=\"rtl\" type=\"text\" formControlName=\"LastName\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.LastName.invalid\">\n          <span *ngIf=\"f.LastName.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Last Name En -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"familyNameEn\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"text\" formControlName=\"LastName_En\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.LastName_En.invalid\">\n          <span *ngIf=\"f.LastName_En.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Gender -->\n        <ion-list class=\"ion-margin-top\">\n          <ion-label mode=\"ios\" position=\"stacked\" color=\"secondary\">{{\"gender\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-radio-group mode=\"md\" formControlName=\"Gender\" class=\"gender-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\" class=\"ion-no-padding\">\n                    <ion-label>Male</ion-label>\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Female</ion-label>\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.Gender.invalid\">\n          <span *ngIf=\"f.Gender.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Nationality -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"nationality\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ionic-selectable formControlName=\"Nationality\" [items]=\"nationalities\" itemValueField=\"ID\"\n            itemTextField=\"NameEN\" [canSearch]=\"true\" (onChange)=\"countryChange($event)\">\n          </ionic-selectable>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.Nationality.invalid\">\n          <span *ngIf=\"f.Nationality.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Marital Status -->\n        <ion-list class=\"ion-margin-top\">\n          <ion-label mode=\"ios\" position=\"stacked\" color=\"secondary\">{{\"maritalStatus\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-radio-group mode=\"md\" formControlName=\"MaritalStatusID\" class=\"gender-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let item of marital\">\n                  <ion-item lines=\"none\" class=\"ion-no-padding\">\n                    <ion-label>{{item.name}}</ion-label>\n                    <ion-radio slot=\"start\" [value]=\"item.id\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.MaritalStatusID.invalid\">\n          <span *ngIf=\"f.MaritalStatusID.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Date of Birth -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"dob\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-datetime formControlName=\"BirthDate\"></ion-datetime>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.BirthDate.invalid\">\n          <span *ngIf=\"f.BirthDate.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Identific Type -->\n        <ion-list class=\"ion-margin-top\">\n          <ion-label mode=\"ios\" position=\"stacked\" color=\"secondary\">{{\"applicationClass\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-radio-group mode=\"md\" formControlName=\"IdentificType\" (ionChange)=\"identificChange($event)\" value=\"89\" class=\"gender-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let item of applicationClass\">\n                  <ion-item lines=\"none\" class=\"ion-no-padding\">\n                    <ion-label>{{item.name}}</ion-label>\n                    <ion-radio slot=\"start\" [value]=\"item.id\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.IdentificType.invalid\">\n          <span *ngIf=\"f.IdentificType.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Identification Number -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label *ngIf=\"registerForm.value.IdentificType == '91' || registerForm.value.IdentificType == '95'\"\n            position=\"stacked\" color=\"secondary\">{{\"passportNumber\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-label *ngIf=\"registerForm.value.IdentificType == '89' || registerForm.value.IdentificType == '90'\"\n            position=\"stacked\" color=\"secondary\">{{\"emirateID\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"text\" *ngIf=\"registerForm.value.IdentificType == '91' || registerForm.value.IdentificType == '95'\" minlength=\"10\" formControlName=\"IdentificNO\"></ion-input>\n          <ion-input type=\"text\" *ngIf=\"registerForm.value.IdentificType == '89' || registerForm.value.IdentificType == '90'\" minlength=\"18\" [brmasker]=\"{mask:'000-0000-0000000-0', len:18, userCaracters: false}\" formControlName=\"IdentificNO\"></ion-input>\n        </ion-item>\n\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.IdentificNO.invalid\">\n          <span *ngIf=\"f.IdentificNO.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.IdentificNO.errors.minlength\">{{'invalid' | translate}}</span>\n        </ion-text>\n\n        <!-- Expiry Date -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"expiryDate\" | translate}}<ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-datetime formControlName=\"ExpiryDate\" min=\"{{startYear}}\" max=\"2050\"></ion-datetime>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.ExpiryDate.invalid\">\n          <span *ngIf=\"f.ExpiryDate.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Attachments -->\n        <ion-item class=\"ion-margin-top eid-attachment\" lines=\"none\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"emirateIdAttachment\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-button color=\"primary\" size=\"medium\" expand=\"block\" (click)=\"selectImage()\">{{\"upload\" | translate}}\n          </ion-button>\n        </ion-item>\n        <!-- efile.click() -->\n        <!-- <input  #efile type=\"file\" (change)=\"upload($event.target.files)\" id=\"file-input\" accept=\"image/jpeg\"> -->\n\n        <ion-text style=\"font-size: .7rem;\" color=\"danger\">\n          {{\"emiratesUploadMsg\" | translate }}\n        </ion-text>\n        <div class=\"attachmentList\">\n          <ion-grid>\n            <ion-row class=\"w-100\">\n              <ion-col size=\"6\" *ngFor=\"let item of docImages; let i = index\">\n                <div class=\"img-wrapper\">\n                  <ion-img src=\"{{'data:image/jpeg;base64,' + item.FileBase64String}}\"></ion-img>\n                  <div class=\"ion-text-center remove-image\">\n                  <ion-label name=\"close-circle\" color=\"danger\" (click)=\"deleteImage(item, i)\">{{'remove' | translate}} <ion-icon name=\"trash\"></ion-icon></ion-label>\n                </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n          <ion-label>{{\"contactInformation\" | translate}}</ion-label>\n        </ion-item-divider>\n\n        <!-- Email Address -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"emailAddress\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\" color=\"danger\" *ngIf=\"submitted && f.email.invalid\">\n          <span *ngIf=\"f.email.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Confirm Email Address -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"confirmEmailAddress\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"email\" formControlName=\"cemail\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.cemail.invalid\">\n          <span *ngIf=\"f.cemail.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.cemail.errors.MatchEmail\">{{'emailMismatch' | translate}}</span>\n        </ion-text>\n\n        <!-- First Mobile NO -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"mobileNo\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"FirstMobileNO\"></ion-input>\n        </ion-item>\n        <ion-text style=\"font-size: .7rem;\" color=\"danger\">{{'mobileFormart' | translate}}</ion-text><br>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.FirstMobileNO.invalid\">\n          <span *ngIf=\"f.FirstMobileNO.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.FirstMobileNO.errors?.pattern\">{{'invalidPhone' | translate}}</span>\n        </ion-text>\n\n        <!-- Second Mobile NO -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"phoneNo\" | translate}}</ion-label>\n          <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"SecondMobileNO\"></ion-input>\n        </ion-item>\n        <ion-text style=\"font-size: .7rem;\" color=\"danger\">{{'phoneFormart' | translate}}</ion-text><br>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.SecondMobileNO.invalid\">\n          <span *ngIf=\"f.SecondMobileNO.errors?.pattern\">{{'invalidPhone' | translate}}</span>\n        </ion-text>\n\n        <!-- Country -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"country\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ionic-selectable formControlName=\"CountryID\" [items]=\"countries\" itemValueField=\"ID\" itemTextField=\"NameEN\"\n            [canSearch]=\"true\" (onChange)=\"countryChange($event)\">\n          </ionic-selectable>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.CountryID.invalid\">\n          <span *ngIf=\"f.CountryID.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- City Name -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"city\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"text\" formControlName=\"CityName\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.CityName.invalid\">\n          <span *ngIf=\"f.CityName.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n          <ion-label>{{\"loginInformation\" | translate}}</ion-label>\n        </ion-item-divider>\n\n        <!-- Login Name -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"usernameEmail\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"text\" formControlName=\"LoginName\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.LoginName.invalid\">\n          <span *ngIf=\"f.LoginName.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Password -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"enterPassword\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.password.invalid\">\n          <span *ngIf=\"f.password.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n        <!-- Confirm Password -->\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"confirmPassword\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-input type=\"password\" formControlName=\"cpassword\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.cpassword.invalid\">\n          <span *ngIf=\"f.cpassword.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.cpassword.errors.MatchPassword\">{{'passwordMismatch' | translate}}</span>\n        </ion-text>\n\n        <!-- <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n          <ion-label>{{\"preferences\" | translate}}</ion-label>\n        </ion-item-divider> -->\n\n        <!-- Prefered Lang -->\n        <!-- <ion-list>\n          <ion-label mode=\"ios\" position=\"stacked\" color=\"secondary\">{{\"preferedLang\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-radio-group mode=\"md\" formControlName=\"PreferredLang\" class=\"gender-wrapper\" (ionChange)=\"langChange()\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let item of preflang\">\n                  <ion-item lines=\"none\" class=\"ion-no-padding\">\n                    <ion-label>{{item.name}}</ion-label>\n                    <ion-radio slot=\"start\" [value]=\"item.id\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n        </ion-list>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.PreferredLang.invalid\">\n          <span *ngIf=\"f.PreferredLang.errors.required\">{{'required' | translate}}</span>\n        </ion-text> -->\n\n        <!-- Policy -->\n        <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n          <ion-label>{{\"usePolicy\" | translate}}</ion-label>\n        </ion-item-divider>\n\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">{{\"iAgree\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n          <ion-checkbox slot=\"start\" formControlName=\"agree\"></ion-checkbox>\n        </ion-item>\n        <ion-text class=\"required\"  color=\"danger\" *ngIf=\"submitted && f.agree.invalid\">\n          <span *ngIf=\"f.agree.errors.required\">{{'required' | translate}}</span>\n        </ion-text>\n\n      </div>\n      <div class=\"footer\">\n        <div class=\"login\">\n          <ion-button color=\"primary\" (click)=\"submit()\">{{\"registerAccount\" | translate}}\n          </ion-button>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/registration/registration-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/registration/registration-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RegistrationPageRoutingModule */

    /***/
    function srcAppRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
        return RegistrationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration.page */
      "./src/app/registration/registration.page.ts");

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
      }];

      var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/registration/registration.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/registration/registration.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegistrationPageModule */

    /***/
    function srcAppRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
        return RegistrationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-routing.module */
      "./src/app/registration/registration-routing.module.ts");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration.page */
      "./src/app/registration/registration.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ionic-selectable */
      "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! br-mask */
      "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");

      var RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], br_mask__WEBPACK_IMPORTED_MODULE_13__["BrMaskerModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
        providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"]],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
      })], RegistrationPageModule);
      /***/
    },

    /***/
    "./src/app/registration/registration.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/registration/registration.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .content ion-item::part(native) {\n  padding: 0;\n}\nion-content .content ion-segment {\n  margin-top: 8px;\n  --background: transparent;\n  border: 2px solid #979797 !important;\n  --ion-background-color: #B8CC94 !important;\n  --box-shadow: none;\n  height: 44px !important;\n}\nion-content .content ion-segment ion-segment-button {\n  margin: 0 !important;\n  --border-radius: 0;\n  --indicator-box-shadow: 0;\n}\nion-content .content ion-segment ion-segment-button ion-label {\n  margin: 0 10px;\n}\nion-content .content ion-segment ion-segment-button ion-img::part(image) {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .content ion-segment ion-segment-button::part(indicator) {\n  margin-left: -2px;\n  margin-right: -2px;\n}\nion-content .content ion-segment ion-segment-button:before {\n  margin: 0 !important;\n  --border-width: 0 !important;\n}\nion-content .content ion-segment ion-segment-button div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nion-content .content ion-segment ion-segment-button div ion-icon {\n  font-size: 1.4rem;\n  margin-right: 8px;\n}\nion-content .content ion-radio-group ion-item {\n  border: 1px solid #f5f5f5;\n  --ion-safe-area-right: 0;\n  --background: #f5f5f5;\n  border-radius: 4px;\n}\nion-content .content ion-radio-group ion-item.item-radio-checked {\n  --background: var(--ion-color-primary);\n  --color-checked: #fff;\n  border: 1px solid var(--ion-color-primary);\n}\nion-content .content ion-radio-group ion-item.item-radio-checked ion-label {\n  color: #fff;\n  text-align: center;\n}\nion-content .content ion-radio-group ion-item ion-label {\n  text-align: center;\n}\nion-content .content ion-radio-group ion-item ion-radio {\n  width: 0px;\n  height: 0px;\n  margin: 0px;\n  border: 0px;\n  --color: transparent;\n  --color-checked: transparent;\n}\nion-content .content .eid-attachment {\n  --inner-padding-end: 0;\n}\nion-content .content .eid-attachment ion-button {\n  width: 100%;\n  margin-top: 8px;\n}\nion-content .content .required {\n  font-size: 0.7rem;\n}\nion-content .content .remove-image ion-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8px;\n}\nion-content .content .img-wrapper ion-img {\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .content .w-100 {\n  width: 100%;\n}\nion-content .content ion-item-divider {\n  padding: 10px 16px;\n  margin-bottom: 10px;\n}\nion-content .forgot {\n  padding: 16px;\n  font-size: 0.7rem;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  --border-radius: 0;\n  box-shadow: 0 2px 0px var(--ion-color-dark);\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-grid {\n  --ion-grid-column-padding: 2px;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBTVk7RUFDSSxVQUFBO0FBSGhCO0FBT1E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUxaO0FBT1k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxjQUFBO0FBTHBCO0FBU29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBUHhCO0FBV2dCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVlnQjtFQUNJLG9CQUFBO0VBQ0EsNEJBQUE7QUFWcEI7QUFhZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFYcEI7QUFhb0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBWHhCO0FBa0JZO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFoQmhCO0FBa0JnQjtFQUNJLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQWhCcEI7QUFrQm9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBaEJ4QjtBQW1CZ0I7RUFDSSxrQkFBQTtBQWpCcEI7QUFvQmdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFsQnBCO0FBb0NRO0VBQ0ksc0JBQUE7QUFsQ1o7QUFtQ1k7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWpDWjtBQXFDUTtFQUNJLGlCQUFBO0FBbkNaO0FBdUNZO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBckNaO0FBMENZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUF4Q2hCO0FBMkNRO0VBQ0ksV0FBQTtBQXpDWjtBQTJDUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUF6Q1o7QUE2Q0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUEzQ1I7QUE4Q0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBNUNSO0FBK0NZO0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUEvQ2hCO0FBbURRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWpEWjtBQW1EWTtFQUdJLGlDQUFBO0VBQ0EsaUJBQUE7QUFuRGhCO0FBOERBO0VBQ0ksOEJBQUE7QUEzREo7QUErREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTVESjtBQStEQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQTVESjtBQStEQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FBNURKO0FBZ0VBO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0FBN0RKO0FBZ0VBO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQTdESjtBQWdFQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUE3REo7QUFnRUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBN0RKO0FBZ0VBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUE3RE47RUFnRUU7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUE5RE47RUFpRUU7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUEvRE47RUFrRUU7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFoRU47QUFDRjtBQW1FQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBakVOO0VBb0VFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBbEVOO0VBcUVFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBbkVOO0VBc0VFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBcEVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2VnbWVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk3OTc5NyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0I4Q0M5NCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IDA7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICAgICAgJjo6cGFydChpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjo6cGFydChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xuICAgICAgICAgICAgICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIC8vIC0tbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpb24tcmFkaW8ge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICYucmFkaW8tY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5laWQtYXR0YWNobWVudHtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXF1aXJlZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucmVtb3ZlLWltYWdle1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC5pbWctd3JhcHBlcntcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudy0xMDAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0tZGl2aWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9yZ290IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjZDRjlGLCAjMmRmOGFiKTtcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDBweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlZ2lzdGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogMCAzcHggMTBweCBibGFjaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sYWJlbC1zdGFja2VkIHtcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDJweDtcbn1cblxuXG4jYXJyb3dBbmltIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcnJvd3Mge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYXJyb3cge1xuICAgIHdpZHRoOiAuOHJlbTtcbiAgICBoZWlnaHQ6IC44cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuXG4uYXJyb3dTbGlkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlIDRzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNsaWRlIDRzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmRlbGF5MSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5kZWxheTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xufVxuXG4uZGVsYXkzIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XG4gICAgfVxuXG4gICAgMjAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgICB9XG5cbiAgICA4MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcbiAgICB9XG5cbiAgICAyMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/registration/registration.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/registration/registration.page.ts ***!
      \***************************************************/

    /*! exports provided: RegistrationPage */

    /***/
    function srcAppRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
        return RegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _validators_validators_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_validators/validators.password */
      "./src/app/_validators/validators.password.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var Country = function Country() {
        _classCallCheck(this, Country);
      };

      var RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(formBuilder, service, camera, helperService, oneSignal, toastController, navCtrl, actionSheetController, device, el, translate, router) {
          _classCallCheck(this, RegistrationPage);

          this.formBuilder = formBuilder;
          this.service = service;
          this.camera = camera;
          this.helperService = helperService;
          this.oneSignal = oneSignal;
          this.toastController = toastController;
          this.navCtrl = navCtrl;
          this.actionSheetController = actionSheetController;
          this.device = device;
          this.el = el;
          this.translate = translate;
          this.router = router;
          this.submitted = false;
          this.docImages = [];
          this.startYear = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('yyyy-MM-DD');
          var deviceVersion = this.device.version;
          console.log('before: ', deviceVersion);

          if (deviceVersion != null) {
            if (deviceVersion.split('.').length > 2) {
              deviceVersion = deviceVersion.substr(0, deviceVersion.lastIndexOf('.')) + deviceVersion.substr(deviceVersion.lastIndexOf('.') + 1);
            }
          }

          this.currentLang = this.helperService.getLang();
          this.registerForm = formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FirstName_En: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SecondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SecondName_En: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LastName_En: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IsActive: [false],
            BirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CityName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CountryID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            cemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ExpiryDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Gender: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IdentificNO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IdentificType: ['89', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaritalStatusID: ['01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PreferredLang: [this.currentLang == 'en' ? '36' : '35', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PrefixName: ['2600', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FirstMobileNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([00])([0-9]{1,3})([0-9]){10}$/)]],
            Position: [''],
            Address: [''],
            DeviceType: ['Android'],
            SecondMobileNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([00])([0-9]{1,3})([0-9]){10}$/)]],
            LoginName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{7,50}')])],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: [_validators_validators_password__WEBPACK_IMPORTED_MODULE_8__["PasswordValidation"].MatchPassword, _validators_validators_password__WEBPACK_IMPORTED_MODULE_8__["PasswordValidation"].MatchEmail]
          });
          this.marital = [{
            id: '01',
            name: this.helperService.translate('single')
          }, {
            id: '02',
            name: this.helperService.translate('married')
          }, {
            id: '04',
            name: this.helperService.translate('widow')
          }, {
            id: '05',
            name: this.helperService.translate('divorced')
          }];
          this.applicationClass = [{
            id: '89',
            name: this.helperService.translate('resident')
          }, {
            id: '90',
            name: this.helperService.translate('citizen')
          }, {
            id: '91',
            name: this.helperService.translate('GCC')
          }, {
            id: '95',
            name: this.helperService.translate('visitor')
          }];
          this.preflang = [{
            id: '36',
            name: this.helperService.translate('english')
          }, {
            id: '35',
            name: this.helperService.translate('arabic')
          }];
          this.oneSignal.getIds().then(function (data) {
            console.log('iddddd', data);
            localStorage.setItem('fcm', data.userId);
          });
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getNationalities();
            this.getCountries();
          }
        }, {
          key: "getCountries",
          value: function getCountries() {
            var _this = this;

            this.service.getCountries().subscribe(function (_res) {
              _this.countries = _res.d.results;
            });
          }
        }, {
          key: "identificChange",
          value: function identificChange($event) {
            debugger;
            this.registerForm.controls['IdentificNO'].setValue('');
          }
        }, {
          key: "getNationalities",
          value: function getNationalities() {
            var _this2 = this;

            this.service.getNationalities().subscribe(function (_res) {
              _this2.nationalities = _res.d.results;
            });
            return this.nationalities;
          }
        }, {
          key: "countryChange",
          value: function countryChange(event) {
            console.log('country:', event.value);
          }
        }, {
          key: "langChange",
          value: function langChange() {
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
        }, {
          key: "deleteImage",
          value: function deleteImage(item, i) {
            document.getElementById('file-input').value = "";
            this.docImages.splice(i, 1);
          }
        }, {
          key: "upload",
          value: function upload(files) {
            var self = this;
            var file = files[0];
            var fileSize = files[0].size / 1024 / 1024;

            if (self.docImages.length < 4) {
              if (fileSize > 1) {
                this.helperService.showToast(this.helperService.translate('fileSize'), 'danger', 'bottom');
              } else {
                console.log(files[0].size / 1024 / 1024 + "MiB");
                console.log(file);
                var reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function () {
                  console.log(reader.result); //me.image = reader.result;

                  var img = reader.result.toString();

                  if (img.indexOf('base64,') !== -1) {
                    img = img.replace("data:image/jpeg;base64,", "");
                  }

                  var payload = {
                    "FileBase64String": img
                  };
                  self.docImages.push(payload);
                  console.log(self.docImages);
                  document.getElementById('file-input').value = "";
                };

                reader.onerror = function (error) {
                  console.log('Error: ', error);
                };
              }
            } else {
              this.helperService.showToast(this.helperService.translate('maxFiles'), 'danger', 'bottom');
            }
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            var _self = this;

            var options = {
              quality: 73,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true,
              targetWidth: 500,
              targetHeight: 500
            };
            this.camera.getPicture;
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              var img = imageData; //this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);

              var payload = {
                "FileBase64String": img
              };

              _self.docImages.push(payload);

              console.log(_self.docImages);
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: "Select Image source",
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            _this3.pickImage(_this3.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            _this3.pickImage(_this3.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

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
              deviceVersion = deviceVersion.substr(0, deviceVersion.lastIndexOf('.')) + deviceVersion.substr(deviceVersion.lastIndexOf('.') + 1);
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
                    "IdentificNO": this.registerForm.value.IdentificType == '89' || this.registerForm.value.IdentificType == '90' ? this.registerForm.value.IdentificNO.replaceAll('-', '') : this.registerForm.value.IdentificNO,
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
            };
            this.service.getServerTime(_payload2).subscribe(function (_res1) {
              payload.p2 = _this4.helperService.getDateInUtc(_res1.result.GetServerDateTimeResult.serverDate);
              payload.p1 = _this4.helperService.EncryptData(payload.p2);

              _this4.service.adafsaRegister(payload).subscribe(function (_res) {
                _this4.helperService.hide();

                if (_res.statusCode == 200) {
                  _this4.navCtrl.navigateRoot(['/adafsa-login']);

                  setTimeout(function () {
                    _this4.router.navigate(['/adafsa-login']);
                  }, 200);

                  _this4.helperService.showToast(_res.result.msg, 'success', 'bottom');
                } else {
                  _this4.helperService.showToast(_res.result.msg, 'danger', 'bottom');
                }
              });
            }, function (error) {
              _this4.helperService.hide();

              _this4.helperService.showToast(_this4.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
            });
          }
        }, {
          key: "scrollToFirstInvalidControl",
          value: function scrollToFirstInvalidControl() {
            var firstInvalidControl = this.el.nativeElement.querySelector("form .ng-invalid");
            this.content.scrollToPoint(0, firstInvalidControl.parentElement.offsetTop, 1000);
          }
        }]);

        return RegistrationPage;
      }();

      RegistrationPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      RegistrationPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            "static": false
          }]
        }]
      };
      RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registration.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registration.page.scss */
        "./src/app/registration/registration.page.scss"))["default"]]
      })], RegistrationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registration-registration-module-es5.js.map