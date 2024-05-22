(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-details-profile-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'profile' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!guest\">\n    <div class=\"main ion-padding\">\n      <form [formGroup]=\"registerForm\" novalidate>\n        <div class=\"content\">\n          <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n            <ion-label>{{\"individualRegistration\" | translate}}</ion-label>\n          </ion-item-divider>\n\n          <ion-list>\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"prefix\" | translate}}</ion-label>\n            <ion-radio-group mode=\"md\" formControlName=\"PrefixName\" class=\"gender-wrapper\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\"\n                    *ngIf=\"userInfo?.DoLoginResult.UserAccountDetails.IndividualInfo.PrefixName == 2600\">\n                    <ion-item lines=\"none\" class=\"item-radio-checked ion-no-padding\">\n                      <ion-label>{{\"mr\" | translate}}</ion-label>\n                      <!-- <ion-radio slot=\"start\" value=\"2600\"></ion-radio> -->\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\"\n                    *ngIf=\"userInfo?.DoLoginResult.UserAccountDetails.IndividualInfo.PrefixName == 2601\">\n                    <ion-item lines=\"none\" class=\"item-radio-checked ion-no-padding\">\n                      <ion-label>{{\"mrs\" | translate}}</ion-label>\n                      <!-- <ion-radio slot=\"start\" value=\"2601\"></ion-radio> -->\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n          </ion-list>\n\n          <!-- First Name Ar -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"firstNameAr\" | translate}}</ion-label>\n            <ion-input dir=\"rtl\" type=\"text\" formControlName=\"FirstName\" readonly></ion-input>\n          </ion-item>\n\n          <!-- First Name En -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"firstNameEn\" | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"FirstName_En\" readonly></ion-input>\n          </ion-item>\n\n\n          <!-- Second Name Ar -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"secondNameAr\" | translate}}</ion-label>\n            <ion-input dir=\"rtl\" type=\"text\" formControlName=\"SecondName\" readonly></ion-input>\n          </ion-item>\n\n          <!-- Second Name En -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"secondNameEn\" | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"SecondName_En\" readonly></ion-input>\n          </ion-item>\n\n          <!-- Last Name Ar -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"familyNameAr\" | translate}}</ion-label>\n            <ion-input dir=\"rtl\" type=\"text\" formControlName=\"LastName\" readonly></ion-input>\n          </ion-item>\n\n          <!-- Last Name En -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"familyNameEn\" | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"LastName_En\" readonly></ion-input>\n          </ion-item>\n\n          <!-- Gender -->\n          <ion-list>\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"gender\" | translate}}</ion-label>\n            <ion-radio-group mode=\"md\" formControlName=\"Gender\" class=\"gender-wrapper\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\"\n                    *ngIf=\"userInfo?.DoLoginResult.UserAccountDetails.IndividualInfo.Gender == true\">\n                    <ion-item lines=\"none\" class=\"item-radio-checked ion-no-padding\">\n                      <ion-label>Male</ion-label>\n                      <!-- <ion-radio slot=\"start\" value=\"true\"></ion-radio> -->\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\"\n                    *ngIf=\"userInfo?.DoLoginResult.UserAccountDetails.IndividualInfo.Gender == false\">\n                    <ion-item lines=\"none\" class=\"ion-no-padding item-radio-checked\">\n                      <ion-label>Female</ion-label>\n                      <!-- <ion-radio slot=\"start\" value=\"false\"></ion-radio> -->\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n          </ion-list>\n\n          <!-- Nationality -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"nationality\" | translate}}</ion-label>\n            <ng-container *ngFor=\"let item of nationalities\">\n              <ion-text *ngIf=\"item.ID == registerForm.value.Nationality\">{{item.NameEN}}</ion-text>\n            </ng-container>\n          </ion-item>\n\n\n          <!-- Marital Status -->\n          <ion-list>\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"maritalStatus\" | translate}}</ion-label>\n            <ion-radio-group mode=\"md\" formControlName=\"MaritalStatusID\" class=\"gender-wrapper\">\n              <ion-grid>\n                <ion-row>\n                  <ng-container *ngFor=\"let item of marital\">\n                    <ion-col size=\"6\" *ngIf=\"item.id == registerForm.value.MaritalStatusID\">\n                      <ion-item lines=\"none\" class=\"item-radio-checked ion-no-padding\">\n                        <ion-label>{{item.name}}</ion-label>\n                        <!-- <ion-radio slot=\"start\" [value]=\"item.id\"></ion-radio> -->\n                      </ion-item>\n                    </ion-col>\n                  </ng-container>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n          </ion-list>\n\n          <!-- Date of Birth -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"dob\" | translate}}</ion-label>\n            <ion-datetime formControlName=\"BirthDate\" readonly></ion-datetime>\n          </ion-item>\n\n          <!-- Identific Type -->\n          <ion-list>\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"applicationClass\" | translate}}</ion-label>\n            <ion-radio-group mode=\"md\" formControlName=\"IdentificType\" value=\"89\" class=\"gender-wrapper\">\n              <ion-grid>\n                <ion-row>\n                  <ng-container *ngFor=\"let item of applicationClass\">\n                    <ion-col size=\"6\" *ngIf=\"item.id == registerForm.value.IdentificType\">\n                      <ion-item lines=\"none\" class=\"item-radio-checked ion-no-padding\">\n                        <ion-label>{{item.name}}</ion-label>\n                        <ion-radio slot=\"start\" [value]=\"item.id\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ng-container>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n          </ion-list>\n\n\n          <!-- Identification Number -->\n          <ion-item class=\"ion-margin-top\">\n            <ion-label *ngIf=\"registerForm.value.IdentificType == '91' || registerForm.value.IdentificType == '95'\"\n              position=\"stacked\" color=\"secondary\">{{\"passportNumber\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n            <ion-label *ngIf=\"registerForm.value.IdentificType == '89' || registerForm.value.IdentificType == '90'\"\n              position=\"stacked\" color=\"secondary\">{{\"emirateID\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label>\n            <ion-input type=\"text\" *ngIf=\"registerForm.value.IdentificType == '91' || registerForm.value.IdentificType == '95'\" minlength=\"10\" formControlName=\"IdentificNO\" readonly></ion-input>\n            <ion-input type=\"text\" *ngIf=\"registerForm.value.IdentificType == '89' || registerForm.value.IdentificType == '90'\" minlength=\"18\" [brmasker]=\"{mask:'000-0000-0000000-0', len:18, userCaracters: false}\" readonly formControlName=\"IdentificNO\"></ion-input>\n          </ion-item>\n\n\n\n          <!-- Expiry Date -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"expiryDate\" | translate}}</ion-label>\n            <ion-datetime formControlName=\"ExpiryDate\" readonly></ion-datetime>\n          </ion-item>\n\n          <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n            <ion-label>{{\"contactInformation\" | translate}}</ion-label>\n          </ion-item-divider>\n\n          <!-- Email Address -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"emailAddress\" | translate}}</ion-label>\n            <ion-input type=\"email\" formControlName=\"Email\" readonly></ion-input>\n          </ion-item>\n\n          <!-- First Mobile NO -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"mobileNo\" | translate}}</ion-label>\n            <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"FirstMobileNO\" readonly></ion-input>\n          </ion-item>\n\n          <!-- Second Mobile NO -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"phoneNo\" | translate}}</ion-label>\n            <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"SecondMobileNO\" readonly></ion-input>\n          </ion-item>\n\n          <!-- Country -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"country\" | translate}}</ion-label>\n            <ng-container *ngFor=\"let item of countries\">\n              <ion-text *ngIf=\"item.ID == registerForm.value.CountryID\">{{item.NameEN}}</ion-text>\n            </ng-container>\n          </ion-item>\n\n          <!-- City Name -->\n          <ion-item class=\"ion-margin-vertical\">\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"city\" | translate}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"CityName\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item-divider mode=\"ios\" class=\"ion-margin-top\">\n            <ion-label>{{\"preferences\" | translate}}</ion-label>\n          </ion-item-divider>\n\n          <!-- Prefered Lang -->\n          <ion-list>\n            <ion-label position=\"stacked\" color=\"secondary\">{{\"preferedLang\" | translate}}</ion-label>\n            <ion-radio-group mode=\"md\" formControlName=\"PreferredLang\" class=\"gender-wrapper\">\n              <ion-grid>\n                <ion-row>\n                  <ng-container *ngFor=\"let item of preflang\">\n                    <ion-col size=\"6\" *ngIf=\"item.id == registerForm.value.PreferredLang\">\n                      <ion-item lines=\"none\" class=\"item-radio-checked ion-no-padding\">\n                        <ion-label>{{item.name}}</ion-label>\n                        <!-- <ion-radio slot=\"start\" [value]=\"item.id\"></ion-radio> -->\n                      </ion-item>\n                    </ion-col>\n                  </ng-container>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n          </ion-list>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngIf=\"guest\" class=\"guest-wrapper\">\n    <ion-text color=\"danger\">{{'featureNotAvailableForGuestUser' | translate}}</ion-text>\n    <ion-button (click)=\"goLogin()\" class=\"ion-margin-top\" size=\"sm\" color=\"primary\">{{'loginToAccount' | translate}}\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/_pipes/safe-html.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/_pipes/safe-html.pipe.ts ***!
  \******************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: 'safeHtml' })
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/profile-details/profile-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/profile-details/profile-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPageRoutingModule", function() { return ProfileDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-details.page */ "./src/app/profile-details/profile-details.page.ts");




