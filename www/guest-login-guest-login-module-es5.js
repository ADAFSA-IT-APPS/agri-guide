(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guest-login-guest-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/otp/otp.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/otp/otp.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentOtpOtpComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">\n        <ion-icon name=\"arrow-back\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'EnterOTP' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{'EnterOTP' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-label>\n    <p class=\"ion-padding-horizontal\">{{'EnterThe6DigitCodeWeHaveSentToYourMobileToContinue' | translate}}</p>\n  </ion-label>\n  <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [(ngModel)]=\"otp\" [config]=\"{length:6, allowNumbersOnly:true}\"></ng-otp-input>\n  <ion-item lines=\"none\" class=\"otp-expire ion-text-center\">\n    <ion-label>\n      <p *ngIf=\"!otpExpired\">{{'OTPExpiresIn' | translate}} {{timeLeft}}</p>\n      <p *ngIf=\"otpExpired\">{{'OTPExpired' | translate}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"resend-otp ion-text-center\" (click)=\"resendOTP()\" *ngIf=\"otpExpired\">\n    <div class=\"ion-text-center ro-icon-wrapper\">\n      <div class=\"ro-icon\">\n      <img [src]=\"['../../../assets/resend.svg']\" />\n    </div>\n    <ion-label class=\"ion-margin-top\">{{'RESEND' | translate}}</ion-label>\n    </div>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/guest-login/guest-login.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guest-login/guest-login.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGuestLoginGuestLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"guestAccount\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <form [formGroup]=\"registerForm\" novalidate>\n    <div class=\"content\">\n      <div class=\"logo\">\n        <ion-img src=\"./assets/guest-logo.svg\"></ion-img>\n      </div>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"name\" | translate}}</ion-label>\n        <ion-input type=\"text\" formControlName=\"Name\"></ion-input>\n      </ion-item>\n      <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"submitted && f.Name.invalid\">\n        <span *ngIf=\"f.Name.errors.required\">{{'required' | translate}}</span>\n      </ion-text>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"email\" | translate}} ({{\"optional\" | translate}})</ion-label>\n        <ion-input type=\"email\" formControlName=\"Email\"></ion-input>\n      </ion-item>\n      \n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"mobileNumber\" | translate}}</ion-label>\n        <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"Mobile\"></ion-input>\n      </ion-item>\n      <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"submitted && f.Mobile.invalid\">\n        <span *ngIf=\"f.Mobile.errors.required\">{{'required' | translate}}</span>\n        <span *ngIf=\"f.Mobile.errors?.pattern\">{{'invalidPhone' | translate}}</span>\n      </ion-text>\n      <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"f.Mobile.errors?.existingMobile\">\n        <span>{{'mobileExists' | translate}}</span>\n      </ion-text>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"enterPassword\" | translate}}</ion-label>\n        <ion-input type=\"password\" formControlName=\"Password\"></ion-input>\n      </ion-item>\n      <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"submitted && f.Password.invalid\">\n        <span *ngIf=\"f.Password.errors.required\">{{'required' | translate}}</span>\n      </ion-text>\n    </div>\n    <div class=\"footer\">\n      <div class=\"login\">\n        <ion-button color=\"primary\" (click)=\"submit()\">{{\"registerAccount\" | translate}}\n        </ion-button>\n      </div>\n    </div>\n  </form>\n  </div>\n</ion-content>";
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
    "./src/app/common-component/otp/otp.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/common-component/otp/otp.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentOtpOtpComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\n::ng-deep ng-otp-input {\n  width: 100%;\n}\n\n::ng-deep ng-otp-input .wrapper {\n  display: flex;\n  justify-content: center;\n  margin-top: 40%;\n}\n\n::ng-deep ng-otp-input .wrapper .otp-input {\n  width: 15% !important;\n  height: 50px !important;\n  max-width: 50px;\n}\n\n.otp-expire {\n  margin-top: 20px;\n}\n\n.otp-expire ion-label p {\n  color: red;\n}\n\n.ro-icon-wrapper {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9vdHAvb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDUjs7QUFBUTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRVo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVRO0VBQ0ksVUFBQTtBQUFaOztBQUtBO0VBQ0ksV0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9vdHAvb3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBuZy1vdHAtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLndyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNDAlO1xuICAgICAgICAub3RwLWlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3RwLWV4cGlyZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yby1pY29uLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common-component/otp/otp.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/common-component/otp/otp.component.ts ***!
      \*******************************************************/

    /*! exports provided: OtpComponent */

    /***/
    function srcAppCommonComponentOtpOtpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpComponent", function () {
        return OtpComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");

      var OtpComponent = /*#__PURE__*/function () {
        function OtpComponent(modalController, helperService, toastController, service, router) {
          _classCallCheck(this, OtpComponent);

          this.modalController = modalController;
          this.helperService = helperService;
          this.toastController = toastController;
          this.service = service;
          this.router = router;
          this.otpExpired = false;
        }

        _createClass(OtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.startTimer();
            console.log('payload', this.data);
          }
        }, {
          key: "onOtpChange",
          value: function onOtpChange(_ev) {
            if (_ev.length == 6) {
              this.otp = _ev; //this.modalController.dismiss({code: _ev});

              this.verifyOtp();
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.modalController.dismiss();
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this = this;

            var timer = 120;
            var minutes;
            var seconds;
            this.unsubscribe = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000).subscribe(function (x) {
              minutes = Math.floor(timer / 60);
              seconds = Math.floor(timer % 60);
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;
              _this.timeLeft = minutes + ":" + seconds;
              timer--;

              if (timer < 0) {
                _this.timeLeft = 0;
                _this.otpExpired = true;

                _this.unsubscribe.unsubscribe();
              }
            });
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp() {
            var _this2 = this;

            var payload = {
              "refCode": this.data.refCode,
              "OTP": this.otp
            };
            this.helperService.show();
            this.service.verifyOTP(payload).subscribe(function (_res) {
              if (_res.code != 'FG400-VOTP') {
                _this2.register(_this2.data.user);
              } else {
                _this2.helperService.hide();

                _this2.showToast(_res.msg, 'danger', 'bottom');
              }
            });
          }
        }, {
          key: "resendOTP",
          value: function resendOTP() {
            var _this3 = this;

            this.service.generateOTP(this.data.user.mobile).subscribe(function (_res) {
              _this3.showToast(_res.otp, 'success', 'bottom');

              _this3.timeLeft = 0;
              _this3.otpExpired = false;

              _this3.startTimer();
            });
          }
        }, {
          key: "showToast",
          value: function showToast(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 5000,
                        color: colors,
                        position: positon
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "register",
          value: function register(_payload) {
            var _this4 = this;

            this.service.register(_payload).subscribe(function (_res) {
              _this4.modalController.dismiss();

              _this4.helperService.hide();

              _this4.router.navigate(['/member-login']);

              _this4.helperService.showToast(_this4.helperService.translate('successfullyRegistered'), 'success', 'bottom');
            });
          }
        }]);

        return OtpComponent;
      }();

      OtpComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      OtpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otp.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/otp/otp.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otp.component.scss */
        "./src/app/common-component/otp/otp.component.scss"))["default"]]
      })], OtpComponent);
      /***/
    },

    /***/
    "./src/app/guest-login/guest-login-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/guest-login/guest-login-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: GuestLoginPageRoutingModule */

    /***/
    function srcAppGuestLoginGuestLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuestLoginPageRoutingModule", function () {
        return GuestLoginPageRoutingModule;
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


      var _guest_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guest-login.page */
      "./src/app/guest-login/guest-login.page.ts");

      var routes = [{
        path: '',
        component: _guest_login_page__WEBPACK_IMPORTED_MODULE_3__["GuestLoginPage"]
      }];

      var GuestLoginPageRoutingModule = function GuestLoginPageRoutingModule() {
        _classCallCheck(this, GuestLoginPageRoutingModule);
      };

      GuestLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GuestLoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/guest-login/guest-login.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/guest-login/guest-login.module.ts ***!
      \***************************************************/

    /*! exports provided: GuestLoginPageModule */

    /***/
    function srcAppGuestLoginGuestLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuestLoginPageModule", function () {
        return GuestLoginPageModule;
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


      var _guest_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guest-login-routing.module */
      "./src/app/guest-login/guest-login-routing.module.ts");
      /* harmony import */


      var _guest_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guest-login.page */
      "./src/app/guest-login/guest-login.page.ts");
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

      var GuestLoginPageModule = function GuestLoginPageModule() {
        _classCallCheck(this, GuestLoginPageModule);
      };

      GuestLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _guest_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuestLoginPageRoutingModule"]],
        providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]],
        declarations: [_guest_login_page__WEBPACK_IMPORTED_MODULE_6__["GuestLoginPage"]]
      })], GuestLoginPageModule);
      /***/
    },

    /***/
    "./src/app/guest-login/guest-login.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/guest-login/guest-login.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppGuestLoginGuestLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .content ion-item::part(native) {\n  padding: 0;\n}\nion-content .logo {\n  width: 100px;\n  margin: auto;\n  padding: 10px;\n}\nion-content .forgot {\n  padding: 16px;\n  font-size: 0.7rem;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3Vlc3QtbG9naW4vZ3Vlc3QtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUlNO0VBQ0UsVUFBQTtBQURSO0FBS0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFLSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtHO0VBR0MsWUFBQTtFQUNBLGdCQUFBO0VBQ1ksaUNBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQVFFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQU5IO0FBT0c7RUFHQyxpQ0FBQTtFQUNBLGlCQUFBO0FBUEo7QUFhQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVZKO0FBY0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBY0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFYSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUFWSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNRLG1DQUFBO0FBWFo7QUFjRTtFQUNFLDJCQUFBO0VBQ0UsbUJBQUE7QUFYTjtBQWFFO0VBQ0UsMkJBQUE7RUFDRSxtQkFBQTtBQVZOO0FBWUU7RUFDRSwyQkFBQTtFQUNFLG1CQUFBO0FBVE47QUFZRTtFQUNJO0lBQUssVUFBQTtJQUFXLDRCQUFBO0VBUHBCO0VBUUc7SUFBTSxVQUFBO0lBQVcsNEJBQUE7RUFKcEI7RUFLRztJQUFNLFVBQUE7SUFBVywyQkFBQTtFQURwQjtFQUVFO0lBQU8sVUFBQTtJQUFXLDJCQUFBO0VBRXBCO0FBQ0Y7QUFERTtFQUNJO0lBQUssVUFBQTtJQUFXLDRCQUFBO0VBS3BCO0VBSkc7SUFBTSxVQUFBO0lBQVcsNEJBQUE7RUFRcEI7RUFQRztJQUFNLFVBQUE7SUFBVywyQkFBQTtFQVdwQjtFQVZFO0lBQU8sVUFBQTtJQUFXLDJCQUFBO0VBY3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ndWVzdC1sb2dpbi9ndWVzdC1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIGlvbi10aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuaW9uLWNvbnRlbnR7XG4gIC5jb250ZW50e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjo6cGFydChuYXRpdmUpe1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5mb3Jnb3R7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgfVxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0LmxvZ2luIHtcblx0XHRcdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NkNGOUYsICMyZGY4YWIpO1xuXHRcdFx0XHQvL2JvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdGhlaWdodDogNDhweDtcblx0XHRcdFx0bWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5yZWdpc3RlciB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0aW9uLXRleHQge1xuXHRcdFx0XHQvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdC8vdGV4dC1zaGFkb3c6IDAgM3B4IDEwcHggYmxhY2s7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5sYWJlbC1zdGFja2Vke1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbiNhcnJvd0FuaW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFycm93c3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuYXJyb3cge1xuICAgIHdpZHRoOiAuOHJlbTtcbiAgICBoZWlnaHQ6IC44cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuICBcbiAgXG4gIC5hcnJvd1NsaWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlOyBcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuZGVsYXkxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7IFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICAuZGVsYXkyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7IFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgfVxuICAuZGVsYXkzIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7IFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAgIDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pOyB9XHRcbiAgICAgMjAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pOyB9XHRcbiAgICAgODAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cdFxuICAgIDEwMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTsgfVx0XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgICAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTsgfVx0XG4gICAgIDIwJSB7IG9wYWNpdHk6MTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTsgfVx0XG4gICAgIDgwJSB7IG9wYWNpdHk6MTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pOyB9XHRcbiAgICAxMDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7IH1cdFxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/guest-login/guest-login.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/guest-login/guest-login.page.ts ***!
      \*************************************************/

    /*! exports provided: GuestLoginPage */

    /***/
    function srcAppGuestLoginGuestLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuestLoginPage", function () {
        return GuestLoginPage;
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


      var _common_component_otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common-component/otp/otp.component */
      "./src/app/common-component/otp/otp.component.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var GuestLoginPage = /*#__PURE__*/function () {
        function GuestLoginPage(formBuilder, service, helperService, oneSignal, toastController, device) {
          _classCallCheck(this, GuestLoginPage);

          this.formBuilder = formBuilder;
          this.service = service;
          this.helperService = helperService;
          this.oneSignal = oneSignal;
          this.toastController = toastController;
          this.device = device;
          this.submitted = false;
          this.registerForm = formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            Mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)], this.helperService.existingMobileValidator()],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.oneSignal.getIds().then(function (data) {
            console.log('iddddd', data);
            localStorage.setItem('fcm', data.userId);
          });
        }

        _createClass(GuestLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

            this.submitted = true;

            if (this.registerForm.invalid) {
              return;
            }

            this.registerForm.value.deviceIds = localStorage.getItem('fcm');
            this.registerForm.value.Password = window.btoa(this.registerForm.value.Password);
            var payload = {};
            this.service.generateOTP(this.registerForm.value.Mobile).subscribe(function (_res) {
              var _payload = {
                "refCode": _res.refCode,
                "OTP": _res.otp,
                user: _this5.registerForm.value
              };

              _this5.helperService.openModal(_common_component_otp_otp_component__WEBPACK_IMPORTED_MODULE_3__["OtpComponent"], '', _payload);

              _this5.showToast(_res.otp, 'success', 'bottom');
            });
          }
        }, {
          key: "showToast",
          value: function showToast(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 5000,
                        color: colors,
                        position: positon
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return GuestLoginPage;
      }();

      GuestLoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]
        }];
      };

      GuestLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guest-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./guest-login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/guest-login/guest-login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./guest-login.page.scss */
        "./src/app/guest-login/guest-login.page.scss"))["default"]]
      })], GuestLoginPage);
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
//# sourceMappingURL=guest-login-guest-login-module-es5.js.map