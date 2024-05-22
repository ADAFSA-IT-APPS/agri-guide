(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-main-login-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-main/login-main.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-main/login-main.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" color=\"primary\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <div class=\"header\">\n      <div class=\"content\">\n        <ion-text class=\"title\" color=\"secondary\">{{\"welcomeTo\" | translate}}</ion-text>\n        <ion-text class=\"desc\">{{\"abudhabiAgrecultureGuide\" | translate}}</ion-text>\n      </div>\n    </div>\n\n    <div class=\"footer ion-padding-horizontal\">\n      <div class=\"login\">\n        <ion-button expand=\"block\" class=\"ion-margin-bottom\" color=\"light\" (click)=\"goToGuest(1)\">\n          {{\"ADAFSARegistration\" | translate}}\n        </ion-button>\n        <!-- <ion-button expand=\"block\" color=\"light\" (click)=\"goToGuest(2)\">{{\"guestRegistration\" | translate}}\n        </ion-button> -->\n      </div>\n      <!-- <ion-text class=\"title ion-margin-vertical\">{{\"or\" | translate}}</ion-text>\n      <div class=\"guest\" (click)=\"guestVisitor()\">\n        <ion-text>{{\"continueAsGuestVisitor\" | translate}}</ion-text>\n      </div> -->\n    </div>\n  </div>\n</ion-content>");

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

/***/ "./src/app/login-main/login-main-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-main/login-main-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginMainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMainPageRoutingModule", function() { return LoginMainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-main.page */ "./src/app/login-main/login-main.page.ts");




const routes = [
    {
        path: '',
        component: _login_main_page__WEBPACK_IMPORTED_MODULE_3__["LoginMainPage"]
    }
];
let LoginMainPageRoutingModule = class LoginMainPageRoutingModule {
};
LoginMainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginMainPageRoutingModule);



/***/ }),

/***/ "./src/app/login-main/login-main.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login-main/login-main.module.ts ***!
  \*************************************************/
/*! exports provided: LoginMainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMainPageModule", function() { return LoginMainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-main-routing.module */ "./src/app/login-main/login-main-routing.module.ts");
/* harmony import */ var _login_main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-main.page */ "./src/app/login-main/login-main.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");









let LoginMainPageModule = class LoginMainPageModule {
};
LoginMainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _login_main_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginMainPageRoutingModule"]
        ],
        providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"]],
        declarations: [_login_main_page__WEBPACK_IMPORTED_MODULE_6__["LoginMainPage"]]
    })
], LoginMainPageModule);



/***/ }),

