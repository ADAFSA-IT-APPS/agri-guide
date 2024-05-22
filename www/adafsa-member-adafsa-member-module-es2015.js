(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adafsa-member-adafsa-member-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adafsa-member/adafsa-member.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adafsa-member/adafsa-member.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'back' | translate}}\" color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"ADAFSAMember\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <div class=\"content\">\n      <div class=\"logo\">\n        <ion-img src=\"./assets/guest-logo.svg\"></ion-img>\n      </div>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"EmirtesID\" | translate}}*</ion-label>\n        <ion-input type=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-text class=\"helper\" *ngIf=\"state == '2'\">{{\"youWillReceiveTheVarifcationCode\" | translate}}</ion-text>\n\n      <ion-item *ngIf=\"state == '2'\" class=\"ion-margin-vertical ion-padding-top ion-text-center\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"verificationCode\" | translate}}</ion-label>\n        <ion-input type=\"number\" placehoder=\"xxx xxx\"></ion-input>\n      </ion-item>\n\n      <div class=\"resend-code\" *ngIf=\"state == '2'\">\n        <ion-text>{{\"receiveTheCode\" | translate}} </ion-text>\n        <ion-text>{{\"resend\" | translate}}</ion-text>\n      </div>\n\n    </div>\n    <div class=\"footer\">\n      <div class=\"login\">\n        <ion-button color=\"primary\" *ngIf=\"state == '1'\" (click)=\"sendOTP()\">{{\"sendOtp\" | translate}}\n          \n        </ion-button>\n        <ion-button color=\"primary\" *ngIf=\"state == '2'\" [routerLink]=\"[ '/adafsa-member-login']\">{{\"loginToAccount\" | translate}}\n          <div class=\"arrows\">\n            <div id=\"arrowAnim\">\n              <div class=\"arrowSliding\">\n                <div class=\"arrow\"></div>\n              </div>\n              <div class=\"arrowSliding delay1\">\n                <div class=\"arrow\"></div>\n              </div>\n              <div class=\"arrowSliding delay2\">\n                <div class=\"arrow\"></div>\n              </div>\n              <div class=\"arrowSliding delay3\">\n                <div class=\"arrow\"></div>\n              </div>\n            </div>\n          </div>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

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

/***/ "./src/app/adafsa-member/adafsa-member-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/adafsa-member/adafsa-member-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdafsaMemberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdafsaMemberPageRoutingModule", function() { return AdafsaMemberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adafsa_member_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adafsa-member.page */ "./src/app/adafsa-member/adafsa-member.page.ts");




const routes = [
    {
        path: '',
        component: _adafsa_member_page__WEBPACK_IMPORTED_MODULE_3__["AdafsaMemberPage"]
    }
];
let AdafsaMemberPageRoutingModule = class AdafsaMemberPageRoutingModule {
};
AdafsaMemberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdafsaMemberPageRoutingModule);



/***/ }),

/***/ "./src/app/adafsa-member/adafsa-member.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/adafsa-member/adafsa-member.module.ts ***!
  \*******************************************************/
/*! exports provided: AdafsaMemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdafsaMemberPageModule", function() { return AdafsaMemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adafsa_member_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adafsa-member-routing.module */ "./src/app/adafsa-member/adafsa-member-routing.module.ts");
/* harmony import */ var _adafsa_member_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adafsa-member.page */ "./src/app/adafsa-member/adafsa-member.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let AdafsaMemberPageModule = class AdafsaMemberPageModule {
};
AdafsaMemberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _adafsa_member_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdafsaMemberPageRoutingModule"]
        ],
        declarations: [_adafsa_member_page__WEBPACK_IMPORTED_MODULE_6__["AdafsaMemberPage"]]
    })
], AdafsaMemberPageModule);



/***/ }),

