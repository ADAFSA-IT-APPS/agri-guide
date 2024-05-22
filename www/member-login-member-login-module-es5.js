(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-login-member-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/member-login/member-login.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member-login/member-login.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMemberLoginMemberLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{\"membersLogin\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <form [formGroup]=\"loginForm\" novalidate>\n      <div class=\"content\">\n        <div class=\"logo\">\n          <ion-img src=\"./assets/login-logo.svg\"></ion-img>\n        </div>\n        <ion-item class=\"ion-margin-vertical\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"mobileNumber\" | translate}}</ion-label>\n          <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"username\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"submitted && f.username.invalid\">\n          <span *ngIf=\"f.username.errors.required\">{{'required' | translate}}</span>\n          <span *ngIf=\"f.username.errors?.pattern\">{{'invalidPhone' | translate}}</span>\n        </ion-text>\n        <ion-item class=\"ion-margin-vertical\">\n          <ion-label position=\"stacked\" color=\"secondary\">{{\"password\" | translate}}</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" *ngIf=\"submitted && f.password.invalid\">\n          <span *ngIf=\"f.password.errors?.required\">{{'required' | translate}}</span>\n        </ion-text>\n        <div>\n          <ion-text color=\"secondary\" class=\"forgot\" (click)=\"goToForgot()\">{{\"forgotYourPassword\" | translate}}</ion-text>\n        </div>\n      </div>\n      <div class=\"footer\">\n        <div class=\"login\">\n          <ion-button color=\"primary\" (click)=\"submit()\">{{\"loginToAccount\" | translate}}\n            <div class=\"arrows\">\n              <div id=\"arrowAnim\">\n                <div class=\"arrowSliding\">\n                  <div class=\"arrow\"></div>\n                </div>\n                <div class=\"arrowSliding delay1\">\n                  <div class=\"arrow\"></div>\n                </div>\n                <div class=\"arrowSliding delay2\">\n                  <div class=\"arrow\"></div>\n                </div>\n                <div class=\"arrowSliding delay3\">\n                  <div class=\"arrow\"></div>\n                </div>\n              </div>\n            </div>\n          </ion-button>\n          <ion-text color=\"dark\" class=\"forgot\" (click)=\"guestVisitor()\">{{\"continueAsGuestVisitor\" | translate}}</ion-text>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>";
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
    "./src/app/member-login/member-login-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/member-login/member-login-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MemberLoginPageRoutingModule */

    /***/
    function srcAppMemberLoginMemberLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberLoginPageRoutingModule", function () {
        return MemberLoginPageRoutingModule;
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


      var _member_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./member-login.page */
      "./src/app/member-login/member-login.page.ts");

      var routes = [{
        path: '',
        component: _member_login_page__WEBPACK_IMPORTED_MODULE_3__["MemberLoginPage"]
      }];

      var MemberLoginPageRoutingModule = function MemberLoginPageRoutingModule() {
        _classCallCheck(this, MemberLoginPageRoutingModule);
      };

      MemberLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MemberLoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/member-login/member-login.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/member-login/member-login.module.ts ***!
      \*****************************************************/

    /*! exports provided: MemberLoginPageModule */

    /***/
    function srcAppMemberLoginMemberLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberLoginPageModule", function () {
        return MemberLoginPageModule;
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


      var _member_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./member-login-routing.module */
      "./src/app/member-login/member-login-routing.module.ts");
      /* harmony import */


      var _member_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./member-login.page */
      "./src/app/member-login/member-login.page.ts");
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

      var MemberLoginPageModule = function MemberLoginPageModule() {
        _classCallCheck(this, MemberLoginPageModule);
      };

      MemberLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _member_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["MemberLoginPageRoutingModule"]],
        providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]],
        declarations: [_member_login_page__WEBPACK_IMPORTED_MODULE_6__["MemberLoginPage"]]
      })], MemberLoginPageModule);
      /***/
    },

    /***/
    "./src/app/member-login/member-login.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/member-login/member-login.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMemberLoginMemberLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .content ion-item::part(native) {\n  padding: 0;\n}\nion-content .logo {\n  width: 150px;\n  margin: auto;\n  padding: 10px;\n}\nion-content .forgot {\n  padding: 16px 0;\n  font-size: 0.7rem;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWxvZ2luL21lbWJlci1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBSU07RUFDRSxVQUFBO0FBRFI7QUFLSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUhSO0FBS0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUhSO0FBSUU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZOO0FBR0c7RUFHQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDWSxpQ0FBQTtFQUNBLGlCQUFBO0FBSGhCO0FBTUU7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBSkg7QUFLRztFQUdDLGlDQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQVdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUkY7QUFXQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUko7QUFXRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVJKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQVBKO0FBV0U7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ1EsbUNBQUE7QUFSWjtBQVdFO0VBQ0UsMkJBQUE7RUFDRSxtQkFBQTtBQVJOO0FBVUU7RUFDRSwyQkFBQTtFQUNFLG1CQUFBO0FBUE47QUFTRTtFQUNFLDJCQUFBO0VBQ0UsbUJBQUE7QUFOTjtBQVNFO0VBQ0k7SUFBSyxVQUFBO0lBQVcsNEJBQUE7RUFKcEI7RUFLRztJQUFNLFVBQUE7SUFBVyw0QkFBQTtFQURwQjtFQUVHO0lBQU0sVUFBQTtJQUFXLDJCQUFBO0VBRXBCO0VBREU7SUFBTyxVQUFBO0lBQVcsMkJBQUE7RUFLcEI7QUFDRjtBQUpFO0VBQ0k7SUFBSyxVQUFBO0lBQVcsNEJBQUE7RUFRcEI7RUFQRztJQUFNLFVBQUE7SUFBVyw0QkFBQTtFQVdwQjtFQVZHO0lBQU0sVUFBQTtJQUFXLDJCQUFBO0VBY3BCO0VBYkU7SUFBTyxVQUFBO0lBQVcsMkJBQUE7RUFpQnBCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXItbG9naW4vbWVtYmVyLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgLmNvbnRlbnR7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmZvcmdvdHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICB9XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQubG9naW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzY2Q0Y5RiwgIzJkZjhhYik7XG5cdFx0XHRcdC8vYm9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnJlZ2lzdGVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRpb24tdGV4dCB7XG5cdFx0XHRcdC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Ly90ZXh0LXNoYWRvdzogMCAzcHggMTBweCBibGFjaztcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmxhYmVsLXN0YWNrZWR7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2Fycm93QW5pbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuYXJyb3dze1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hcnJvdyB7XG4gICAgd2lkdGg6IC44cmVtO1xuICAgIGhlaWdodDogLjhyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIFxuICBcbiAgLmFycm93U2xpZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSA0cyBsaW5lYXIgaW5maW5pdGU7IFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSA0cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5kZWxheTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIC5kZWxheTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICB9XG4gIC5kZWxheTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzczsgXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgICAgMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7IH1cdFxuICAgICAyMCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7IH1cdFxuICAgICA4MCUgeyBvcGFjaXR5OjE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTsgfVx0XG4gICAgMTAwJSB7IG9wYWNpdHk6MDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pOyB9XHRcbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAgIDAlIHsgb3BhY2l0eTowOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pOyB9XHRcbiAgICAgMjAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pOyB9XHRcbiAgICAgODAlIHsgb3BhY2l0eToxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cdFxuICAgIDEwMCUgeyBvcGFjaXR5OjA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKTsgfVx0XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/member-login/member-login.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/member-login/member-login.page.ts ***!
      \***************************************************/

    /*! exports provided: MemberLoginPage */

    /***/
    function srcAppMemberLoginMemberLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberLoginPage", function () {
        return MemberLoginPage;
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

      var MemberLoginPage = /*#__PURE__*/function () {
        function MemberLoginPage(authService, formBuilder, service, nav, helperService, router, oneSignal, device) {
          _classCallCheck(this, MemberLoginPage);

          this.authService = authService;
          this.formBuilder = formBuilder;
          this.service = service;
          this.nav = nav;
          this.helperService = helperService;
          this.router = router;
          this.oneSignal = oneSignal;
          this.device = device;
          this.submitted = false;
          this.oneSignal.getIds().then(function (data) {
            console.log('iddddd', data);
            localStorage.setItem('fcm', data.userId);
          });
          this.loginForm = formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            //username: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(MemberLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            var _this = this;

            this.submitted = true;

            if (this.loginForm.invalid) {
              return;
            }

            this.helperService.show();
            var _payload = {
              username: this.loginForm.value.username,
              password: window.btoa(this.loginForm.value.password),
              deviceIds: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
            };
            this.authService.login(_payload).subscribe(function (_res) {
              if (_res.message) {
                _this.helperService.showToast(_res.message, 'danger', 'bottom');

                _this.helperService.hide();
              } else {
                _this.service.getProfile().subscribe(function (_res) {
                  _this.helperService.hide();

                  localStorage.setItem('adafsacurrentUser', JSON.stringify(_res));
                  _this.userDetails = _res;

                  if (!_this.userDetails.selectedCategories) {
                    _this.router.navigate(['/filter-subject']);
                  } else {
                    _this.nav.navigateRoot(['/tabs/home']); //this.router.navigate(['/tabs/home']);

                  }
                });
              } //[routerLink]="[ '/filter-subject']"

            });
          }
        }, {
          key: "guestVisitor",
          value: function guestVisitor() {
            localStorage.setItem('guest', '1');
            localStorage.removeItem('notifications');
            this.router.navigate(['/tabs/home']);
          }
        }]);

        return MemberLoginPage;
      }();

      MemberLoginPage.ctorParameters = function () {
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
        }];
      };

      MemberLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./member-login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/member-login/member-login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./member-login.page.scss */
        "./src/app/member-login/member-login.page.scss"))["default"]]
      })], MemberLoginPage);
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
//# sourceMappingURL=member-login-member-login-module-es5.js.map