/***/ "./src/app/login-main/login-main.page.scss":
/*!*************************************************!*\
  !*** ./src/app/login-main/login-main.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-content {\n  --background: var(--ion-color-primary);\n}\n\nion-content .main {\n  --background: linear-gradient(0deg, #EEEEEE, transparent);\n  background-size: cover;\n  background-position: bottom;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\nion-content .main .header {\n  flex-grow: 1;\n  flex-basis: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: url('bg.svg');\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-bottom: 16px;\n}\n\nion-content .main .header .content {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--ion-color-secondary);\n  margin: auto;\n}\n\nion-content .main .header .content ion-label {\n  font-weight: bold;\n  font-size: 1.6rem;\n}\n\nion-content .main .header .content .title {\n  font-weight: bold;\n  font-size: 1.4rem;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n\nion-content .main .header .content .desc {\n  color: #fff;\n  font-size: 2rem;\n  text-align: center;\n  font-weight: bold;\n}\n\nion-content .main .footer {\n  flex-basis: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n  width: 100%;\n}\n\nion-content .main .footer .title {\n  font-weight: bold;\n  font-size: 1.2rem;\n  margin-top: 24px;\n}\n\nion-content .main .footer .login {\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\nion-content .main .footer .login ion-button {\n  height: 58px;\n  width: 100%;\n  --border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  --ion-color-contrast: var(--ion-color-secondary) !important;\n  font-weight: bold;\n}\n\nion-content .main .footer .guest {\n  text-align: center;\n  text-decoration: underline;\n}\n\nion-content .main .footer .guest ion-text {\n  color: var(--ion-color-secondary);\n}\n\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.arrows {\n  width: 40px;\n}\n\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tbWFpbi9sb2dpbi1tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFFSSxzQ0FBQTtBQUNKOztBQUFBO0VBQ0kseURBQUE7RUFDSCxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRUQ7O0FBREM7RUFBVyxZQUFBO0VBQ0osZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNKLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FBS0g7O0FBSkc7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkc7RUFDYSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQU1oQjs7QUFKWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU1oQjs7QUFEQztFQUNPLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFHUjs7QUFGUTtFQUNJLGlCQUFBO0VBQ1IsaUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ1UsV0FBQTtFQUNBLG1CQUFBO0VBQ1IsYUFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBSEc7RUFDYSxZQUFBO0VBQ1osV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSwyREFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBRkU7RUFDVSxrQkFBQTtFQUNBLDBCQUFBO0FBSVo7O0FBSEc7RUFHQyxpQ0FBQTtBQUdKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ1EsbUNBQUE7QUFBWjs7QUFHRTtFQUNFLDJCQUFBO0VBQ0UsbUJBQUE7QUFBTjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0UsbUJBQUE7QUFDTjs7QUFDRTtFQUNFLDJCQUFBO0VBQ0UsbUJBQUE7QUFFTjs7QUFDRTtFQUNJO0lBQUssVUFBQTtJQUFXLDRCQUFBO0VBSXBCO0VBSEc7SUFBTSxVQUFBO0lBQVcsNEJBQUE7RUFPcEI7RUFORztJQUFNLFVBQUE7SUFBVywyQkFBQTtFQVVwQjtFQVRFO0lBQU8sVUFBQTtJQUFXLDJCQUFBO0VBYXBCO0FBQ0Y7O0FBWkU7RUFDSTtJQUFLLFVBQUE7SUFBVyw0QkFBQTtFQWdCcEI7RUFmRztJQUFNLFVBQUE7SUFBVyw0QkFBQTtFQW1CcEI7RUFsQkc7SUFBTSxVQUFBO0lBQVcsMkJBQUE7RUFzQnBCO0VBckJFO0lBQU8sVUFBQTtJQUFXLDJCQUFBO0VBeUJwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tbWFpbi9sb2dpbi1tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRUVFRUVFLCB0cmFuc3BhcmVudCk7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4ubWFpbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0VFRUVFRSwgdHJhbnNwYXJlbnQpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHQuaGVhZGVyIHsgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9iZy5zdmcpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHQuY29udGVudCB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRcdH1cblx0XHRcdC50aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0fVxuXG5cdC5mb290ZXIge1xuICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXHRcdC5sb2dpbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyAuMTYpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuZ3Vlc3Qge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRpb24tdGV4dCB7XG5cdFx0XHRcdC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Ly90ZXh0LXNoYWRvdzogMCAzcHggMTBweCBibGFjaztcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpOyAgICAgICAgICAgICAgICBcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbn1cbiNhcnJvd0FuaW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFycm93c3tcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuICAuYXJyb3cge1xuICAgIHdpZHRoOiAuOHJlbTtcbiAgICBoZWlnaHQ6IC44cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuICBcbiAgXG4gIC5hcnJvd1NsaWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlOyBcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuZGVsYXkxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7IFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICAuZGVsYXkyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7IFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgfVxuICAuZGVsYXkzIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7IFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAgIDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pOyB9XHRcbiAgICAgMjAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pOyB9XHRcbiAgICAgODAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cdFxuICAgIDEwMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTsgfVx0XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgICAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTsgfVx0XG4gICAgIDIwJSB7IG9wYWNpdHk6MTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTsgfVx0XG4gICAgIDgwJSB7IG9wYWNpdHk6MTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pOyB9XHRcbiAgICAxMDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7IH1cdFxuICB9Il19 */");

/***/ }),

/***/ "./src/app/login-main/login-main.page.ts":
/*!***********************************************!*\
  !*** ./src/app/login-main/login-main.page.ts ***!
  \***********************************************/
/*! exports provided: LoginMainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMainPage", function() { return LoginMainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LoginMainPage = class LoginMainPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToGuest(_type) {
        if (_type == 1) {
            this.router.navigate(['/registration']);
        }
        else {
            this.router.navigate(['/guest-login']);
        }
    }
    guestVisitor() {
        localStorage.setItem('guest', '1');
        this.router.navigate(['/tabs/home']);
    }
};
LoginMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginMainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-main/login-main.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-main.page.scss */ "./src/app/login-main/login-main.page.scss")).default]
    })
], LoginMainPage);



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
//# sourceMappingURL=login-main-login-main-module-es2015.js.map