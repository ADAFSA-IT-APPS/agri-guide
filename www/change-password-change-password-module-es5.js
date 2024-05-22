(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'changePassword' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"changeForm\" novalidate>\n    <ion-item class=\"ion-margin-vertical\">\n      <ion-label position=\"stacked\" color=\"secondary\">{{\"password\" | translate}}</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"submitted && f.password.invalid\">\n      <span *ngIf=\"f.password.errors.required\">{{'required' | translate}}</span>\n      <span *ngIf=\"f.password.errors.pattern || f.password.errors.minlength\">\n        {{'passwordValidation' | translate}}\n      </span>\n    </ion-text>\n    <ion-item class=\"ion-margin-vertical\">\n      <ion-label position=\"stacked\" color=\"secondary\">{{\"confirmPassword\" | translate}}</ion-label>\n      <ion-input type=\"password\" formControlName=\"cpassword\"></ion-input>\n    </ion-item>\n    <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"submitted && f.cpassword.invalid\">\n      <span *ngIf=\"f.cpassword.errors.required\">{{'required' | translate}}</span>\n      <span *ngIf=\"f.cpassword.errors.MatchPassword\">{{'passwordMismatch' | translate}}</span>\n    </ion-text>\n    <div class=\"footer\">\n      <div class=\"login\">\n        <ion-button color=\"primary\" (click)=\"submit()\">{{\"changePassword\" | translate}}\n        </ion-button>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n";
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
    "./src/app/change-password/change-password-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/change-password/change-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function srcAppChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/change-password/change-password.page.ts");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }];

      var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/change-password/change-password.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/change-password/change-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function srcAppChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "./src/app/change-password/change-password-routing.module.ts");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/change-password/change-password.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/change-password/change-password.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/change-password/change-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0px !important;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\n.footer {\n  margin-top: 60px;\n  text-align: center;\n}\n\n.footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n\n.footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEUTtFQUdJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFDWjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFDUTtFQUdJLGlDQUFBO0VBQ0EsaUJBQUE7QUFEWjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmxvZ2luIHtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjZDRjlGLCAjMmRmOGFiKTtcbiAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVnaXN0ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDAgM3B4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhYmVsLXN0YWNrZWR7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/change-password/change-password.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/change-password/change-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function srcAppChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
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


      var src_app_validators_validators_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_validators/validators.password */
      "./src/app/_validators/validators.password.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/authentication.service */
      "./src/app/_services/authentication.service.ts");

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(formBuilder, service, helperService, authService) {
          _classCallCheck(this, ChangePasswordPage);

          this.formBuilder = formBuilder;
          this.service = service;
          this.helperService = helperService;
          this.authService = authService;
          this.submitted = false;
          this.changeForm = formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,50}')])],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: src_app_validators_validators_password__WEBPACK_IMPORTED_MODULE_3__["PasswordValidation"].MatchPassword
          });
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "f",
          get: function get() {
            return this.changeForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.submitted = true;

            if (this.changeForm.invalid) {
              return;
            }

            this.helperService.show();
            var payload = {
              "password": window.btoa(this.changeForm.value.password)
            };
            this.service.changePassword(payload).subscribe(function (_res) {
              _this.helperService.hide();

              if (_res.code == "MSG200") {
                _this.helperService.showToast(_this.helperService.translate('successfullyUpdated'), 'success', 'bottom');

                setTimeout(function () {
                  _this.authService.logout();
                }, 1000);
              } else {//this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom')
              }
            });
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./change-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./change-password.page.scss */
        "./src/app/change-password/change-password.page.scss"))["default"]]
      })], ChangePasswordPage);
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
//# sourceMappingURL=change-password-change-password-module-es5.js.map