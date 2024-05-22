(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/farm-images/farm-images.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/farm-images/farm-images.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentFarmImagesFarmImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{'viewImages' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon color=\"light\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>{{ details.title }}</ion-text>\n  </div>\n  <!-- <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>What you want Know?</ion-text>\n  </div> -->\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"none\" class=\"ion-no-padding ion-margin-bottom\" *ngFor=\"let image of details.gallery\">\n      <div *ngIf=\"image.type.toLowerCase() == 'picture'\">\n        <img [src]=\"path + image.url\" onError=\"this.src='./assets/no-image.svg'\"/>\n      </div>\n      <div *ngIf=\"image.type == 'video'\" >\n        <iframe width=\"100%\" height=\"300\" [src]=\"getSanitizeUrl(image.url)\">\n        </iframe>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{'myAccount' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!guest\">\n    <ion-segment [(ngModel)]=\"profileTab\" mode=\"md\" color=\"primary\">\n      <ion-segment-button value=\"1\">\n        <ion-label>{{'profile' | translate}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\">\n        <ion-label>{{'settings' | translate}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div class=\"ion-padding\">\n      <div *ngIf=\"profileTab == '1'\">\n        <div class=\"profile-wrapper\">\n          <div class=\"profile-details\">\n            <div class=\"ion-text-right\">\n              <ion-text color=\"secondary\" [routerLink]=\"['/profile-details']\">{{'view' | translate}}</ion-text>\n            </div>\n            <div class=\"profile-pic ion-text-center\">\n              <img class=\"img-responsive\" [src]=\"path + profileData?.picture\" onError=\"this.src='./assets/user.svg'\" />\n            </div>\n            <div class=\"info ion-text-center\">\n              <ion-label color=\"secondary\">\n                <h2>{{profileData?.users.name}}</h2>\n              </ion-label>\n            </div>\n          </div>\n          <div class=\"farm-details ion-margin-top\">\n            <div class=\"farm-title\">\n              <ion-label color=\"dark\" class=\"ion-text-bold\">\n                <h2>{{\"location\" | translate}}</h2>\n              </ion-label>\n              <ion-icon (click)=\"addFarm()\" color=\"dark\" name=\"ic-add\"></ion-icon>\n            </div>\n            <div class=\"empty-farm\" *ngIf=\"!profileData.farms && profileData.farms == null\">\n              <ion-text>{{'noFarms' | translate}}</ion-text>\n            </div>\n            <div class=\"farm-list\" *ngIf=\"profileData.farms\">\n              <ion-list class=\"ion-margin-top\">\n                <ion-item *ngFor=\"let item of profileData.farms\"\n                  [ngClass]=\"item.id == selectedFarm.id ? 'selected': ''\">\n                  <div class=\"farm-wrapper\">\n                    <div class=\"data\" (click)=\"showImage(item)\">\n                      <ion-label>{{item.title}}</ion-label>\n                      <div class=\"location\">\n                        <ion-icon name=\"location-outline\"></ion-icon>\n                        <ion-text>{{item.address}}</ion-text>\n                      </div>\n                    </div>\n                    <div class=\"delete-farm\">\n                      <ion-icon color=\"danger\" (click)=\"deleteFarm(item)\" name=\"trash\"></ion-icon>\n                    </div>\n                  </div>\n                </ion-item>\n              </ion-list>\n            </div>\n            <div class=\"images\">\n              <div class=\"farm-title\" *ngIf=\"farmSelected\">\n                <ion-label color=\"dark\" class=\"ion-text-bold\">\n                  <h2>{{\"farmImage\" | translate}}</h2>\n                </ion-label>\n                <ion-icon (click)=\"editFarm(selectedFarm)\" color=\"secondary\" name=\"ic-add\"></ion-icon>\n              </div>\n              <div class=\"image-list\" *ngIf=\"farmSelected && selectedFarm.gallery.length > 0\">\n                <ion-grid>\n                  <ion-row class=\"w-100\">\n                    <ion-col size=\"6\" *ngFor=\"let item of selectedFarm.gallery\" (click)=\"openImages(selectedFarm)\">\n                      <ion-img [src]=\"path + item.url\"></ion-img>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n              <div class=\"no-farm\" *ngIf=\"farmSelected && selectedFarm.gallery.length == 0\">\n                <ion-text>\n                  <strong>{{'noFarmImages' | translate}}</strong>\n                </ion-text>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"profileTab == '2'\">\n        <ion-list>\n          <ion-item>\n            <ion-label>{{'language' | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"lang\" (ionChange)=\"changeLng()\" interface=\"popover\">\n              <ion-select-option value=\"en\">English</ion-select-option>\n              <ion-select-option value=\"ar\">عربى</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item lines=\"none\" (click)=\"logout()\">\n            {{'logout' | translate}}\n          </ion-item>\n        </ion-list>\n        <div class=\"ion-margin-top adafsa-logo\">\n          <ion-img src=\"./assets/ADAFSA-logo.svg\"></ion-img>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"guest\" class=\"guest-wrapper\">\n    <div>\n    <div class=\"ion-margin-bottom ion-text-center\">\n      <ion-img src=\"./assets/login-logo.svg\"></ion-img>\n    </div>\n    <div class=\"ion-text-center\">\n      <ion-text color=\"danger\">{{'featureNotAvailableForGuestUser' | translate}}</ion-text>\n      <ion-button (click)=\"goLogin()\" class=\"ion-margin-top\" size=\"sm\" color=\"primary\">{{'loginToAccount' | translate}}\n      </ion-button>\n    </div>\n  </div>\n    <ion-label (click)=\"goLogin()\">\n      <h2>{{\"changeLanguage\" | translate}}</h2>\n    </ion-label>\n  </div>\n</ion-content>\n<ion-footer mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title class=\"ion-text-center version\">\n      Version: {{ app_version }} {{app_code ? '(' + app_code + ')' : ''}}\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>";
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
    "./src/app/common-component/farm-images/farm-images.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/common-component/farm-images/farm-images.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentFarmImagesFarmImagesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n  --background: #69737B;\n}\n\nion-content {\n  --background: #69737B;\n  --color: #fff;\n}\n\nion-content ion-list {\n  background: transparent;\n  padding-top: 0;\n}\n\nion-content ion-list ion-item {\n  --background: transparent;\n  --color: #fff;\n  --inner-padding-end: 0;\n}\n\nion-content ion-list ion-item div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-direction: column;\n}\n\nion-content ion-list ion-item div img {\n  width: 100%;\n}\n\nion-content ion-list ion-item div ion-text {\n  margin-bottom: 20px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9mYXJtLWltYWdlcy9mYXJtLWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBQ1E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNaOztBQUNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ2hCOztBQUNnQjtFQUNJLFdBQUE7QUFDcEI7O0FBRWdCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBQXBCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9mYXJtLWltYWdlcy9mYXJtLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzY5NzM3Qjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzY5NzM3QjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/farm-images/farm-images.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/common-component/farm-images/farm-images.component.ts ***!
      \***********************************************************************/

    /*! exports provided: FarmImagesComponent */

    /***/
    function srcAppCommonComponentFarmImagesFarmImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FarmImagesComponent", function () {
        return FarmImagesComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");

      var FarmImagesComponent = /*#__PURE__*/function () {
        function FarmImagesComponent(modalCtrl, sanitizer, helperService) {
          _classCallCheck(this, FarmImagesComponent);

          this.modalCtrl = modalCtrl;
          this.sanitizer = sanitizer;
          this.helperService = helperService;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain;
          this.currentLang = this.helperService.getLang();
        }

        _createClass(FarmImagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.details);
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "getSanitizeUrl",
          value: function getSanitizeUrl(_url) {
            var splits = _url.split('/');

            var youtubeEmbed = "https://www.youtube.com/embed/" + splits[splits.length - 1];
            return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
          }
        }]);

        return FarmImagesComponent;
      }();

      FarmImagesComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }];
      };

      FarmImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-farm-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./farm-images.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/farm-images/farm-images.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./farm-images.component.scss */
        "./src/app/common-component/farm-images/farm-images.component.scss"))["default"]]
      })], FarmImagesComponent);
      /***/
    },

    /***/
    "./src/app/my-profile/my-profile-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: MyProfilePageRoutingModule */

    /***/
    function srcAppMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
        return MyProfilePageRoutingModule;
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


      var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-profile.page */
      "./src/app/my-profile/my-profile.page.ts");

      var routes = [{
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
      }];

      var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
        _classCallCheck(this, MyProfilePageRoutingModule);
      };

      MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/my-profile/my-profile.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/my-profile/my-profile.module.ts ***!
      \*************************************************/

    /*! exports provided: MyProfilePageModule */

    /***/
    function srcAppMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
        return MyProfilePageModule;
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


      var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile-routing.module */
      "./src/app/my-profile/my-profile-routing.module.ts");
      /* harmony import */


      var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-profile.page */
      "./src/app/my-profile/my-profile.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var MyProfilePageModule = function MyProfilePageModule() {
        _classCallCheck(this, MyProfilePageModule);
      };

      MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"]],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
      })], MyProfilePageModule);
      /***/
    },

    /***/
    "./src/app/my-profile/my-profile.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/my-profile/my-profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0px !important;\n}\n\n.adafsa-logo {\n  margin: 30px auto 16px;\n  max-width: 200px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nion-footer {\n  height: 40px;\n}\n\nion-footer .version {\n  font-size: 0.6rem;\n  opacity: 0.6;\n}\n\n.guest-wrapper {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n\n.guest-wrapper ion-button {\n  height: 48px;\n  min-width: 220px;\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n\n.guest-wrapper ion-label {\n  text-align: center;\n  text-decoration: underline;\n}\n\n.guest-wrapper ion-img {\n  max-width: 120px;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.no-farm {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  margin-top: 10px;\n}\n\nion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\nion-segment ion-segment-button {\n  font-weight: 600;\n  font-size: 1rem;\n  text-transform: capitalize;\n  --indicator-height: 4px;\n}\n\nion-segment ion-segment-button::part(indicator-background) {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nion-segment ion-segment-button ion-label {\n  color: #332519;\n}\n\n.images {\n  margin-top: 10px;\n}\n\n.image-list ion-img::part(image) {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile-wrapper .profile-details {\n  background: #ffffff;\n  padding: 16px;\n}\n\n.profile-wrapper .profile-details .profile-pic {\n  max-width: 100px;\n  margin: auto;\n}\n\n.profile-wrapper .profile-details .profile-pic img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.profile-wrapper .profile-details .info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.profile-wrapper .profile-details .info ion-label {\n  margin-bottom: 8px;\n  margin-top: 4px;\n}\n\n.profile-wrapper .profile-details .info ion-label h2 {\n  font-weight: 500;\n}\n\n.profile-wrapper .profile-details .info ion-text {\n  text-transform: capitalize;\n}\n\n.profile-wrapper .farm-details .farm-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.profile-wrapper .farm-details .farm-title h2 {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.profile-wrapper .farm-details .farm-title ion-icon {\n  font-size: 1.6rem;\n}\n\n.profile-wrapper .farm-details .empty-farm {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  background: #ffffff;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--ion-color-secondary);\n}\n\n.profile-wrapper .farm-details .farm-list ion-item::part(native) {\n  padding-left: 0 !important;\n}\n\n.profile-wrapper .farm-details .farm-list ion-item.selected .data {\n  opacity: 1 !important;\n}\n\n.profile-wrapper .farm-details .farm-list ion-item .farm-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.profile-wrapper .farm-details .farm-list ion-item .farm-wrapper .delete-farm {\n  font-size: 1.6rem;\n}\n\n.profile-wrapper .farm-details .farm-list ion-item .farm-wrapper .data {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  flex-grow: 1;\n  opacity: 0.7;\n}\n\n.profile-wrapper .farm-details .farm-list ion-item .farm-wrapper .data ion-label {\n  text-transform: capitalize;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFBUTtFQUdJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFBWjs7QUFFUztFQUNELGtCQUFBO0VBQ0EsMEJBQUE7QUFBUjs7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSx5Q0FBQTtBQURKOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQURSOztBQUdRO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQURaOztBQUlRO0VBQ0ksY0FBQTtBQUZaOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFTUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQU5aOztBQVlJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FBVFI7O0FBV1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFUWjs7QUFXWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBVGhCOztBQWFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQVhaOztBQWFZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBWGhCOztBQWFnQjtFQUNJLGdCQUFBO0FBWHBCOztBQWVZO0VBQ0ksMEJBQUE7QUFiaEI7O0FBbUJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFqQlo7O0FBbUJZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWpCaEI7O0FBb0JZO0VBQ0ksaUJBQUE7QUFsQmhCOztBQXNCUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQXBCWjs7QUF5QmdCO0VBQ0ksMEJBQUE7QUF2QnBCOztBQTBCb0I7RUFDSSxxQkFBQTtBQXhCeEI7O0FBMkJnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF6QnBCOztBQTBCb0I7RUFDSSxpQkFBQTtBQXhCeEI7O0FBMEJvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXhCeEI7O0FBMEJ3QjtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBeEI1QiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWRhZnNhLWxvZ297XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTZweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLnZlcnNpb257XG4gICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XG4gICAgICAgIG9wYWNpdHk6IC42O1xuICAgIH1cbn1cblxuLmd1ZXN0LXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NkNGOUYsICMyZGY4YWIpO1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICAgIGlvbi1pbWd7XG4gICAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5uby1mYXJtIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIC0taW5kaWNhdG9yLWhlaWdodDogNHB4O1xuXG4gICAgICAgICY6OnBhcnQoaW5kaWNhdG9yLWJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICMzMzI1MTk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbWFnZXN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmltYWdlLWxpc3R7XG4gICAgaW9uLWltZyB7XG4gICAgICAgICY6OnBhcnQoaW1hZ2UpIHtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvZmlsZS13cmFwcGVyIHtcbiAgICAucHJvZmlsZS1kZXRhaWxzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAucHJvZmlsZS1waWMge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mYXJtLWRldGFpbHMge1xuICAgICAgICAuZmFybS10aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5lbXB0eS1mYXJtIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmFybS1saXN0IHtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLnNlbGVjdGVke1xuICAgICAgICAgICAgICAgICAgICAuZGF0YXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmFybS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGUtZmFybXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/my-profile/my-profile.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/my-profile/my-profile.page.ts ***!
      \***********************************************/

    /*! exports provided: MyProfilePage */

    /***/
    function srcAppMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
        return MyProfilePage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_services/util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var _common_component_farm_images_farm_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common-component/farm-images/farm-images.component */
      "./src/app/common-component/farm-images/farm-images.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

      var MyProfilePage = /*#__PURE__*/function () {
        function MyProfilePage(service, router, authService, helperService, translateService, modalCtrl, appVersion, navCtrl, util) {
          _classCallCheck(this, MyProfilePage);

          this.service = service;
          this.router = router;
          this.authService = authService;
          this.helperService = helperService;
          this.translateService = translateService;
          this.modalCtrl = modalCtrl;
          this.appVersion = appVersion;
          this.navCtrl = navCtrl;
          this.util = util;
          this.profileTab = '1';
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domain;
          this.selectedFarm = {
            gallery: []
          };
          this.guest = false;
          this.farmSelected = false;

          if (localStorage.getItem('guest') == '1') {
            this.guest = true;
          } else {
            if (!localStorage.getItem('currentUser')) {
              this.getProfile();
            } else {
              this.profileData = JSON.parse(localStorage.getItem('currentUser'));
            }

            this.lang = this.profileData.preferredLang;
          }
        }

        _createClass(MyProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.appVersion.getVersionNumber().then(function (versionNumber) {
              _this.app_version = versionNumber;
            }, function (error) {
              console.log(error);
            });
            this.appVersion.getVersionCode().then(function (getVersionCode) {
              _this.app_code = getVersionCode;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            if (localStorage.getItem('guest') == '1') {
              this.guest = true;
            } else {
              this.util.observProfile().subscribe(function (data) {
                _this2.getProfile();
              });
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.profileData = JSON.parse(localStorage.getItem('currentUser'));
            this.lang = localStorage.getItem('language');
            console.log('lang', this.lang);
            console.log('currentLang', this.translateService.currentLang);
          }
        }, {
          key: "goLogin",
          value: function goLogin() {
            this.navCtrl.navigateRoot(['/adafsa-login']);
          }
        }, {
          key: "showImage",
          value: function showImage(_farm) {
            this.selectedFarm = _farm;
            this.farmSelected = true;
            console.log(_farm);
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this3 = this;

            this.helperService.show();
            this.service.getProfile().subscribe(function (_res) {
              _this3.helperService.hide();

              localStorage.removeItem('currentUser');
              _this3.profileData = _res;
              localStorage.setItem('currentUser', JSON.stringify(_res));
            }, function (error) {
              localStorage.removeItem('token');

              _this3.router.navigate(['/adafsa-login']);
            });
          }
        }, {
          key: "addFarm",
          value: function addFarm() {
            this.router.navigate(['/add-location'], {
              queryParams: {
                type: 'new',
                id: this.profileData.id
              }
            });
          }
        }, {
          key: "editFarm",
          value: function editFarm(_farm) {
            this.farmSelected = false;
            this.selectedFarm = {
              gallery: []
            };
            this.util.publishFarm(_farm);
            this.router.navigate(['/add-location'], {
              queryParams: {
                type: 'edit',
                fid: _farm.id,
                id: this.profileData.id
              }
            });
          }
        }, {
          key: "deleteFarm",
          value: function deleteFarm(_item) {
            var _this4 = this;

            this.helperService.show();
            this.service.removeFarm(_item.id).subscribe(function (_res) {
              _this4.getProfile();

              _this4.helperService.hide();

              if (_item.id == _this4.selectedFarm.id) {
                _this4.selectedFarm = {
                  gallery: []
                };
              }
            });
          }
        }, {
          key: "changeLng",
          value: function changeLng() {
            localStorage.setItem('language', this.lang);
            console.log('language', this.lang);
            this.translateService.use(this.lang);

            if (this.lang == 'en') {
              this.helperService.setDir('ltr');
            } else {
              this.helperService.setDir('rtl');
            }

            this.helperService.show();
            location.reload(); // this.updateProfile();
          }
        }, {
          key: "openImages",
          value: function openImages(_data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _common_component_farm_images_farm_images_component__WEBPACK_IMPORTED_MODULE_9__["FarmImagesComponent"],
                        showBackdrop: false,
                        componentProps: {
                          details: _data
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
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            this.router.navigate(['/change-password']);
          }
        }]);

        return MyProfilePage;
      }();

      MyProfilePage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-profile.page.scss */
        "./src/app/my-profile/my-profile.page.scss"))["default"]]
      })], MyProfilePage);
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
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map