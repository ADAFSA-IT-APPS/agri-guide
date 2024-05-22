(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"forgotYourPassword\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\" *ngIf=\"!success\">\n    <form [formGroup]=\"loginForm\" novalidate>\n      <div class=\"content\">\n        <div class=\"logo\">\n          <ion-img src=\"./assets/login-logo.svg\"></ion-img>\n        </div>\n        <ion-item class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"emirateID\" | translate}} / {{\"passportNumber\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text>\n          </ion-label>\n          <ion-input formControlName=\"IdentifcationNo\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\" color=\"danger\" *ngIf=\"submitted && f.IdentifcationNo.invalid\">\n          <span *ngIf=\"f.IdentifcationNo.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.IdentifcationNo.errors.minlength\">{{'invalid' | translate}}</span>\n        </ion-text>\n      </div>\n      <div class=\"footer\">\n        <div class=\"login\">\n          <ion-button color=\"primary\" (click)=\"submit()\">{{\"RESEND\" | translate}}</ion-button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"main\" *ngIf=\"success\">\n    <div class=\"content\">\n      <div class=\"logo\">\n        <ion-img src=\"./assets/login-logo.svg\"></ion-img>\n      </div>\n      <div class=\"ion-text-center ion-margin-top\">\n        <ion-label><h1>{{'passwordResetMsg' | translate}}</h1></ion-label>\n        <ion-button class=\"ion-margin-top resend\" color=\"primary\" (click)=\"back()\">{{\"loginToAccount\" | translate}}</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/forgot-password/forgot-password-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function srcAppForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "./src/app/forgot-password/forgot-password.page.ts");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/forgot-password/forgot-password.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function srcAppForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "./src/app/forgot-password/forgot-password-routing.module.ts");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "./src/app/forgot-password/forgot-password.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/common-component.module */
      "./src/app/common-component/common-component.module.ts");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! br-mask */
      "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_9__["BrMaskerModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/forgot-password/forgot-password.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .content ion-item {\n  --background: transparent;\n}\nion-content .content ion-item::part(native) {\n  padding: 0;\n}\nion-content .logo {\n  width: 150px;\n  margin: auto;\n  padding: 10px;\n}\nion-content .forgot {\n  padding: 16px 0;\n  font-size: 0.7rem;\n}\nion-content .required {\n  font-size: 0.7rem;\n}\nion-content .resend {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBS0k7RUFDRSx5QkFBQTtBQUZOO0FBR007RUFDRSxVQUFBO0FBRFI7QUFNRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUpKO0FBT0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsaUJBQUE7QUFOSjtBQVNFO0VBR0UsWUFBQTtFQUNBLGdCQUFBO0VBRUEsaUNBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBWEo7QUFjTTtFQUdFLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGlDQUFBO0VBQ0EsaUJBQUE7QUFoQlI7QUFvQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBbEJOO0FBb0JNO0VBR0UsaUNBQUE7RUFDQSxpQkFBQTtBQXBCUjtBQTBCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXZCRjtBQTBCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkJGO0FBMEJBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBdkJGO0FBMEJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUF2QkY7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7QUF4QkY7QUEyQkE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBeEJGO0FBMkJBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQXhCRjtBQTJCQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUF4QkY7QUEyQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQXhCRjtFQTJCQTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQXpCRjtFQTRCQTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQTFCRjtFQTZCQTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQTNCRjtBQUNGO0FBOEJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUE1QkY7RUErQkE7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUE3QkY7RUFnQ0E7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUE5QkY7RUFpQ0E7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUEvQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuXG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAuY29udGVudCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5mb3Jnb3Qge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBmb250LXNpemU6IC43cmVtO1xuICB9XG5cbiAgLnJlcXVpcmVke1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gIH1cblxuICAucmVzZW5kIHtcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjZDRjlGLCAjMmRmOGFiKTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgLy8gLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmxvZ2luIHtcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjZDRjlGLCAjMmRmOGFiKTtcbiAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7ICBcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgLy8gLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAwIDJweCAwcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWdpc3RlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLy90ZXh0LXNoYWRvdzogMCAzcHggMTBweCBibGFjaztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNhcnJvd0FuaW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFycm93cyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IC44cmVtO1xuICBoZWlnaHQ6IC44cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuXG4uYXJyb3dTbGlkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNsaWRlIDRzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmRlbGF5MSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmRlbGF5MiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuLmRlbGF5MyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG5cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xuICB9XG5cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cblxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/forgot-password/forgot-password.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function srcAppForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _common_component_otp_otp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/otp/otp.component */
      "./src/app/common-component/otp/otp.component.ts");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(authService, formBuilder, service, navCtrl, modalCtrl, helperService, router) {
          _classCallCheck(this, ForgotPasswordPage);

          this.authService = authService;
          this.formBuilder = formBuilder;
          this.service = service;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.helperService = helperService;
          this.router = router;
          this.submitted = false;
          this.success = false;
          this.loginForm = formBuilder.group({
            IdentifcationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
          });
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "openOtp",
          value: function openOtp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _common_component_otp_otp_component__WEBPACK_IMPORTED_MODULE_8__["OtpComponent"],
                        cssClass: '',
                        componentProps: {
                          data: ''
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

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
            };
            this.service.getServerTime(_payload2).subscribe(function (_res1) {
              if (_res1.statusCode == 200) {
                _payload1.p2 = _this.helperService.getDateInUtc(_res1.result.GetServerDateTimeResult.serverDate);
                _payload1.p1 = _this.helperService.EncryptData(_payload.p2);
                console.log('_payload1', _payload1);

                _this.service.getFarmerInfo(_payload1).subscribe(function (_res2) {
                  if (_res2.statusCode == 200) {
                    if (_res2.result.data.GetCustomerContactDetailsResult.CustomerContactDetails.length > 0) {
                      _payload.UserName = _res2.result.data.GetCustomerContactDetailsResult.CustomerContactDetails[0];

                      _this.service.adafsaForgotPassword(_payload).subscribe(function (_res) {
                        debugger;

                        if (_res.statusCode == 200) {
                          _this.success = true;

                          _this.helperService.hide();

                          _this.helperService.showToast(_this.helperService.translate('passwordResetMsg'), 'success', 'bottom');
                        } else {
                          _this.helperService.hide();

                          _this.helperService.showToast(_res.result.msg, 'danger', 'bottom');
                        }
                      });
                    } else {
                      _this.helperService.hide();

                      _this.helperService.showToast(_this.helperService.translate('invalid') + ' ' + _this.helperService.translate('emirateID') + '/' + _this.helperService.translate('passportNumber'), 'danger', 'bottom');
                    }
                  } else {
                    _this.helperService.hide();

                    _this.helperService.showToast(_res2.result.msg, 'danger', 'bottom');
                  }
                }, function (error) {
                  _this.helperService.hide();

                  _this.helperService.showToast(_this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
                });
              } else {
                _this.helperService.hide();

                _this.helperService.showToast(_this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
              }
            });
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-password.page.scss */
        "./src/app/forgot-password/forgot-password.page.scss"))["default"]]
      })], ForgotPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map