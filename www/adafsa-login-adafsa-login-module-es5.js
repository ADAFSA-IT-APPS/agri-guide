(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adafsa-login-adafsa-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adafsa-login/adafsa-login.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adafsa-login/adafsa-login.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdafsaLoginAdafsaLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'back' | translate}}\" color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"ADAFSALogin\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content class=\"ion-padding login-page\" forceOverscroll=\"true\">\n  <div class=\"main\">\n    <div class=\"slideshow\">\n      <ion-slides #bgslides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of slides\">\n          <ion-img [src]=\"item\"></ion-img>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class=\"header\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <div class=\"lang\">\n              <ion-button class=\"ion-no-padding\" (click)=\"changeLng()\">\n                {{selectedLang == 'ar' ? 'en' : 'ar'}}\n                <ion-ripple-effect></ion-ripple-effect>\n              </ion-button>\n              </div>\n          </ion-col>\n          <ion-col size=\"8\">\n              <ion-img src=\"./assets/ADAFSA-logo-w.svg\"></ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <form [formGroup]=\"loginForm\" novalidate>\n      <div class=\"content\">\n        <div class=\"divider\">\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-end\">\n              <ion-col>\n                <div class=\"line\"></div>\n              </ion-col>\n              <ion-col size=\"auto\">\n                <ion-icon name=\"ic-user2\"></ion-icon>\n              </ion-col>\n              <ion-col>\n                <div class=\"line\"></div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <ion-item class=\"ion-margin-top\">\n          <!-- <ion-label position=\"stacked\" color=\"secondary\">{{\"username\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label> -->\n          <ion-icon name=\"ic-user2\" slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"{{'username' | translate}}\" formControlName=\"username\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\" color=\"danger\" *ngIf=\"submitted && f.username.invalid\">\n          <span *ngIf=\"f.username.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.username.errors?.pattern\">{{'invalidPhone' | translate}}</span>\n        </ion-text>\n        <ion-item class=\"ion-margin-top\">\n          <!-- <ion-label position=\"stacked\" color=\"secondary\">{{\"password\" | translate}} <ion-text color=\"danger\" class=\"astrick\">*</ion-text></ion-label> -->\n          <ion-icon name=\"ic-lock\" slot=\"start\"></ion-icon>\n          <ion-input type=\"password\" placeholder=\"{{'password' | translate}}\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <ion-text class=\"required\" color=\"danger\" *ngIf=\"submitted && f.password.invalid\">\n          <span *ngIf=\"f.password.errors?.required\">{{'required' | translate}}</span>\n        </ion-text>\n        <div class=\"login ion-margin-top\">\n          <ion-button expand=\"block\" (click)=\"submit()\">{{\"loginToAccount\" | translate}}</ion-button>\n        </div>\n        <div class=\"ion-margin-top ion-text-center\">\n          <ion-text color=\"light\" class=\"forgot\" (click)=\"goToForgot()\">{{\"forgotYourPassword\" | translate}}</ion-text>\n        </div>\n      </div>\n      <div class=\"footer ion-text-center\">\n        <ion-button (click)=\"goToRegister()\">{{\"registration\" | translate}}</ion-button>\n        <ion-text color=\"light\" class=\"forgot\" (click)=\"guestVisitor()\">{{\"continueAsGuestVisitor\" | translate}}</ion-text>\n      </div>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/_pipes/safe-html.pipe.ts":
    /*!******************************************!*\
      !*** ./src/app/_pipes/safe-html.pipe.ts ***!
      \******************************************/

    /*! exports provided: SafeHtmlPipe */

    /***/
    function srcApp_pipesSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
        return SafeHtmlPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(sanitized) {
          _classCallCheck(this, SafeHtmlPipe);

          this.sanitized = sanitized;
        }

        _createClass(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.sanitized.bypassSecurityTrustHtml(value);
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      };

      SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'safeHtml'
      })], SafeHtmlPipe);
      /***/
    },

    /***/
    "./src/app/adafsa-login/adafsa-login-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/adafsa-login/adafsa-login-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AdafsaLoginPageRoutingModule */

    /***/
    function srcAppAdafsaLoginAdafsaLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdafsaLoginPageRoutingModule", function () {
        return AdafsaLoginPageRoutingModule;
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


      var _adafsa_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adafsa-login.page */
      "./src/app/adafsa-login/adafsa-login.page.ts");

      var routes = [{
        path: '',
        component: _adafsa_login_page__WEBPACK_IMPORTED_MODULE_3__["AdafsaLoginPage"]
      }];

      var AdafsaLoginPageRoutingModule = function AdafsaLoginPageRoutingModule() {
        _classCallCheck(this, AdafsaLoginPageRoutingModule);
      };

      AdafsaLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdafsaLoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adafsa-login/adafsa-login.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/adafsa-login/adafsa-login.module.ts ***!
      \*****************************************************/

    /*! exports provided: AdafsaLoginPageModule */

    /***/
    function srcAppAdafsaLoginAdafsaLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdafsaLoginPageModule", function () {
        return AdafsaLoginPageModule;
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


      var _adafsa_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adafsa-login-routing.module */
      "./src/app/adafsa-login/adafsa-login-routing.module.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _adafsa_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./adafsa-login.page */
      "./src/app/adafsa-login/adafsa-login.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var AdafsaLoginPageModule = function AdafsaLoginPageModule() {
        _classCallCheck(this, AdafsaLoginPageModule);
      };

      AdafsaLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _adafsa_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdafsaLoginPageRoutingModule"]],
        providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]],
        declarations: [_adafsa_login_page__WEBPACK_IMPORTED_MODULE_7__["AdafsaLoginPage"]]
      })], AdafsaLoginPageModule);
      /***/
    },

    /***/
    "./src/app/adafsa-login/adafsa-login.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/adafsa-login/adafsa-login.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdafsaLoginAdafsaLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content {\n  --background: rgba(217, 199, 158, .4);\n  background: #fff;\n}\nion-content .main {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n}\nion-content .main .slideshow {\n  position: absolute;\n  top: -16px;\n  bottom: -16px;\n  left: -16px;\n  right: -16px;\n  z-index: 0;\n}\nion-content .main .slideshow ion-slides {\n  height: 100%;\n  direction: ltr;\n}\nion-content .main .slideshow ion-slides ion-slide.swiper-slide-active ion-img {\n  transition: all 8s ease !important;\n  transform: scale(1.2) !important;\n}\nion-content .main .slideshow ion-slides ion-slide:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\nion-content .main .slideshow ion-slides ion-slide ion-img {\n  height: 100%;\n  width: 100%;\n}\nion-content .main .slideshow ion-slides ion-slide ion-img::part(image) {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n}\nion-content .header {\n  margin-top: 24px;\n}\nion-content .header .lang ion-button {\n  width: 36px;\n  height: 36px;\n  --background: #E7E6E6;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --color: #7E7E77;\n  --color-activated: #E7E6E6;\n}\nion-content .content {\n  position: relative;\n}\nion-content .content ion-item {\n  --highlight-background: transparent !important;\n  --border-radius: 10px;\n  --border-width: 1px;\n  --min-height: 36px !important;\n  --border-color: #D0D0D0;\n  --inner-border-width: 0;\n  --background: transparent;\n  --color: #fff;\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\nion-content .content ion-item ion-icon {\n  margin-inline: 0 8px !important;\n  width: 24px;\n}\nion-content .content ion-item ion-input {\n  border-left: 1px solid #fff;\n  --padding-start: 5px;\n}\nion-content .content .login ion-button {\n  --background: rgb(255 255 255 / 40%);\n  --background-activated: rgb(204 159 83 / 40%);\n}\nion-content .divider {\n  font-size: 3rem;\n  color: #fff;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\nion-content .divider .line {\n  height: 2px;\n  background: #fff;\n  margin-bottom: 12px;\n  border-radius: 25px;\n}\nion-content .divider ion-icon {\n  margin: 0 16px;\n}\nion-content .forgot {\n  padding: 16px 0;\n  font-size: 1rem;\n}\nion-content .footer {\n  margin-top: 36px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n}\nion-content .footer ion-button {\n  --background: rgb(255 255 255 / 40%);\n  --background-activated: rgb(204 159 83 / 40%);\n}\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n.required {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRhZnNhLWxvZ2luL2FkYWZzYS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUVKO0FBREk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBR047QUFGTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBSVI7QUFDWTtFQUNFLGtDQUFBO0VBQ0EsZ0NBQUE7QUFDZDtBQUtVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUhaO0FBS1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUhWO0FBSVU7RUFDRSwrQkFBQTtLQUFBLDRCQUFBO0FBRlo7QUFTRTtFQUNFLGdCQUFBO0FBUEo7QUFTTTtFQUNFLFdBQUE7RUFDSixZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVBKO0FBV0U7RUFDRSxrQkFBQTtBQVRKO0FBVUk7RUFDRSw4Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFZTTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtBQVZSO0FBWU07RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0FBVlI7QUFjTTtFQUNFLG9DQUFBO0VBQ0osNkNBQUE7QUFaSjtBQWdCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFkSjtBQWVJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDRixtQkFBQTtBQWJKO0FBZUU7RUFDRSxjQUFBO0FBYko7QUFnQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQWRSO0FBZ0JJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFkUjtBQWVRO0VBQ0Usb0NBQUE7RUFDSiw2Q0FBQTtBQWJOO0FBa0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBZkY7QUFtQkE7RUFDRSxpQkFBQTtBQWhCRiIsImZpbGUiOiJzcmMvYXBwL2FkYWZzYS1sb2dpbi9hZGFmc2EtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMTcsIDE5OSwgMTU4LCAuNCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC5tYWlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuc2xpZGVzaG93e1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTZweDtcbiAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICBsZWZ0OiAtMTZweDtcbiAgICAgIHJpZ2h0OiAtMTZweDtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgICBpb24tc2xpZGVze1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICBpb24tc2xpZGV7XG4gICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgICAgICAgJi5zd2lwZXItc2xpZGUtYWN0aXZle1xuICAgICAgICAgICAgaW9uLWltZ3tcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDhzIGVhc2UgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICY6OnBhcnQoaW1hZ2Upe1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIC5sYW5ne1xuICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC0tYmFja2dyb3VuZDogI0U3RTZFNjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtLWNvbG9yOiAjN0U3RTc3O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjRTdFNkU2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udGVudHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW9uLWl0ZW17XG4gICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIC0tbWluLWhlaWdodDogMzZweCAhaW1wb3J0YW50O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNEMEQwRDA7XG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC8vIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBpb24taWNvbntcbiAgICAgICAgbWFyZ2luLWlubGluZTogMCA4cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICB9XG4gICAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dpbntcbiAgICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gNDAlKTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjA0IDE1OSA4MyAvIDQwJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kaXZpZGVyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLmxpbmUge1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB9XG4gIGlvbi1pY29ue1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG59XG4gICAgLmZvcmdvdHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSAvIDQwJSk7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjA0IDE1OSA4MyAvIDQwJSk7XG4gICAgICAgIH1cblx0fVxufVxuXG4ubGFiZWwtc3RhY2tlZHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbi5yZXF1aXJlZHtcbiAgZm9udC1zaXplOiAuN3JlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/adafsa-login/adafsa-login.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/adafsa-login/adafsa-login.page.ts ***!
      \***************************************************/

    /*! exports provided: AdafsaLoginPage */

    /***/
    function srcAppAdafsaLoginAdafsaLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdafsaLoginPage", function () {
        return AdafsaLoginPage;
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


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var AdafsaLoginPage = /*#__PURE__*/function () {
        function AdafsaLoginPage(authService, formBuilder, service, nav, helperService, translate, router, oneSignal, device) {
          var _this = this;

          _classCallCheck(this, AdafsaLoginPage);

          this.authService = authService;
          this.formBuilder = formBuilder;
          this.service = service;
          this.nav = nav;
          this.helperService = helperService;
          this.translate = translate;
          this.router = router;
          this.oneSignal = oneSignal;
          this.device = device;
          this.submitted = false;
          this.selectedLang = 'ar';
          this.slideOpts = {
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
                var overwriteParams = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: true,
                  spaceBetween: 0,
                  virtualTranslate: true,
                  autoplay: true
                };
                swiper.params = Object.assign(swiper.params, overwriteParams);
                swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                this.setTranslate();
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var slides = swiper.slides;

                for (var i = 0; i < slides.length; i += 1) {
                  var $slideEl = swiper.slides.eq(i);
                  var offset$$1 = $slideEl[0].swiperSlideOffset;
                  var tx = -offset$$1;
                  if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                  var ty = 0;

                  if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                  }

                  var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                  $slideEl.css({
                    opacity: slideOpacity
                  }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                var slides = swiper.slides,
                    $wrapperEl = swiper.$wrapperEl;
                slides.transition(duration);

                if (swiper.params.virtualTranslate && duration !== 0) {
                  var eventTriggered = false;
                  slides.transitionEnd(function () {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                      $wrapperEl.trigger(triggerEvents[i]);
                    }
                  });
                }
              }
            }
          };
          var currentInd = 0;
          this.slideInterval = setInterval(function () {
            if (currentInd >= 4) {
              currentInd = 0;
            }

            _this.ionSlides.slideTo(currentInd);

            currentInd++;
          }, 5000);
          this.slides = ['./assets/slides/slide1.jpg', './assets/slides/slide2.jpg', './assets/slides/slide3.jpg', './assets/slides/slide4.jpg', './assets/slides/slide5.jpg'];
          this.oneSignal.getIds().then(function (data) {
            console.log('iddddd', data);
            localStorage.setItem('fcm', data.userId);
          });
          this.loginForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(AdafsaLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('language')) {
              this.selectedLang = localStorage.getItem('language');
            } else {
              this.selectedLang = this.translate.currentLang;
            }
          }
        }, {
          key: "changeLng",
          value: function changeLng() {
            if (this.selectedLang == 'en') {
              this.selectedLang = 'ar';
              this.translate.use(this.selectedLang);
              this.helperService.setDir('rtl');
              localStorage.setItem('language', this.selectedLang);
            } else {
              this.selectedLang = 'en';
              this.translate.use(this.selectedLang);
              this.helperService.setDir('ltr');
              localStorage.setItem('language', this.selectedLang);
            }

            location.reload();
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/registration']);
          }
        }, {
          key: "guestVisitor",
          value: function guestVisitor() {
            localStorage.setItem('guest', '1');
            localStorage.removeItem('notifications');
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "goToForgot",
          value: function goToForgot() {
            this.router.navigate(['/forgot-password']);
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

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
              UserName: this.helperService.EncryptData(this.loginForm.value.username),
              Password: this.helperService.EncryptData(this.loginForm.value.password),
              DeviceIds: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
            };
            var _payload2 = {
              p1: P1,
              p2: P2
            };
            this.service.getServerTime(_payload2).subscribe(function (_res1) {
              console.log('serverDate', _res1.result.serverDate);
              _payload.p2 = _this2.helperService.getDateInUtc(_res1.result.GetServerDateTimeResult.serverDate);
              _payload.p1 = _this2.helperService.EncryptData(_payload.p2);

              _this2.authService.adafsalogin(_payload).subscribe(function (_res) {
                if (_res.statusCode != 200) {
                  _this2.helperService.showToast(_res.result.msg, 'danger', 'bottom');

                  _this2.helperService.hide();
                } else {
                  localStorage.setItem('adafsacurrentUser', JSON.stringify(_res.result.data));

                  _this2.service.getProfile().subscribe(function (_res1) {
                    _this2.helperService.hide();

                    if (localStorage.getItem('currentUser')) {
                      if (JSON.parse(localStorage.getItem('currentUser')).usersId != _res1.usersId) {
                        localStorage.removeItem('notifications');
                        localStorage.removeItem('generalNotifications');
                      }
                    }

                    localStorage.setItem('currentUser', JSON.stringify(_res1));
                    _this2.userDetails = _res1;

                    if (!_this2.userDetails.selectedCategories) {
                      _this2.nav.navigateRoot(['/filter-subject']);
                    } else {
                      _this2.nav.navigateRoot(['/tabs/home']);
                    }
                  });
                }
              }, function (error) {
                _this2.helperService.hide();

                _this2.helperService.showToast(_this2.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
              });
            });
          }
        }]);

        return AdafsaLoginPage;
      }();

      AdafsaLoginPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
        }];
      };

      AdafsaLoginPage.propDecorators = {
        ionSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['bgslides']
        }]
      };
      AdafsaLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adafsa-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adafsa-login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adafsa-login/adafsa-login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adafsa-login.page.scss */
        "./src/app/adafsa-login/adafsa-login.page.scss"))["default"]]
      })], AdafsaLoginPage);
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_pipes/safe-html.pipe */
      "./src/app/_pipes/safe-html.pipe.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]]
      })], SharedModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=adafsa-login-adafsa-login-module-es5.js.map