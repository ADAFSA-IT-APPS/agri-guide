(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-info-login-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-info/login-info.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-info/login-info.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <div class=\"header\">\n      <div class=\"logo\">\n        <ion-img src=\"./assets/icon.svg\"></ion-img>\n      </div>\n      <div class=\"content\">\n        <ion-img *ngIf=\"lang == 'en'\" class=\"ion-margin-top\" src=\"./assets/logo-text.svg\"></ion-img>\n        <ion-img *ngIf=\"lang == 'ar'\" class=\"ion-margin-top\" src=\"./assets/logo-text-ar.svg\"></ion-img>\n        <ion-text>{{\"abudhabiAgricultureFoodSafetyAuthority\" | translate}}</ion-text>\n      </div>\n    </div>\n    <div class=\"middle\">\n      <ion-text>{{\"selectYourPreferredLanguage\" | translate}}</ion-text>\n      <div class=\"lng-switcher\" dir=\"ltr\">\n        <div (click)=\"changeLng('en')\" [ngClass]=\"{'selected': lang == 'en'}\">\n          En\n        </div>\n        <div (click)=\"changeLng('ar')\" [ngClass]=\"{'selected': lang == 'ar'}\">\n          Ar\n        </div>\n      </div>\n    </div>\n    <div class=\"footer\">\n      <div class=\"login ion-text-center\">\n        <ion-button color=\"primary\" [routerLink]=\"['/adafsa-login']\">{{\"ADAFSALogin\" | translate}}\n        </ion-button>\n        <!-- <ion-button color=\"primary\" [routerLink]=\"['/member-login']\">{{\"guestLogin\" | translate}}\n        </ion-button> -->\n        <div class=\"ion-margin-top\">\n          <div class=\"guest\" (click)=\"guestVisitor()\">\n            <ion-label>{{\"continueAsGuestVisitor\" | translate}}</ion-label>\n          </div>\n        </div>\n        <div class=\"ion-margin-top adafsa-logo\">\n          <ion-img src=\"./assets/ADAFSA-logo.png\"></ion-img>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\" (click)=\"goToRegister()\">\n      {{\"registration\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>");

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

/***/ "./src/app/login-info/login-info-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-info/login-info-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfoPageRoutingModule", function() { return LoginInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-info.page */ "./src/app/login-info/login-info.page.ts");




const routes = [
    {
        path: '',
        component: _login_info_page__WEBPACK_IMPORTED_MODULE_3__["LoginInfoPage"]
    }
];
let LoginInfoPageRoutingModule = class LoginInfoPageRoutingModule {
};
LoginInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/login-info/login-info.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login-info/login-info.module.ts ***!
  \*************************************************/
/*! exports provided: LoginInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfoPageModule", function() { return LoginInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-info-routing.module */ "./src/app/login-info/login-info-routing.module.ts");
/* harmony import */ var _login_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-info.page */ "./src/app/login-info/login-info.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let LoginInfoPageModule = class LoginInfoPageModule {
};
LoginInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _login_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginInfoPageRoutingModule"]
        ],
        declarations: [_login_info_page__WEBPACK_IMPORTED_MODULE_6__["LoginInfoPage"]]
    })
], LoginInfoPageModule);



/***/ }),

