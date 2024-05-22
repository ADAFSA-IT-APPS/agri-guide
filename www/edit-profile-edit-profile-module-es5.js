(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"], {
    /***/
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js ***!
      \****************************************************************************/

    /*! exports provided: WebView */

    /***/
    function node_modulesIonicNativeIonicWebview__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebView", function () {
        return WebView;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var WebView =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebView, _super);

        function WebView() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Object.defineProperty(WebView.prototype, "convertFileSrc", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "convertFileSrc");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "convertFileSrc", value);
          },
          enumerable: false,
          configurable: true
        });
        WebView.pluginName = "WebView";
        WebView.plugin = "cordova-plugin-ionic-webview";
        WebView.pluginRef = "window.Ionic.WebView";
        WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
        WebView.platforms = ["Android", "iOS"];
        WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";

        WebView.ɵfac = function WebView_Factory(t) {
          return ɵWebView_BaseFactory(t || WebView);
        };

        WebView.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: WebView,
          factory: function factory(t) {
            return WebView.ɵfac(t);
          }
        });

        var ɵWebView_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](WebView);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebView, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return WebView;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaW9uaWMtd2Vidmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDaEY7QUFHcUIsSUE0QlEsMkJBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSwwQkFHOUYsbUNBQWM7QUFBSTtBQUVvQztBQUFzRjtBQUEyQjtBQUEyQjtBQUFRO0FBQW9DO0FBQXFEO0FBQWdEO0FBQWlGO0FBQTRDOzJDQVJqZCxVQUFVOzs7OzswQkFDTDtBQUFDLGtCQWpDUDtBQUFFLEVBaUMyQixpQkFBaUI7QUFDN0MsU0FEWSxPQUFPO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgV2ViIFZpZXcgdXRpbGl0aWVzLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXdgID4gMi4wLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbSW9uaWMgV2ViIFZpZXddKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcpIHJlcG9zaXRvcnkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb25pYy13ZWJ2aWV3L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VidmlldzogV2ViVmlldykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogaW1nID0gdGhpcy53ZWJ2aWV3LmNvbnZlcnRGaWxlU3JjKCdmaWxlOi8vL1VzZXJzL2Rhbi9jYW1lcmEtaW1hZ2UtMTIzNDUucG5nJylcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJWaWV3JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMtd2VidmlldycsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5Jb25pYy5XZWJWaWV3JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3Jyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlcnQgYSBgZmlsZTovL2AgVVJMIHRvIGEgVVJMIHRoYXQgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBsb2NhbCB3ZWIgc2VydmVyIGluIHRoZSBXZWIgVmlldyBwbHVnaW4uXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgY29udmVydEZpbGVTcmM6ICh1cmw6IHN0cmluZykgPT4gc3RyaW5nO1xufVxuIl19

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"editProfile\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <form [formGroup]=\"editForm\" novalidate>\n    <div class=\"content\">\n      <div class=\"logo\">\n        <img *ngIf=\"image\" (click)=\"selectImage()\" [src]=\"image\" onError=\"this.src='./assets/user.svg'\" src=\"./assets/guest-logo.svg\" />\n        <img *ngIf=\"!image\" (click)=\"selectImage()\" [src]=\"path + profileData?.picture\" onError=\"this.src='./assets/user.svg'\" src=\"./assets/guest-logo.svg\" />\n      </div>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"name\" | translate}}</ion-label>\n        <ion-input type=\"text\" formControlName=\"Name\"></ion-input>\n      </ion-item>\n      <ion-text class=\"ion-padding-horizontal\" color=\"danger\" *ngIf=\"submitted && f.Name.invalid\">\n        <span *ngIf=\"f.Name.errors.required\">{{'required' | translate}}</span>\n      </ion-text>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"email\" | translate}}</ion-label>\n        <ion-input type=\"email\" formControlName=\"Email\" disabled></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"mobileNumber\" | translate}}</ion-label>\n        <ion-input placehoder=\"05x xxx xxxx\" formControlName=\"Mobile\" disabled></ion-input>\n      </ion-item>\n    </div>\n    <div class=\"footer\">\n      <div class=\"login\">\n        <ion-button color=\"primary\" (click)=\"submit()\">{{\"update\" | translate}}\n        </ion-button>\n      </div>\n    </div>\n  </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/edit-profile/edit-profile-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EditProfilePageRoutingModule */

    /***/
    function srcAppEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
        return EditProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/edit-profile/edit-profile.page.ts");

      var routes = [{
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
      }];

      var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
        _classCallCheck(this, EditProfilePageRoutingModule);
      };

      EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/edit-profile/edit-profile.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.module.ts ***!
      \*****************************************************/

    /*! exports provided: EditProfilePageModule */

    /***/
    function srcAppEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
        return EditProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "./src/app/edit-profile/edit-profile-routing.module.ts");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/edit-profile/edit-profile.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");

      var EditProfilePageModule = function EditProfilePageModule() {
        _classCallCheck(this, EditProfilePageModule);
      };

      EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
      })], EditProfilePageModule);
      /***/
    },

    /***/
    "./src/app/edit-profile/edit-profile.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n}\nion-content .logo {\n  width: 100px;\n  margin: auto;\n  padding: 10px;\n}\nion-content .logo img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\nion-content .forgot {\n  padding: 16px 0;\n  font-size: 0.7rem;\n}\nion-content .footer {\n  margin-top: 60px;\n  text-align: center;\n}\nion-content .footer .login ion-button {\n  height: 48px;\n  min-width: 250px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .footer .register {\n  text-align: center;\n  margin-top: 50px;\n}\nion-content .footer .register ion-text {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n.label-stacked {\n  font-size: 18px;\n  font-weight: 500;\n}\n#arrowAnim {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.arrows {\n  width: 50px;\n  margin-left: 10px;\n}\n.arrow {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 2px solid;\n  border-color: white transparent transparent white;\n  transform: rotate(135deg);\n}\n.arrowSliding {\n  position: absolute;\n  -webkit-animation: slide 4s linear infinite;\n  animation: slide 4s linear infinite;\n}\n.delay1 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.delay2 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.delay3 {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-2rem);\n  }\n  20% {\n    opacity: 1;\n    transform: translateX(-1rem);\n  }\n  80% {\n    opacity: 1;\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBSUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1ZO0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQU5oQjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVJaO0FBVVk7RUFHSSxpQ0FBQTtFQUNBLGlCQUFBO0FBVmhCO0FBZ0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBYko7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWRKO0FBaUJBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBZEo7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQWRKO0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0FBZko7QUFrQkE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQWZOO0VBa0JFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBaEJOO0VBbUJFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBakJOO0VBb0JFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBbEJOO0FBQ0Y7QUFxQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQW5CTjtFQXNCRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQXBCTjtFQXVCRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFQXJCTjtFQXdCRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFQXRCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9yZ290IHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NkNGOUYsICMyZGY4YWIpO1xuICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVnaXN0ZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiAwIDNweCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbiNhcnJvd0FuaW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFycm93cyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hcnJvdyB7XG4gICAgd2lkdGg6IC44cmVtO1xuICAgIGhlaWdodDogLjhyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG5cbi5hcnJvd1NsaWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc2xpZGUgNHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uZGVsYXkxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmRlbGF5MiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbi5kZWxheTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcbiAgICB9XG5cbiAgICAyMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xuICAgIH1cblxuICAgIDIwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/edit-profile/edit-profile.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.page.ts ***!
      \***************************************************/

    /*! exports provided: EditProfilePage */

    /***/
    function srcAppEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
        return EditProfilePage;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../_services/util.service */
      "./src/app/_services/util.service.ts");

      var EditProfilePage = /*#__PURE__*/function () {
        function EditProfilePage(camera, formBuilder, service, webView, helperService, router, translate, file, androidPermissions, sanitizer, actionSheetController, util) {
          var _this = this;

          _classCallCheck(this, EditProfilePage);

          this.camera = camera;
          this.formBuilder = formBuilder;
          this.service = service;
          this.webView = webView;
          this.helperService = helperService;
          this.router = router;
          this.translate = translate;
          this.file = file;
          this.androidPermissions = androidPermissions;
          this.sanitizer = sanitizer;
          this.actionSheetController = actionSheetController;
          this.util = util;
          this.submitted = false;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].domain;
          this.editForm = formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            Mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)], this.helperService.existingMobileValidator()]
          });
          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
            return console.log('Has permission?', result.hasPermission);
          }, function (err) {
            return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA);
          });
          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
        }

        _createClass(EditProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('currentUser')) {
              this.getProfile();
            } else {
              this.profileData = JSON.parse(localStorage.getItem('currentUser'));
              this.setDetails();
            }
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this2 = this;

            this.service.getProfile().subscribe(function (_res) {
              localStorage.removeItem('currentUser');
              _this2.profileData = _res;

              _this2.setDetails();

              localStorage.setItem('currentUser', JSON.stringify(_res));
            }, function (error) {});
          }
        }, {
          key: "setDetails",
          value: function setDetails() {
            this.editForm.controls['Name'].setValue(this.profileData.users.name);
            this.editForm.controls['Email'].setValue(this.profileData.users.email);
            this.editForm.controls['Mobile'].setValue(this.profileData.users.mobile);
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
          key: "pickImage",
          value: function pickImage(sourceType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var options;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      options = {
                        quality: 50,
                        sourceType: sourceType,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        allowEdit: false // targetWidth: 100,
                        // targetHeight: 100,
                        // saveToPhotoAlbum: false

                      }; // const tempImage = await this.camera.getPicture(options)
                      // const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
                      // const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
                      // const newBaseFilesystemPath = this.file.dataDirectory;
                      // await this.file.copyFile(tempBaseFilesystemPath, tempFilename,
                      //   newBaseFilesystemPath, tempFilename);
                      // const storedPhoto = newBaseFilesystemPath + tempFilename;
                      // const displayImage = this.webView.convertFileSrc(storedPhoto);
                      // const resolvedImg = this.webView.convertFileSrc(storedPhoto);
                      // this.image = this.sanitizer.bypassSecurityTrustUrl(resolvedImg);

                      _context2.next = 3;
                      return this.camera.getPicture(options).then(function (imageData) {
                        console.log('imageData', imageData);
                        _this4.image = 'data:image/jpeg;base64,' + imageData; //this.image= this.webView.convertFileSrc(imageData);

                        //this.image= this.webView.convertFileSrc(imageData);
                        console.log('image', _this4.image);
                      }, function (err) {// Handle error
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.editForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

            this.submitted = true;

            if (this.editForm.invalid) {
              return;
            }

            var payload = {
              "Name": this.editForm.value.Name,
              "profile": {
                "id": this.profileData.id,
                "preferredLang": this.translate.currentLang,
                "fileContent": this.image ? {
                  "base64": this.image ? this.image : "",
                  "filename": "profile.jpg"
                } : null
              }
            };
            this.service.updateProfile(this.profileData.id, payload).subscribe(function (_res) {
              _this5.helperService.showToast(_this5.helperService.translate('successfullyUpdated'), 'success', 'bottom');

              _this5.getProfile();

              _this5.util.publishProfile('updated');

              _this5.helperService.hide();
            });
          }
        }]);

        return EditProfilePage;
      }();

      EditProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"]
        }];
      };

      EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-profile.page.scss */
        "./src/app/edit-profile/edit-profile.page.scss"))["default"]]
      })], EditProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map