const routes = [
    {
        path: '',
        component: _profile_details_page__WEBPACK_IMPORTED_MODULE_3__["ProfileDetailsPage"]
    }
];
let ProfileDetailsPageRoutingModule = class ProfileDetailsPageRoutingModule {
};
ProfileDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/profile-details/profile-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/profile-details/profile-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPageModule", function() { return ProfileDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-details-routing.module */ "./src/app/profile-details/profile-details-routing.module.ts");
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-details.page */ "./src/app/profile-details/profile-details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");










let ProfileDetailsPageModule = class ProfileDetailsPageModule {
};
ProfileDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_9__["BrMaskerModule"],
            _profile_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileDetailsPageRoutingModule"]
        ],
        declarations: [_profile_details_page__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailsPage"]]
    })
], ProfileDetailsPageModule);



/***/ }),

/***/ "./src/app/profile-details/profile-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/profile-details/profile-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .content ion-item::part(native) {\n  padding: 0;\n}\nion-content .content ion-segment {\n  margin-top: 8px;\n  --background: transparent;\n  border: 2px solid #979797 !important;\n  --ion-background-color: #B8CC94 !important;\n  --box-shadow: none;\n  height: 44px !important;\n}\nion-content .content ion-segment ion-segment-button {\n  margin: 0 !important;\n  --border-radius: 0;\n  --indicator-box-shadow: 0;\n}\nion-content .content ion-segment ion-segment-button ion-label {\n  margin: 0 10px;\n}\nion-content .content ion-segment ion-segment-button ion-img::part(image) {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .content ion-segment ion-segment-button::part(indicator) {\n  margin-left: -2px;\n  margin-right: -2px;\n}\nion-content .content ion-segment ion-segment-button:before {\n  margin: 0 !important;\n  --border-width: 0 !important;\n}\nion-content .content ion-segment ion-segment-button div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nion-content .content ion-segment ion-segment-button div ion-icon {\n  font-size: 1.4rem;\n  margin-right: 8px;\n}\nion-content .content ion-radio-group ion-item {\n  border: 1px solid #f5f5f5;\n  --ion-safe-area-right: 0;\n  --background: #f5f5f5;\n  border-radius: 4px;\n}\nion-content .content ion-radio-group ion-item.item-radio-checked {\n  --background: var(--ion-color-primary);\n  --color-checked: #fff;\n  border: 1px solid var(--ion-color-primary);\n}\nion-content .content ion-radio-group ion-item.item-radio-checked ion-label {\n  color: #fff;\n  text-align: center;\n}\nion-content .content ion-radio-group ion-item ion-label {\n  text-align: center;\n}\nion-content .content ion-radio-group ion-item ion-radio {\n  width: 0px;\n  height: 0px;\n  margin: 0px;\n  border: 0px;\n  --color: transparent;\n  --color-checked: transparent;\n}\nion-content .content .eid-attachment {\n  width: 100%;\n}\nion-content .content .w-100 {\n  width: 100%;\n}\nion-content .content ion-item-divider {\n  padding: 10px 16px;\n  margin-bottom: 10px;\n}\nion-content .forgot {\n  padding: 16px;\n  font-size: 0.7rem;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-grid {\n  --ion-grid-column-padding: 2px;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1kZXRhaWxzL3Byb2ZpbGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBTVk7RUFDSSxVQUFBO0FBSGhCO0FBT1E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUxaO0FBT1k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxjQUFBO0FBTHBCO0FBU29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBUHhCO0FBV2dCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVlnQjtFQUNJLG9CQUFBO0VBQ0EsNEJBQUE7QUFWcEI7QUFhZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFYcEI7QUFhb0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBWHhCO0FBa0JZO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFoQmhCO0FBa0JnQjtFQUNJLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQWhCcEI7QUFrQm9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBaEJ4QjtBQW1CZ0I7RUFDSSxrQkFBQTtBQWpCcEI7QUFvQmdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFsQnBCO0FBb0NRO0VBQ0ksV0FBQTtBQWxDWjtBQW9DUTtFQUNJLFdBQUE7QUFsQ1o7QUFvQ1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBbENaO0FBc0NJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBcENSO0FBdUNJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXJDUjtBQXdDWTtFQUdJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUF4Q2hCO0FBNENRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQTFDWjtBQTRDWTtFQUdJLGlDQUFBO0VBQ0EsaUJBQUE7QUE1Q2hCO0FBdURBO0VBQ0ksOEJBQUE7QUFwREo7QUF3REE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXJESjtBQXdEQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQXJESjtBQXdEQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FBckRKO0FBeURBO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0FBdERKO0FBeURBO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQXRESjtBQXlEQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUF0REo7QUF5REE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBdERKO0FBeURBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUF0RE47RUF5REU7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUF2RE47RUEwREU7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUF4RE47RUEyREU7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUF6RE47QUFDRjtBQTREQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBMUROO0VBNkRFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBM0ROO0VBOERFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBNUROO0VBK0RFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBN0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWRldGFpbHMvcHJvZmlsZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2VnbWVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk3OTc5NyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0I4Q0M5NCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IDA7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICAgICAgJjo6cGFydChpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjo6cGFydChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xuICAgICAgICAgICAgICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIC8vIC0tbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpb24tcmFkaW8ge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICYucmFkaW8tY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5laWQtYXR0YWNobWVudHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC53LTEwMCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbS1kaXZpZGVye1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3Jnb3Qge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NkNGOUYsICMyZGY4YWIpO1xuICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVnaXN0ZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiAwIDNweCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICAgIC8vIGZvbnQtc2l6ZTogMThweDtcbiAgICAvLyBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xufVxuXG5cbiNhcnJvd0FuaW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFycm93cyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hcnJvdyB7XG4gICAgd2lkdGg6IC44cmVtO1xuICAgIGhlaWdodDogLjhyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG5cbi5hcnJvd1NsaWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uZGVsYXkxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmRlbGF5MiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbi5kZWxheTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcbiAgICB9XG5cbiAgICAyMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xuICAgIH1cblxuICAgIDIwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile-details/profile-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile-details/profile-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPage", function() { return ProfileDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");










class Country {
}
let ProfileDetailsPage = class ProfileDetailsPage {
    constructor(formBuilder, service, router, translateService, navCtrl, authService, helperService, oneSignal) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.helperService = helperService;
        this.oneSignal = oneSignal;
        this.submitted = false;
        this.docImages = [];
        this.profileTab = '1';
        this.guest = false;
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
        }
        else {
            if (!localStorage.getItem('currentUser')) {
                this.getProfile();
            }
            else {
                this.profileData = JSON.parse(localStorage.getItem('currentUser'));
            }
            this.lang = this.profileData.preferredLang;
        }
        this.userInfo = JSON.parse(localStorage.getItem('adafsacurrentUser'));
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
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ExpiryDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Gender: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IdentificNO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            IdentificType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaritalStatusID: ['01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PreferredLang: ['36', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PrefixName: ['2600', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FirstMobileNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:00971)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)]],
            Position: [''],
            Address: [''],
            DeviceType: ['Android'],
            SecondMobileNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:00971)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)]],
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
        });
    }
    changeLng() {
        localStorage.setItem('language', this.lang);
        console.log('language', this.lang);
        this.translateService.use(this.lang);
        if (this.lang == 'en') {
            this.helperService.setDir('ltr');
        }
        else {
            this.helperService.setDir('rtl');
        }
        this.helperService.show();
        this.updateProfile();
    }
    goLogin() {
        this.navCtrl.navigateRoot(['/adafsa-login']);
    }
    updateProfile() {
        var payload = {
            "Name": this.profileData.users.name,
            "profile": {
                "preferredLang": this.lang
            }
        };
        this.service.updateProfile(this.profileData.id, payload).subscribe(_res => {
            this.getProfile();
            location.reload();
            // this.helperService.showToast(this.helperService.translate('successfullyUpdated'), 'success', 'bottom');
        });
    }
    getCountries() {
        this.service.getCountries().subscribe(_res => {
            this.countries = _res.d.results;
            this.getNationalities();
        });
    }
    getNationalities() {
        this.service.getNationalities().subscribe(_res => {
            this.nationalities = _res.d.results;
            this.registerForm.patchValue(this.userInfo.DoLoginResult.UserAccountDetails.IndividualInfo);
            // this.registerForm.disable();
        });
        return this.nationalities;
    }
};
ProfileDetailsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"] }
];
ProfileDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-details.page.scss */ "./src/app/profile-details/profile-details.page.scss")).default]
    })
], ProfileDetailsPage);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_pipes/safe-html.pipe */ "./src/app/_pipes/safe-html.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=profile-details-profile-details-module-es2015.js.map