/***/ "./src/app/login-info/login-info.page.scss":
/*!*************************************************!*\
  !*** ./src/app/login-info/login-info.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-content {\n  --background: linear-gradient(0deg, #EEEEEE, transparent);\n}\n\nion-content .main {\n  background-size: cover;\n  background-position: bottom;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\nion-content .main .header .logo {\n  width: 100px;\n  margin: auto;\n  padding: 10px;\n}\n\nion-content .main .header .content {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--ion-color-secondary);\n  margin: auto;\n}\n\nion-content .main .header .content ion-label {\n  font-weight: bold;\n  font-size: 1.6rem;\n}\n\nion-content .main .header .content ion-text {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 14px;\n}\n\nion-content .main .middle ion-text {\n  font-size: 14px;\n  color: var(--ion-color-secondary);\n}\n\nion-content .main .middle .lng-switcher {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  margin-top: 16px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n\nion-content .main .middle .lng-switcher div {\n  padding: 10px 16px;\n  background: #fff;\n}\n\nion-content .main .middle .lng-switcher div.selected {\n  background: var(--ion-color-primary);\n}\n\nion-content .main .middle .lng-switcher div:first-child {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n}\n\nion-content .main .middle .lng-switcher div:last-child {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n}\n\nion-content .main .footer .guest {\n  text-align: center;\n}\n\nion-content .main .footer .guest ion-label {\n  color: var(--ion-color-secondary);\n  text-decoration: underline !important;\n}\n\nion-content .main .footer .adafsa-logo {\n  margin: 30px auto 16px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\nion-content .main .footer .login ion-button {\n  height: 48px;\n  min-width: 220px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n\nion-content .main .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\n\nion-content .main .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.arrows {\n  width: 40px;\n}\n\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4taW5mby9sb2dpbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDRCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyx5REFBQTtBQUVEOztBQURBO0VBQ0Msc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUdEOztBQURFO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR0g7O0FBREU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FBR0g7O0FBRkc7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkc7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUNFO0VBQ0MsZUFBQTtFQUNBLGlDQUFBO0FBQ0g7O0FBQ0U7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQUNIOztBQUFHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0Msb0NBQUE7QUFHTDs7QUFESTtFQUNDLDRCQUFBO0VBQ0EsK0JBQUE7QUFHTDs7QUFESTtFQUNDLDZCQUFBO0VBQ0EsZ0NBQUE7QUFHTDs7QUFHRTtFQUNVLGtCQUFBO0FBRFo7O0FBRUc7RUFHQyxpQ0FBQTtFQUNBLHFDQUFBO0FBRko7O0FBS0U7RUFDQyxzQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUhIOztBQU1HO0VBR0MsWUFBQTtFQUNBLGdCQUFBO0VBQ1ksaUNBQUE7RUFDQSxpQkFBQTtBQU5oQjs7QUFTRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQSDs7QUFRRztFQUdDLGlDQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBY0U7RUFDRSxXQUFBO0FBWEo7O0FBYUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQVZKOztBQWNFO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNRLG1DQUFBO0FBWFo7O0FBY0U7RUFDRSwyQkFBQTtFQUNFLG1CQUFBO0FBWE47O0FBYUU7RUFDRSwyQkFBQTtFQUNFLG1CQUFBO0FBVk47O0FBWUU7RUFDRSwyQkFBQTtFQUNFLG1CQUFBO0FBVE47O0FBWUU7RUFDSTtJQUFLLFVBQUE7SUFBVyw0QkFBQTtFQVBwQjtFQVFHO0lBQU0sVUFBQTtJQUFXLDRCQUFBO0VBSnBCO0VBS0c7SUFBTSxVQUFBO0lBQVcsMkJBQUE7RUFEcEI7RUFFRTtJQUFPLFVBQUE7SUFBVywyQkFBQTtFQUVwQjtBQUNGOztBQURFO0VBQ0k7SUFBSyxVQUFBO0lBQVcsNEJBQUE7RUFLcEI7RUFKRztJQUFNLFVBQUE7SUFBVyw0QkFBQTtFQVFwQjtFQVBHO0lBQU0sVUFBQTtJQUFXLDJCQUFBO0VBV3BCO0VBVkU7SUFBTyxVQUFBO0lBQVcsMkJBQUE7RUFjcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWluZm8vbG9naW4taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcblx0LS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50e1xuXHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRUVFRUVFLCB0cmFuc3BhcmVudCk7XG4ubWFpbiB7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdC5oZWFkZXIge1xuXHRcdC5sb2dvIHtcblx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0fVxuXHRcdC5jb250ZW50IHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRcdFx0fVxuXHRcdFx0aW9uLXRleHQge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Lm1pZGRsZSB7XG5cdFx0aW9uLXRleHQge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdH1cblx0XHQubG5nLXN3aXRjaGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdGRpdiB7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggMTZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0Ji5zZWxlY3RlZCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5mb290ZXIge1xuXHRcdC5ndWVzdCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHQvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdC8vdGV4dC1zaGFkb3c6IDAgM3B4IDEwcHggYmxhY2s7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTsgICBcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDsgICAgICAgICAgICAgXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5hZGFmc2EtbG9nb3tcblx0XHRcdG1hcmdpbjogMzBweCBhdXRvIDE2cHg7XG5cdFx0XHR3aWR0aDogbWF4LWNvbnRlbnQ7XG5cdFx0fVxuXHRcdC5sb2dpbiB7XG5cdFx0XHRpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjZDRjlGLCAjMmRmOGFiKTtcblx0XHRcdFx0Ly9ib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQ4cHg7XG5cdFx0XHRcdG1pbi13aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQucmVnaXN0ZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcdGlvbi10ZXh0IHtcblx0XHRcdFx0Ly8tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHQvL3RleHQtc2hhZG93OiAwIDNweCAxMHB4IGJsYWNrO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxufVxuI2Fycm93QW5pbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuYXJyb3dze1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC5hcnJvdyB7XG4gICAgd2lkdGg6IC44cmVtO1xuICAgIGhlaWdodDogLjhyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIFxuICBcbiAgLmFycm93U2xpZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSA0cyBsaW5lYXIgaW5maW5pdGU7IFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSA0cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5kZWxheTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIC5kZWxheTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICB9XG4gIC5kZWxheTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgICAgMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7IH1cdFxuICAgICAyMCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7IH1cdFxuICAgICA4MCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTsgfVx0XG4gICAgMTAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pOyB9XHRcbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAgIDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pOyB9XHRcbiAgICAgMjAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pOyB9XHRcbiAgICAgODAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cdFxuICAgIDEwMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTsgfVx0XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/login-info/login-info.page.ts":
/*!***********************************************!*\
  !*** ./src/app/login-info/login-info.page.ts ***!
  \***********************************************/
/*! exports provided: LoginInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfoPage", function() { return LoginInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/util.service */ "./src/app/_services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let LoginInfoPage = class LoginInfoPage {
    constructor(translate, utilService, router, helperService) {
        this.translate = translate;
        this.utilService = utilService;
        this.router = router;
        this.helperService = helperService;
        this.lang = 'en';
    }
    ngOnInit() {
        localStorage.removeItem('token');
        if (localStorage.getItem('language')) {
            this.lang = localStorage.getItem('language');
        }
        else {
            this.lang = this.translate.currentLang;
        }
    }
    changeLng(lng) {
        localStorage.setItem('language', lng);
        this.lang = lng;
        this.translate.use(lng);
        if (this.lang == 'en') {
            this.helperService.setDir('ltr');
        }
        else {
            this.helperService.setDir('rtl');
        }
    }
    goToRegister() {
        this.router.navigate(['/login-main']);
    }
    guestVisitor() {
        localStorage.setItem('guest', '1');
        localStorage.removeItem('notifications');
        this.router.navigate(['/tabs/home']);
    }
};
LoginInfoPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }
];
LoginInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-info/login-info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-info.page.scss */ "./src/app/login-info/login-info.page.scss")).default]
    })
], LoginInfoPage);



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
//# sourceMappingURL=login-info-login-info-module-es2015.js.map