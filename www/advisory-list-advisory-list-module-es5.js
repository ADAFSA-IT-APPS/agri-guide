(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advisory-list-advisory-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/advisory-list/advisory-list.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advisory-list/advisory-list.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdvisoryListAdvisoryListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      {{'advisory' | translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!guest\">\n      <ion-button (click)=\"openModal()\">\n        <ion-icon name=\"ic-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher *ngIf=\"!guest\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Segment -->\n  <!-- <ion-segment [(ngModel)]=\"chatType\" mode=\"md\" color=\"primary\">\n    <ion-segment-button value=\"message\">\n      <ion-label>Open Request</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"groups\">\n      <ion-label>Archived</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n  <div>\n    <ion-list class=\"app-list\" lines=\"none\">\n      <!-- <ion-item-sliding *ngFor=\"let chat of chatList\"> -->\n        <!-- <ion-item-options side=\"start\">\n          <ion-item-option color=\"primary\">\n            <div>\n              <ion-icon name=\"pin\"></ion-icon>\n              <ion-text>Pin</ion-text>\n            </div>\n          </ion-item-option>\n        </ion-item-options> -->\n        <ion-item routerLinkActive=\"router-link-active\" *ngFor=\"let chat of chatList\"\n          (click)=\"showConversation(chat)\">\n          <ion-avatar slot=\"start\" *ngIf=\"chat.fromUsersId != profileData.usersId\">\n            <img [src]=\"path + chat.profilePic\" onError=\"this.src='./assets/user.svg'\">\n          </ion-avatar>\n          <ion-avatar slot=\"start\" *ngIf=\"chat.fromUsersId == profileData.usersId\">\n            <img [src]=\"path + chat.toProfilePic\" onError=\"this.src='./assets/user.svg'\">\n          </ion-avatar>\n          <ion-label *ngIf=\"chat.fromUsersId != profileData.usersId\">\n            <h2>{{ chat.fromUsername }}</h2>\n            <p class=\"message\">{{ chat.message }}</p>\n            <!-- <ion-icon color=\"s\"></ion-icon> -->\n          </ion-label>\n          <ion-label *ngIf=\"chat.fromUsersId == profileData.usersId\">\n            <h2>{{ chat.toUsername }}</h2>\n            <p class=\"message\">{{ chat.message }}</p>\n            <!-- <ion-icon color=\"s\"></ion-icon> -->\n          </ion-label>\n        </ion-item>\n        <!-- <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">\n            <div>\n              <ion-icon name=\"archive\"></ion-icon>\n              <ion-text>Archive</ion-text>\n            </div>\n          </ion-item-option>\n          <ion-item-option color=\"danger\">\n            <div>\n              <ion-icon name=\"trash\"></ion-icon>\n              <ion-text>Delete</ion-text>\n            </div>\n          </ion-item-option>\n        </ion-item-options> -->\n      <!-- </ion-item-sliding> -->\n    </ion-list>\n  </div>\n  <div *ngIf=\"guest\" class=\"guest-wrapper\">\n    <div>\n    <div class=\"ion-margin-bottom ion-text-center\">\n      <ion-img src=\"./assets/login-logo.svg\"></ion-img>\n    </div>\n    <div class=\"ion-text-center\">\n      <ion-text color=\"danger\">{{'featureNotAvailableForGuestUser' | translate}}</ion-text>\n      <ion-button (click)=\"goLogin()\" class=\"ion-margin-top\" size=\"sm\" color=\"primary\">{{'loginToAccount' | translate}}\n      </ion-button>\n    </div>\n  </div>\n  </div>\n  \n</ion-content>\n<ion-toolbar>\n  <ion-footer>\n    <div class=\"channel-title\">\n      <ion-text>{{'ADAFSAChannels' | translate}}</ion-text>\n    </div>\n    <ion-row class=\"channel-list\">\n      <ion-col size=\"3\" (click)=\"openSocial('1')\">\n        <ion-img src=\"./assets/facebook.svg\"></ion-img>\n        <ion-text>@adafsa.gov</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"openSocial('2')\">\n        <ion-img src=\"./assets/youtube.svg\"></ion-img>\n        <ion-text>@adafsa_gov</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"openSocial('3')\">\n        <ion-img src=\"./assets/snapchat.svg\"></ion-img>\n        <ion-text>@adafsa_gov</ion-text>\n      </ion-col>\n      <ion-col (click)=\"openSocial('4')\" size=\"3\">\n        <ion-img src=\"./assets/instagram.svg\"></ion-img>\n        <ion-text>@adafsa_gov</ion-text>\n      </ion-col>\n      <ion-col (click)=\"openSocial('5')\" size=\"3\">\n        <ion-img src=\"./assets/twitter.svg\"></ion-img>\n        <ion-text>@adafsa_gov</ion-text>\n      </ion-col>\n      <ion-col (click)=\"openTelegram('1')\" size=\"3\">\n        <ion-img src=\"./assets/telegram.svg\"></ion-img>\n        <ion-text>{{'Agriculture' | translate}}</ion-text>\n      </ion-col>\n      <ion-col (click)=\"openTelegram('2')\" size=\"3\">\n        <ion-img src=\"./assets/telegram.svg\"></ion-img>\n        <ion-text>{{'AnimalWealth' | translate}}</ion-text>\n      </ion-col>\n      <ion-col (click)=\"openTelegram('3')\" size=\"3\">\n        <ion-img src=\"./assets/telegram.svg\"></ion-img>\n        <ion-text>{{'FoodSafety' | translate}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</ion-toolbar>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/select-new-topic/select-new-topic.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/select-new-topic/select-new-topic.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentSelectNewTopicSelectNewTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title>{{\"selectCategory\" | translate}}</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"wizzard-steps\">\n      <div class=\"step1\">\n        <div class=\"top-wrapper ion-padding\">\n          <div class=\"title\">\n            <ion-label>{{\"selectTopicType\" | translate}}</ion-label>\n            <!-- <ion-text>{{\"whatDoYouLikeToFindGuideAbout\" | translate}}</ion-text> -->\n          </div>\n          <div *ngIf=\"catList.length <= 2\" class=\"header\">\n            <ion-segment mode=\"ios\" [(ngModel)]=\"selectedType\" (ionChange)=\"typeChange($event)\">\n              <ion-segment-button [value]=\"item.id\" *ngFor=\"let item of catList\">\n                <div>\n                  <ion-img [src]=\"path + item.icon\"></ion-img>\n                  <ion-label *ngIf=\"currentLang == 'en'\">{{item.type}}</ion-label>\n                  <ion-label *ngIf=\"currentLang == 'ar'\">{{item.type_ar}}</ion-label>\n                </div>\n              </ion-segment-button>\n             \n            </ion-segment>\n          </div>\n    \n          <div class=\"header\" *ngIf=\"catList.length > 2\">\n            <ion-item lines=\"none\">\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"path + selectedCat?.icon\" onError=\"this.src='./assets/no-image.svg'\"/>\n              </ion-thumbnail>\n              <ion-label *ngIf=\"currentLang == 'en'\">{{selectedCat?.type}}</ion-label>\n                <ion-label *ngIf=\"currentLang == 'ar'\">{{selectedCat?.type_ar}}</ion-label>\n                <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n          </div>\n          <!-- <div *ngIf=\"hasSubCat\" class=\"header\">\n            <ion-segment mode=\"ios\">\n              <ion-segment-button (click)=\"back()\">\n                <div>\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                  <ion-thumbnail slot=\"start\">\n                    <img [src]=\"path + catDetails?.icon\" onError=\"this.src='./assets/no-image.svg'\" />\n                  </ion-thumbnail>\n                  <ion-label *ngIf=\"currentLang == 'en'\">{{catDetails.name}}</ion-label>\n                  <ion-label *ngIf=\"currentLang == 'ar'\">{{catDetails.name_ar}}</ion-label>\n                </div>\n              </ion-segment-button>\n             \n            </ion-segment>\n          </div> -->\n        </div>\n        <!-- <ion-item>\n          <div>\n            <ion-label color=\"secondary\">{{'selectTopicType' | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"selectedType\" okText=\"{{'okay' | translate}}\" cancelText=\"{{'cancel' | translate}}\" (ionChange)=\"typeChange()\">\n              <ion-select-option [value]=\"item.id\" *ngFor=\"let item of catList\">\n                {{ currentLang == 'en' ? item.type : item.type_ar}}</ion-select-option>\n            </ion-select>\n          </div>\n        </ion-item> -->\n      </div>\n      <div class=\"step2\" *ngIf=\"step == 1\">\n        <ion-item>\n          <div class=\"title\">\n            <ion-label color=\"secondary\">{{'selectCategory' | translate}}</ion-label>\n            <!-- <ion-select [(ngModel)]=\"selectedCat\" okText=\"{{'okay' | translate}}\" cancelText=\"{{'cancel' | translate}}\" (ionChange)=\"catChange('1')\">\n              <ion-select-option [value]=\"item.id\" *ngFor=\"let item of agriculture\">\n                {{ currentLang == 'en' ? item.name : item.name_ar}}</ion-select-option>\n            </ion-select> -->\n          </div>\n        </ion-item>\n        <ion-list>\n            <ion-item *ngFor=\"let item of agriculture\" (click)=\"(catChange('1', item))\" detail>\n              {{ currentLang == 'en' ? item.name : item.name_ar}}\n            </ion-item>\n        </ion-list>\n      </div>\n      <div class=\"step3\" *ngIf=\"step == 2\">\n        <ion-item *ngIf=\"hasSubCat\">\n          <div class=\"title\">\n            <ion-label color=\"secondary\">{{'selectCategory' | translate}}</ion-label>\n            <!-- <ion-select [(ngModel)]=\"selectedSubCat\" okText=\"{{'okay' | translate}}\" cancelText=\"{{'cancel' | translate}}\" (ionChange)=\"catChange('2')\">\n              <ion-select-option [value]=\"item.id\" *ngFor=\"let item of subCatList\">\n                {{ currentLang == 'en' ? item.name : item.name_ar}}</ion-select-option>\n            </ion-select> -->\n          </div>\n        </ion-item>\n        <ion-list>\n          <ion-item *ngFor=\"let item of subCatList\" (click)=\"(catChange('2', item))\" detail>\n            {{ currentLang == 'en' ? item.name : item.name_ar}}\n          </ion-item>\n      </ion-list>\n      </div>\n      <div class=\"step4\" *ngIf=\"step == 3\">\n        <ion-item>\n          <div class=\"title\">\n            <ion-label color=\"secondary\">{{'selectTopic' | translate}}</ion-label>\n            <!-- <ion-select [(ngModel)]=\"selectedTopic\" okText=\"{{'okay' | translate}}\" cancelText=\"{{'cancel' | translate}}\">\n              <ion-select-option [value]=\"item.id\" *ngFor=\"let item of filterTopicList\">\n                {{ currentLang == 'en' ? item.title : item.title_ar}}</ion-select-option>\n            </ion-select> -->\n          </div>\n        </ion-item>\n        <ion-list>\n          <ion-item *ngFor=\"let item of filterTopicList\" (click)=\"goToMessage(item)\">\n            {{ currentLang == 'en' ? item.title : item.title_ar}}\n          </ion-item>\n      </ion-list>\n      </div>\n      <div class=\"step5\" *ngIf=\"step == 4\">\n          <ion-item lines=\"none\">\n           <div class=\"title\">\n              <ion-label color=\"secondary\">{{'WhatDoYouWantToDiscussAbout' | translate}}</ion-label>\n           </div>\n          </ion-item>\n          <div class=\"ion-padding-horizontal\">\n          <ion-textarea #message rows=\"16\" [(ngModel)]=\"extraMessage\"></ion-textarea>\n        </div>\n      </div>\n  </div>\n    <!-- <ion-button color=\"primary\" expand=\"block\" class=\"ion-margin\" (click)=\"submit()\">\n      {{'start' | translate}}\n    </ion-button> -->\n</ion-content>\n<ion-footer *ngIf=\"step > 1\" class=\"ion-padding-horizontal\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"goBack()\" fill=\"solid\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon> {{\"back\" | translate}}\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"step == 4\">\n      <ion-button color=\"primary\" (click)=\"submit()\" fill=\"solid\">\n        {{\"start\" | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";
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
    "./src/app/advisory-list/advisory-list-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/advisory-list/advisory-list-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AdvisoryListPageRoutingModule */

    /***/
    function srcAppAdvisoryListAdvisoryListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvisoryListPageRoutingModule", function () {
        return AdvisoryListPageRoutingModule;
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


      var _advisory_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./advisory-list.page */
      "./src/app/advisory-list/advisory-list.page.ts");

      var routes = [{
        path: '',
        component: _advisory_list_page__WEBPACK_IMPORTED_MODULE_3__["AdvisoryListPage"]
      }];

      var AdvisoryListPageRoutingModule = function AdvisoryListPageRoutingModule() {
        _classCallCheck(this, AdvisoryListPageRoutingModule);
      };

      AdvisoryListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdvisoryListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/advisory-list/advisory-list.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/advisory-list/advisory-list.module.ts ***!
      \*******************************************************/

    /*! exports provided: AdvisoryListPageModule */

    /***/
    function srcAppAdvisoryListAdvisoryListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvisoryListPageModule", function () {
        return AdvisoryListPageModule;
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


      var _advisory_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./advisory-list-routing.module */
      "./src/app/advisory-list/advisory-list-routing.module.ts");
      /* harmony import */


      var _advisory_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./advisory-list.page */
      "./src/app/advisory-list/advisory-list.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _common_component_select_new_topic_select_new_topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/select-new-topic/select-new-topic.component */
      "./src/app/common-component/select-new-topic/select-new-topic.component.ts");

      var AdvisoryListPageModule = function AdvisoryListPageModule() {
        _classCallCheck(this, AdvisoryListPageModule);
      };

      AdvisoryListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _advisory_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdvisoryListPageRoutingModule"]],
        declarations: [_advisory_list_page__WEBPACK_IMPORTED_MODULE_6__["AdvisoryListPage"], _common_component_select_new_topic_select_new_topic_component__WEBPACK_IMPORTED_MODULE_8__["SelectNewTopicComponent"]]
      })], AdvisoryListPageModule);
      /***/
    },

    /***/
    "./src/app/advisory-list/advisory-list.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/advisory-list/advisory-list.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdvisoryListAdvisoryListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --border-width: 0 !important;\n  --opacity: 1;\n}\n.guest-wrapper {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n.guest-wrapper ion-button {\n  height: 48px;\n  min-width: 220px;\n  --border-radius: 0;\n  box-shadow: 0 2px 0px var(--ion-color-dark);\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n}\n.guest-wrapper ion-label {\n  text-align: center;\n  text-decoration: underline;\n}\n.guest-wrapper ion-img {\n  max-width: 120px;\n  margin: auto;\n  margin-bottom: 20px;\n}\nion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\nion-segment ion-segment-button {\n  font-weight: 600;\n  font-size: 1rem;\n  text-transform: capitalize;\n  --indicator-height: 4px;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\nion-segment ion-segment-button ion-label {\n  color: #332519;\n}\n.groups-wrapper .group-section {\n  margin-left: 16px;\n  margin-bottom: 12px;\n}\n.groups-wrapper .group-section.shadow {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  margin-left: 0px;\n}\n.groups-wrapper .group-section .group-title h1 {\n  font-size: 1rem;\n  font-weight: 500;\n  padding: 16px 0;\n}\n.groups-wrapper .group-section .group-list {\n  white-space: nowrap;\n  overflow-x: scroll;\n}\n.groups-wrapper .group-section .group-list div {\n  width: 40%;\n  display: inline-flex;\n  flex-direction: column;\n  margin-right: 12px;\n}\n.groups-wrapper .group-section .group-list div ion-avatar {\n  width: 100%;\n  height: 100%;\n}\n.groups-wrapper .group-section .group-list div ion-avatar img {\n  height: 169px;\n  width: 146px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n  border: 2px solid var(--ion-color-secondary);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n.groups-wrapper .group-section .group-list div h4 {\n  font-weight: bold;\n  font-size: 0.8rem;\n  margin-top: 10px;\n}\n.groups-wrapper .group-section .group-list div .for {\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n.groups-wrapper .group-section .group-list ion-col {\n  padding: 8px;\n}\n.groups-wrapper .group-section .group-list ion-col .group-info {\n  text-align: center;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.groups-wrapper .group-section .group-list ion-col .group-info ion-avatar {\n  width: 100%;\n  height: 100%;\n}\n.groups-wrapper .group-section .group-list ion-col .group-info ion-avatar img {\n  border: 2px solid var(--ion-color-secondary);\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.groups-wrapper .group-section .group-list ion-col .group-info ion-text {\n  color: #000;\n  font-size: 0.7rem;\n  margin-top: 10px;\n}\n.groups-wrapper .group-section .group-list ion-col .group-info .ion-count {\n  position: absolute;\n  background: red;\n  width: 24px;\n  height: 24px;\n  color: #fff !important;\n  top: 0;\n  border-radius: 50%;\n  right: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.sub-title {\n  font-weight: bold;\n  margin: 0;\n  margin-left: 10px;\n  font-size: 1rem;\n}\n.app-list {\n  background: none;\n  margin-top: 24px;\n}\n.app-list ion-item {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n  margin-bottom: 5px;\n  border-bottom: 1px solid rgba(112, 112, 112, 0.2);\n}\n.archive {\n  --color: #000;\n  padding: 4px 8px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 25px;\n  height: 20px;\n}\n.channel-title {\n  margin: 0 4px 4px;\n  padding: 10px;\n  background: #F5F5F5;\n}\n.channel-list {\n  flex-wrap: nowrap;\n  overflow-x: scroll !important;\n  overflow-y: hidden;\n  text-align: center;\n}\n.channel-list ion-text {\n  margin-top: 4px;\n  font-size: 8px;\n  display: inline-block;\n  direction: ltr;\n}\n::ng-deep .header-collapse-condense-inactive ion-buttons {\n  display: none;\n}\n::ng-deep .my-custom-class {\n  --button-color: #000;\n  font-weight: bold;\n  background: #fff;\n}\n::ng-deep .my-custom-class button {\n  font-weight: bold;\n  height: 42px !important;\n}\n::ng-deep .action-sheet-group.sc-ion-action-sheet-ios {\n  border-radius: 25px;\n}\n::ng-deep .group-list > div ion-img img {\n  height: 169px;\n  width: 146px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n  border: 2px solid var(--ion-color-secondary);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2aXNvcnktbGlzdC9hZHZpc29yeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBUUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBT1E7RUFHSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQVBaO0FBU1M7RUFDRCxrQkFBQTtFQUNBLDBCQUFBO0FBUFI7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUFI7QUFXQTtFQUNJLHlDQUFBO0FBUko7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFSUjtBQVNRO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQVBaO0FBU1E7RUFDSSxjQUFBO0FBUFo7QUFhSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQVlRO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtBQVZaO0FBY1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWmhCO0FBZ0JRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWRaO0FBZ0JZO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWRoQjtBQWdCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWRwQjtBQWdCb0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EseUNBQUE7QUFkeEI7QUFrQmdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaEJwQjtBQW1CZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFqQnBCO0FBcUJZO0VBQ0ksWUFBQTtBQW5CaEI7QUFxQmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbkJwQjtBQXFCb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW5CeEI7QUFxQndCO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQW5CNUI7QUF1Qm9CO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFyQnhCO0FBd0JvQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXRCeEI7QUErQkE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUE1Qko7QUErQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBNUJKO0FBNkJJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUEzQlI7QUEwR0E7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF4R0o7QUEyR0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXhHSjtBQTJHQTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBeEdKO0FBeUdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUF2R1I7QUE0R0E7RUFDSSxhQUFBO0FBekdKO0FBNkdBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBMUdKO0FBNkdBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQTFHSjtBQTZHQTtFQUNJLG1CQUFBO0FBMUdKO0FBNkdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHlDQUFBO0FBMUdKIiwiZmlsZSI6InNyYy9hcHAvYWR2aXNvcnktbGlzdC9hZHZpc29yeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAgICAgLS1vcGFjaXR5OiAxO1xuXG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ndWVzdC13cmFwcGVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjZDRjlGLCAjMmRmOGFiKTtcbiAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgaW9uLWltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cblxuaW9uLXNlZ21lbnQge1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA0cHg7XG4gICAgICAgICY6OnBhcnQoaW5kaWNhdG9yLWJhY2tncm91bmQpe1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBjb2xvcjogIzMzMjUxOTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyb3Vwcy13cmFwcGVyIHtcbiAgICAuZ3JvdXAtc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgICAgICYuc2hhZG93IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncm91cC10aXRsZSB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyb3VwLWxpc3Qge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTY5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQ2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5mb3Ige1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAgICAgICAgICAgICAuZ3JvdXAtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pb24tY291bnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdWItdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5hcHAtbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExMiAxMTIgMTEyIC8gLjIpO1xuICAgIH1cbiAgICAvLyBpb24taXRlbS1zbGlkaW5nIHtcbiAgICAvLyAgICAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xuICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIC8vICAgICBpb24taXRlbS1vcHRpb25zIHtcbiAgICAvLyAgICAgICAgIHBhZGRpbmctdG9wOiA0cHggIWltcG9ydGFudDtcbiAgICAvLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICAvLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIC8vICAgICAgICAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICAvLyAgICAgICAgICAgICBkaXYge1xuICAgIC8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5pdGVtIHtcbiAgICAvLyAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTEyIDExMiAxMTIgLyAuMik7XG5cbiAgICAvLyAgICAgICAgIGgyIHtcbiAgICAvLyAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLmlvbi1jb3VudCB7XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0REZCQkE7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIC8vICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLy8gICAgICAgICAgICAgY29sb3I6ICMwMTNFNTI7XG4gICAgLy8gICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAvLyAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgLm1lc3NhZ2Uge1xuICAgIC8vICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIHBbaXRlbS1lbmRdIHtcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIC8vICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgJi51bnJlYWQge1xuICAgIC8vICAgICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICBwIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgLy8gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG4uYXJjaGl2ZSB7XG4gICAgLy9iYWNrZ3JvdW5kOiAjMDAwO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jaGFubmVsLXRpdGxle1xuICAgIG1hcmdpbjogMCA0cHggNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmNoYW5uZWwtbGlzdHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIH1cbn1cblxuXG46Om5nLWRlZXAgLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZSBpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG46Om5nLWRlZXAgLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgLS1idXR0b24tY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5teS1jdXN0b20tY2xhc3MgYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDQycHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbjo6bmctZGVlcCAuZ3JvdXAtbGlzdD5kaXYgaW9uLWltZyBpbWcge1xuICAgIGhlaWdodDogMTY5cHg7XG4gICAgd2lkdGg6IDE0NnB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/advisory-list/advisory-list.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/advisory-list/advisory-list.page.ts ***!
      \*****************************************************/

    /*! exports provided: AdvisoryListPage */

    /***/
    function srcAppAdvisoryListAdvisoryListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvisoryListPage", function () {
        return AdvisoryListPage;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _common_component_select_new_topic_select_new_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common-component/select-new-topic/select-new-topic.component */
      "./src/app/common-component/select-new-topic/select-new-topic.component.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_services/util.service */
      "./src/app/_services/util.service.ts");

      var AdvisoryListPage = /*#__PURE__*/function () {
        function AdvisoryListPage(router, service, util, navCtrl, alertController, helperService, modalCtrl) {
          _classCallCheck(this, AdvisoryListPage);

          this.router = router;
          this.service = service;
          this.util = util;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.helperService = helperService;
          this.modalCtrl = modalCtrl;
          this.chatType = "message";
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domain;
          this.chatList = [];
          this.archiveList = [{
            user: {
              name: 'Salem Salamah',
              avatar: './assets/chat.png'
            },
            message: {
              snippet: 'agriculture advisor',
              count: 20,
              created: '09:00 AM',
              read: true
            }
          }, {
            user: {
              name: 'Salem Salamah',
              avatar: './assets/chat.png'
            },
            message: {
              snippet: "animal advisor",
              created: '13:40 PM',
              read: true
            }
          }];
          this.guest = false;
        }

        _createClass(AdvisoryListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event.url === '/tabs/chat') {
                  _this.getData();
                }
              }
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            if (localStorage.getItem('guest') == '1') {
              this.guest = true;
              this.chatList = [];
            } else {
              this.getList();
              this.profileData = JSON.parse(localStorage.getItem('currentUser'));
            }
          }
        }, {
          key: "showConversation",
          value: function showConversation(_user) {
            this.util.publishChatTo(_user);

            if (_user.fromUsersId == this.profileData.usersId) {
              this.router.navigate(['/conversation'], {
                queryParams: {
                  name: _user.toUsername,
                  id: _user.toUsersId,
                  isOnline: _user.toChatStatus
                }
              });
            } else {
              this.router.navigate(['/conversation'], {
                queryParams: {
                  name: _user.fromUsername,
                  id: _user.fromUsersId,
                  isOnline: _user.chatStatus
                }
              });
            }
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this2 = this;

            this.service.getChatList().subscribe(function (_res) {
              _this2.chatList = _res;
            });
          }
        }, {
          key: "goLogin",
          value: function goLogin() {
            this.navCtrl.navigateRoot(['/adafsa-login']); // this.navCtrl.navigateRoot(['/member-login']);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.service.getChatList().subscribe(function (_res) {
              // this.chatList = _res.reverse();
              event.target.complete();
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _common_component_select_new_topic_select_new_topic_component__WEBPACK_IMPORTED_MODULE_5__["SelectNewTopicComponent"],
                        // cssClass: 'new-topic-modal',
                        componentProps: {
                          data: 'new'
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {});
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openTelegram",
          value: function openTelegram(_type) {
            var Url;

            if (_type == '1') {
              Url = 'https://telegram.me/adafsaagriculture';
            } else if (_type == '2') {
              Url = 'https://telegram.me/adafsaanimalwealth';
            } else if (_type == '3') {
              Url = 'https://telegram.me/adafsafoodsafety';
            }

            window.open(Url, '_self');
          }
        }, {
          key: "openSocial",
          value: function openSocial(_type) {
            var Url;

            if (_type == '1') {
              Url = 'https://facebook.com/adafsa.gov';
            } else if (_type == '2') {
              Url = 'https://youtube.com/adafsa_gov';
            } else if (_type == '3') {
              Url = 'https://www.snapchat.com/add/adafsa_gov';
            } else if (_type == '4') {
              Url = 'https://www.instagram.com/adafsa_gov/';
            } else if (_type == '5') {
              Url = 'https://twitter.com/adafsa_gov/';
            }

            window.open(Url, '_self');
          }
        }]);

        return AdvisoryListPage;
      }();

      AdvisoryListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      AdvisoryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advisory-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./advisory-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/advisory-list/advisory-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./advisory-list.page.scss */
        "./src/app/advisory-list/advisory-list.page.scss"))["default"]]
      })], AdvisoryListPage);
      /***/
    },

    /***/
    "./src/app/common-component/select-new-topic/select-new-topic.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/common-component/select-new-topic/select-new-topic.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentSelectNewTopicSelectNewTopicComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  height: 44px !important;\n}\n\nion-select {\n  min-width: 100%;\n  padding-left: 0;\n}\n\nion-item {\n  padding: 8px 0;\n}\n\nion-item div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-wrapper {\n  background: #FDFDFD;\n  box-shadow: 0 -5px 12px #636363;\n}\n\n.top-wrapper .title {\n  color: var(--ion-color-secondary);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0px !important;\n}\n\n.top-wrapper .title ion-label {\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: 6px;\n}\n\n.top-wrapper .header ion-item {\n  border: 2px solid #979797 !important;\n  border-radius: 8px;\n  margin-top: 10px;\n}\n\n.top-wrapper .header ion-item ion-label {\n  text-align: initial;\n}\n\n.top-wrapper .header ion-item img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.top-wrapper ion-segment {\n  --background: transparent;\n  border: 2px solid #979797 !important;\n  --ion-background-color: #B8CC94 !important;\n  --box-shadow: none;\n  height: 64px !important;\n}\n\n.top-wrapper ion-segment ion-segment-button {\n  margin: 0 !important;\n  --border-radius: 0;\n  --indicator-box-shadow: 0;\n}\n\n.top-wrapper ion-segment ion-segment-button img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.top-wrapper ion-segment ion-segment-button ion-label {\n  margin: 0 10px;\n}\n\n.top-wrapper ion-segment ion-segment-button ion-img::part(image) {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.top-wrapper ion-segment ion-segment-button::part(indicator) {\n  margin-left: -2px;\n  margin-right: -2px;\n}\n\n.top-wrapper ion-segment ion-segment-button:before {\n  margin: 0 !important;\n  --border-width: 0 !important;\n}\n\n.top-wrapper ion-segment ion-segment-button div {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.top-wrapper ion-segment ion-segment-button div ion-icon {\n  font-size: 1.4rem;\n  margin-right: 8px;\n}\n\n.wizzard-steps .title {\n  color: var(--ion-color-secondary);\n  margin: 16px 0;\n}\n\n.wizzard-steps .title ion-label {\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-bottom: 6px;\n}\n\nion-textarea {\n  border: 1px solid #b3b3b3;\n  padding: 8px;\n  border-radius: 8px;\n}\n\nion-footer ion-buttons {\n  margin: 0;\n}\n\nion-footer ion-buttons ion-button {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9zZWxlY3QtbmV3LXRvcGljL3NlbGVjdC1uZXctdG9waWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFBSTtFQUNJLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFDUjs7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1o7O0FBR1E7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFFUTtFQUNJLG1CQUFBO0FBQVo7O0FBRVE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0FBQVo7O0FBS0k7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSFI7O0FBS1E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFIWjs7QUFJWTtFQUNJLHNCQUFBO0tBQUEsbUJBQUE7QUFGaEI7O0FBSVk7RUFDSSxjQUFBO0FBRmhCOztBQUtnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUhwQjs7QUFNWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFKaEI7O0FBT1k7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0FBTGhCOztBQVFZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU5oQjs7QUFPZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBTHBCOztBQWFJO0VBQ0ksaUNBQUE7RUFDQSxjQUFBO0FBVlI7O0FBV1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUWjs7QUFjQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBZUk7RUFDSSxTQUFBO0FBWlI7O0FBYVE7RUFDSSxZQUFBO0FBWFoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50L3NlbGVjdC1uZXctdG9waWMvc2VsZWN0LW5ldy10b3BpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tc2VsZWN0IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG5pb24taXRlbSB7XG4gICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi50b3Atd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogI0ZERkRGRDtcbiAgICBib3gtc2hhZG93OiAwIC01cHggMTJweCAjNjM2MzYzO1xuICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXJ7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNCOENDOTQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgICY6OnBhcnQoaW1hZ2Upe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OnBhcnQoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ud2l6emFyZC1zdGVwc3tcbiAgICAudGl0bGV7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi10ZXh0YXJlYXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1mb290ZXJ7XG4gICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/select-new-topic/select-new-topic.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/common-component/select-new-topic/select-new-topic.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SelectNewTopicComponent */

    /***/
    function srcAppCommonComponentSelectNewTopicSelectNewTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectNewTopicComponent", function () {
        return SelectNewTopicComponent;
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


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var SelectNewTopicComponent = /*#__PURE__*/function () {
        function SelectNewTopicComponent(service, helperService, modalCtrl, router, alertController, util) {
          _classCallCheck(this, SelectNewTopicComponent);

          this.service = service;
          this.helperService = helperService;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.alertController = alertController;
          this.util = util;
          this.topicList = [];
          this.filterTopicList = [];
          this.catList = [];
          this.agriculture = [];
          this.dummy = Array(4);
          this.selectedCat = '';
          this.selectedSubCat = '';
          this.selectedType = '';
          this.selectedTopic = '';
          this.hasSubCat = false;
          this.subCatList = [];
          this.step = 1;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domain;
          this.currentLang = this.helperService.getLang();
        }

        _createClass(SelectNewTopicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTopicCategories();
          }
        }, {
          key: "getTopicCategories",
          value: function getTopicCategories() {
            var _this3 = this;

            this.helperService.show();
            this.service.getTopicsCategory().subscribe(function (_res) {
              console.log('close');

              _this3.helperService.hide();

              _this3.catList = _res.filter(function (item) {
                return item.type.toLowerCase() != 'none';
              });

              if (_this3.selectedType) {
                _this3.agriculture = _res.filter(function (item) {
                  return item.id == _this3.selectedType;
                });
                _this3.agriculture = _this3.agriculture[0].categories;
              } else {
                _this3.selectedType = _this3.catList[0].id;
              }
            });
          }
        }, {
          key: "getTopics",
          value: function getTopics(_id) {
            var _this4 = this;

            this.helperService.show();
            var payload = payload = 'cateId=' + _id + '&startPage=0&pageSize=1000&sort=false';
            this.service.getAllTopics(payload).subscribe(function (_res) {
              _this4.helperService.hide();

              _this4.filterTopicList = _res;
            }); // this.service.getTopics().subscribe(_res => {
            //   this.helperService.hide();
            //   if (_id) {
            //     this.topicList = _res.filter(item => item.categories?.id == _id);
            //   } else {
            //     this.topicList = _res;
            //   }
            //   this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
            // })
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "typeChange",
          value: function typeChange(_ev) {
            this.step = 1;
            this.getTopicCategories();
            this.selectedCat = '';
            this.selectedTopic = '';
          }
        }, {
          key: "catChange",
          value: function catChange(_type, _cat) {
            var _this5 = this;

            if (_type == '2') {
              this.selectedSubCat = _cat.id;
              this.getTopics(this.selectedSubCat);
              this.selectedTopic = '';
              this.step = 3;
            } else {
              this.selectedCat = _cat.id;
              var subCat = new Array();
              subCat = this.agriculture.filter(function (_item) {
                return _item.id == _this5.selectedCat;
              });
              subCat = subCat[0];
              this.step = 2;

              if (subCat['subCategories'].length > 0) {
                this.hasSubCat = true;
                this.subCatList = subCat['subCategories'];
                console.log(this.subCatList);
              } else {
                this.hasSubCat = false;
                this.subCatList = [];
                this.step = 3;
                this.getTopics(this.selectedCat);
                this.selectedTopic = '';
              }
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            // if (this.selectedCat == '' || this.selectedTopic == '' || this.selectedType == '') {
            //   this.helperService.showToast(this.helperService.translate('selectAllTheFields'), 'danger', 'bottom');
            //   return;
            // }
            // this.getCategory(this.selectedSubCat == '' ? this.selectedCat : this.selectedSubCat);
            if (this.extraMessage) {
              localStorage.setItem('extra', window.btoa(this.extraMessage.trim()));
            }

            this.modalCtrl.dismiss();
            this.router.navigate(['/conversation'], {
              queryParams: {
                name: this.advisorDetails.advisor.name,
                id: this.advisorDetails.advisor.id,
                topicId: this.selectedTopic,
                isOnline: this.advisorDetails.advisor.chatStatus,
                type: "newchat"
              }
            }); //this.router.navigate(['/conversation'],{queryParams:{name:_user.name, id: _user.id, topicId: this.selectedTopic, isOnline: _user.chatStatus}})
          }
        }, {
          key: "getCategory",
          value: function getCategory(_id) {
            var _this6 = this;

            this.helperService.show();
            this.service.getCategoriesByID(_id).subscribe(function (_res) {
              if (_res.advisor === null) {
                _this6.helperService.showToast(_this6.helperService.translate('noAdvisorFound'), 'danger', 'bottom');

                _this6.helperService.hide();
              } else {
                // this.presentAlertPrompt(_res);
                _this6.helperService.hide(); // this.modalCtrl.dismiss();


                _this6.advisorDetails = _res;
                _this6.step = 4;
                setTimeout(function () {
                  _this6.messageText.setFocus();
                }, 100);
              }
            });
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var _self, _data, alert;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _self = this;
                      _data = data;
                      _context2.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.helperService.translate('WhatDoYouWantToDiscussAbout'),
                        inputs: [{
                          name: 'message',
                          id: 'message',
                          type: 'textarea',
                          placeholder: ''
                        }],
                        buttons: [{
                          text: _self.helperService.translate('cancel'),
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: _self.helperService.translate('okay'),
                          handler: function handler(data) {
                            _this7.extraMessage = data.message;

                            if (_this7.extraMessage) {
                              localStorage.setItem('extra', window.btoa(_this7.extraMessage.trim()));
                            }

                            _this7.router.navigate(['/conversation'], {
                              queryParams: {
                                name: _data.advisor.name,
                                id: _data.advisor.id,
                                topicId: _this7.selectedTopic,
                                isOnline: _data.advisor.chatStatus,
                                type: "newchat"
                              }
                            });
                          }
                        }]
                      });

                    case 4:
                      alert = _context2.sent;
                      _context2.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goToMessage",
          value: function goToMessage(_topic) {
            this.selectedTopic = _topic.id;

            if (this.selectedCat == '' || this.selectedTopic == '' || this.selectedType == '') {
              this.helperService.showToast(this.helperService.translate('selectAllTheFields'), 'danger', 'bottom');
              return;
            }

            this.getCategory(this.selectedSubCat == '' ? this.selectedCat : this.selectedSubCat);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            if (this.step > 1) {
              if (this.hasSubCat == false && this.step == 3) {
                this.step = 1;
              } else {
                this.step -= 1;
              }
            }
          }
        }]);

        return SelectNewTopicComponent;
      }();

      SelectNewTopicComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      SelectNewTopicComponent.propDecorators = {
        messageText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['message']
        }]
      };
      SelectNewTopicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-new-topic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select-new-topic.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/select-new-topic/select-new-topic.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select-new-topic.component.scss */
        "./src/app/common-component/select-new-topic/select-new-topic.component.scss"))["default"]]
      })], SelectNewTopicComponent);
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
//# sourceMappingURL=advisory-list-advisory-list-module-es5.js.map