/***/ "./src/app/adafsa-member/adafsa-member.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/adafsa-member/adafsa-member.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .logo {\n  width: 100px;\n  margin: auto;\n  padding: 10px;\n}\nion-content .forgot {\n  padding: 16px 0;\n  font-size: 0.7rem;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .helper {\n  margin-bottom: 4px;\n  font-size: 14px;\n  padding-left: 20px;\n  color: var(--ion-color-secondary);\n}\nion-content .resend-code {\n  margin-bottom: 4px;\n  font-size: 14px;\n  padding-left: 20px;\n  color: var(--ion-color-secondary);\n}\nion-content .resend-code ion-text:last-child {\n  font-weight: bold;\n}\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRhZnNhLW1lbWJlci9hZGFmc2EtbWVtYmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0c7RUFHQyxZQUFBO0VBQ0EsZ0JBQUE7RUFFWSxpQ0FBQTtFQUNBLGlCQUFBO0FBRmhCO0FBS0U7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBSEg7QUFJRztFQUdDLGlDQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQU5SO0FBUUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBTlI7QUFTWTtFQUNJLGlCQUFBO0FBUGhCO0FBYUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBVko7QUFZRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDUSxtQ0FBQTtBQVZaO0FBYUU7RUFDRSwyQkFBQTtFQUNFLG1CQUFBO0FBVk47QUFZRTtFQUNFLDJCQUFBO0VBQ0UsbUJBQUE7QUFUTjtBQVdFO0VBQ0UsMkJBQUE7RUFDRSxtQkFBQTtBQVJOO0FBV0U7RUFDSTtJQUFLLFVBQUE7SUFBVyw0QkFBQTtFQU5wQjtFQU9HO0lBQU0sVUFBQTtJQUFXLDRCQUFBO0VBSHBCO0VBSUc7SUFBTSxVQUFBO0lBQVcsMkJBQUE7RUFBcEI7RUFDRTtJQUFPLFVBQUE7SUFBVywyQkFBQTtFQUdwQjtBQUNGO0FBRkU7RUFDSTtJQUFLLFVBQUE7SUFBVyw0QkFBQTtFQU1wQjtFQUxHO0lBQU0sVUFBQTtJQUFXLDRCQUFBO0VBU3BCO0VBUkc7SUFBTSxVQUFBO0lBQVcsMkJBQUE7RUFZcEI7RUFYRTtJQUFPLFVBQUE7SUFBVywyQkFBQTtFQWVwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRhZnNhLW1lbWJlci9hZGFmc2EtbWVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuZm9yZ290e1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgfVxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0LmxvZ2luIHtcblx0XHRcdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NkNGOUYsICMyZGY4YWIpO1xuXHRcdFx0XHQvL2JvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdGhlaWdodDogNDhweDtcblx0XHRcdFx0bWluLXdpZHRoOiAyNTBweDtcblx0XHRcdFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnJlZ2lzdGVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRpb24tdGV4dCB7XG5cdFx0XHRcdC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Ly90ZXh0LXNoYWRvdzogMCAzcHggMTBweCBibGFjaztcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxuICAgIC5oZWxwZXJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLnJlc2VuZC1jb2Rle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGlvbi10ZXh0XG4gICAgICAgIHtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxufVxuXG4ubGFiZWwtc3RhY2tlZHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2Fycm93QW5pbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuYXJyb3dze1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hcnJvdyB7XG4gICAgd2lkdGg6IC44cmVtO1xuICAgIGhlaWdodDogLjhyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIFxuICBcbiAgLmFycm93U2xpZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSA0cyBsaW5lYXIgaW5maW5pdGU7IFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSA0cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5kZWxheTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIC5kZWxheTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICB9XG4gIC5kZWxheTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgICAgMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7IH1cdFxuICAgICAyMCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7IH1cdFxuICAgICA4MCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTsgfVx0XG4gICAgMTAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pOyB9XHRcbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAgIDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pOyB9XHRcbiAgICAgMjAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pOyB9XHRcbiAgICAgODAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cdFxuICAgIDEwMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTsgfVx0XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/adafsa-member/adafsa-member.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/adafsa-member/adafsa-member.page.ts ***!
  \*****************************************************/
/*! exports provided: AdafsaMemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdafsaMemberPage", function() { return AdafsaMemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdafsaMemberPage = class AdafsaMemberPage {
    constructor() {
        this.state = '1';
    }
    ngOnInit() {
    }
    sendOTP() {
        this.state = '2';
    }
};
AdafsaMemberPage.ctorParameters = () => [];
AdafsaMemberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adafsa-member',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adafsa-member.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adafsa-member/adafsa-member.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adafsa-member.page.scss */ "./src/app/adafsa-member/adafsa-member.page.scss")).default]
    })
], AdafsaMemberPage);



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
//# sourceMappingURL=adafsa-member-adafsa-member-module-es2015.js.map