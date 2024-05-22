(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~animal-symptoms-animal-symptoms-module~animal-symptoms-detail-animal-symptoms-detail-module~~d81a9405"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/btn-notification/btn-notification.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/btn-notification/btn-notification.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentBtnNotificationBtnNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button (click)=\"notifications()\">\n  <div>\n    <ion-icon color=\"dark\" name=\"ic-notification\"></ion-icon>\n    <ion-badge color=\"danger\" *ngIf=\"count > 0\">{{count}}</ion-badge>\n  </div>\n</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/category-modal/category-modal.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/category-modal/category-modal.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentCategoryModalCategoryModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\" (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"type == '1'\">{{\"selectCategory\" | translate}}</ion-title>\n    <ion-title *ngIf=\"type == '2'\">{{\"SelectYourAnimal\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main\">\n    <div class=\"content ion-padding-horizontal\">\n      <div>\n        <div *ngIf=\"dummy\">\n          <ion-grid class=\"ion-no-padding custom-skeleton\">\n            <ion-row>\n              <ion-col size=\"3\" *ngFor=\"let item of dummy\">\n                <div class=\"dimg\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                </div>\n                <ion-label>\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </ion-label>\n                </ion-col>\n                </ion-row>\n          </ion-grid>\n        </div>    \n        <div *ngIf=\"hasSubCat\" class=\"header\">\n          <ion-segment mode=\"ios\">\n            <ion-segment-button (click)=\"back()\">\n              <div>\n                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                <ion-img [src]=\"path + catDetails.icon\" (ionError)=\"onError($event)\"></ion-img>\n                <ion-label *ngIf=\"currentLang == 'en'\">{{catDetails.name}}</ion-label>\n                <ion-label *ngIf=\"currentLang == 'ar'\">{{catDetails.name_ar}}</ion-label>\n              </div>\n            </ion-segment-button>\n           \n          </ion-segment>\n        </div>\n        <ion-grid *ngIf=\"!hasSubCat\">\n          <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let item of filterCat\">\n              <div class=\"item\" [ngClass]=\"selectedCat?.id == item.id ? 'selected' : ''\" (click)=\"selectItem(item)\">\n                <ion-img [src]=\"path + item.icon\" (ionError)=\"onError($event)\"></ion-img>\n                <ion-text *ngIf=\"currentLang == 'en'\">{{item.name}}</ion-text>\n              <ion-text *ngIf=\"currentLang == 'ar'\">{{item.name_ar}}</ion-text>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid *ngIf=\"hasSubCat\">\n          <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let item of subCatList\">\n              <div class=\"item\" [ngClass]=\"selectedCat?.id == item.id ? 'selected' : ''\" (click)=\"selectItem(item)\">\n                <ion-img [src]=\"path + item.icon\" (ionError)=\"onError($event)\"></ion-img>\n                <ion-text *ngIf=\"currentLang == 'en'\">{{item.name}}</ion-text>\n              <ion-text *ngIf=\"currentLang == 'ar'\">{{item.name_ar}}</ion-text>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer mode=\"ios\" class=\"ion-padding-horizontal ion-padding-bottom\">\n  <ion-toolbar>\n    <ion-button *ngIf=\"type == '1'\" expand=\"block\" (click)=\"submit()\">{{\"select\" | translate}}</ion-button>\n    <ion-button *ngIf=\"type == '2'\" expand=\"block\" (click)=\"submit()\">{{\"ShowSymptom\" | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/category-types/category-types.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/category-types/category-types.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentCategoryTypesCategoryTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"secondary\" (click)=\"dismiss()\">\n          {{'close' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-list class=\"ion-no-padding\">\n      <ion-item *ngFor=\"let item of category\" lines=\"none\" (click)=\"selectCat(item.id)\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"path + item.icon\" onError=\"this.src='./assets/no-image.svg'\"/>\n        </ion-thumbnail>\n        <ion-label *ngIf=\"currentLang == 'en'\">{{item.type}}</ion-label>\n          <ion-label *ngIf=\"currentLang == 'ar'\">{{item.type_ar}}</ion-label>\n      </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/event-search/event-search.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/event-search/event-search.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentEventSearchEventSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngFor=\"let itm of filterEvents\" class=\"event-details\" (click)=\"goToEvent(itm.id)\">\n  <img [src]=\"path + itm.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n  <ion-card-header>\n    <ion-card-subtitle>{{itm.startDate | date:'dd/MM/yyyy'}}</ion-card-subtitle>\n    <ion-card-title>{{ currentLang == 'en' ? itm.title : itm.title_ar }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    {{ currentLang == 'en' ? itm.description : itm.description_ar }}\n  </ion-card-content>\n</ion-card>\n<div class=\"empty-search\" *ngIf=\"search != '' && filterEvents.length == 0\">\n  <app-explore-container name=\"{{'noResultFound' | translate}}\"></app-explore-container>\n</div>";
      /***/
    },

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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/notifications/notifications.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/notifications/notifications.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon color=\"dark\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'notifications' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"clear()\" *ngIf=\"notificationList?.length > 0\">\n        {{'clear' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ng-container *ngFor=\"let item of notificationList\">\n      <ion-item detail *ngIf=\"item.additionalData && item.additionalData?.type != 'chat'\" (click)=\"goToDetails(item.additionalData)\">\n        <div class=\"not-item\">\n          <div class=\"icon\">\n            <ion-icon *ngIf=\"item.additionalData?.type == 'topic'\" name=\"ic-topic\"></ion-icon>\n            <ion-icon *ngIf=\"item.additionalData?.type == 'event'\" name=\"ic-cal\"></ion-icon>\n          </div>\n          <div class=\"details\">\n            <ion-label>{{item.body}}</ion-label>\n            <ion-text class=\"time\">{{item.date | date: 'dd MMM, yyyy hh:mm a'}}</ion-text>\n          </div>\n        </div>\n      </ion-item>\n      <ion-item *ngIf=\"!item.additionalData\">\n        <div class=\"not-item\">\n          <div class=\"icon\">\n            <ion-icon name=\"notifications-outline\"></ion-icon>\n          </div>\n        <div class=\"details\">\n          <ion-label>{{item.body}}</ion-label>\n          <ion-text class=\"time\">{{item.date | date: 'dd MMM, yyyy hh:mm a'}}</ion-text>\n        </div>\n        </div>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n  <div *ngIf=\"notificationList.length == 0 || !notificationList\">\n    <app-explore-container name=\"{{'nothingToShow' | translate}}\"></app-explore-container>\n  </div>\n</ion-content>";
      /***/
    },

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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/select-advisory/select-advisory.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/select-advisory/select-advisory.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentSelectAdvisorySelectAdvisoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"secondary\" (click)=\"dismiss('close')\">\n          {{'close' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<ion-list>\n  <ion-radio-group [(ngModel)]=\"selectedAdvisor\">\n    <ion-item  *ngFor=\"let advisor of AdvisorList\">\n      <ion-avatar>\n        <img [src]=\"advisor.profilePic\" onError=\"this.src='./assets/person-circle-outline.svg'\">\n      </ion-avatar>\n      <ion-label>{{advisor.name}}</ion-label>\n      <ion-radio mode=\"md\" slot=\"start\" [value]=\"advisor.id\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n</ion-content>\n\n<ion-footer mode=\"ios\" class=\"ion-padding-horizontal ion-padding-bottom\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"dismiss('next')\">{{\"select\" | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-filter/topic-filter.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-filter/topic-filter.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentTopicFilterTopicFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{currentLang == 'en' ? details.categories?.name : details.categories?.name_ar}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('')\">\n        <ion-icon color=\"primary\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>{{currentLang == 'en' ? details?.title : details?.title_ar}}</ion-text>\n  </div>\n  <ion-list class=\"ion-padding\">\n    <ion-item class=\"ion-no-padding\" *ngFor=\"let item of details.sections\" (click)=\"close(item)\">\n          <ion-label class=\"ion-padding-horizontal\">\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-images/topic-images.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-images/topic-images.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentTopicImagesTopicImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{'viewImages' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon color=\"light\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>{{ currentLang == 'en' ? details.heading : details.heading_ar}}</ion-text>\n  </div>\n  <!-- <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>What you want Know?</ion-text>\n  </div> -->\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"none\" class=\"ion-no-padding\" *ngFor=\"let image of details.medias\">\n      <div *ngIf=\"image.type == 'picture'\">\n        <img [src]=\"path + image.url\" onError=\"this.src='./assets/no-image.svg'\"/>\n        <ion-text>{{ currentLang == 'en' ? image.title : image.title_ar}}</ion-text>\n      </div>\n      <div *ngIf=\"image.type == 'video'\" >\n        <iframe width=\"100%\" height=\"300\" [src]=\"image.url\">\n        </iframe>\n      </div>\n      <div *ngIf=\"image.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-xls\"></ion-icon>\n      </div>\n      <div *ngIf=\"image.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-pdf\"></ion-icon>\n      </div>\n      <div *ngIf=\"image.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-doc\"></ion-icon>\n      </div>\n      <div *ngIf=\"image.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-ppt\"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/weather/weather.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/weather/weather.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentWeatherWeatherComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"weather-wrapper\">\n  \n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"5\">\n        <div class=\"temp\">\n          <div class=\"high\">\n            <ion-text>{{'highest' | translate}}</ion-text>\n            <ion-label><h2>{{weatherData.days[0].tempmax}}</h2></ion-label>\n          </div>\n          <div class=\"low\">\n            <ion-text>{{'lowest' | translate}}</ion-text>\n            <ion-label><h2>{{weatherData?.days[0].tempmin}}</h2></ion-label>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div class=\"weather\">\n          <div class=\"content\">\n              <ion-text>{{'weather' | translate}}</ion-text>\n              <ion-label>{{getCondition(weatherData.currentConditions.icon)}}</ion-label>\n          </div>\n          <div class=\"icon\">\n              <ion-icon [name]=\"weatherData.currentConditions.icon\"></ion-icon>\n          </div>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n</div>";
      /***/
    },

    /***/
    "./src/app/common-component/btn-notification/btn-notification.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/common-component/btn-notification/btn-notification.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentBtnNotificationBtnNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div {\n  position: relative;\n  padding-right: 16px;\n}\ndiv ion-icon {\n  font-size: 24px;\n}\ndiv ion-badge {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9idG4tbm90aWZpY2F0aW9uL2J0bi1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFBQTtFQUNJLGVBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9idG4tbm90aWZpY2F0aW9uL2J0bi1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5wYWRkaW5nLXJpZ2h0OiAxNnB4O1xuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuaW9uLWJhZGdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG59XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common-component/btn-notification/btn-notification.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/common-component/btn-notification/btn-notification.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: BtnNotificationComponent */

    /***/
    function srcAppCommonComponentBtnNotificationBtnNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BtnNotificationComponent", function () {
        return BtnNotificationComponent;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../notifications/notifications.component */
      "./src/app/common-component/notifications/notifications.component.ts");

      var BtnNotificationComponent = /*#__PURE__*/function () {
        function BtnNotificationComponent(util, router, modalCtrl, ngZone) {
          var _this = this;

          _classCallCheck(this, BtnNotificationComponent);

          this.util = util;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.ngZone = ngZone;
          this.count = 0;

          if (localStorage.getItem('notifications')) {
            var filter = JSON.parse(localStorage.getItem('notifications'));
            filter = filter.forEach(function (element) {
              var _a;

              return ((_a = element.additionalData) === null || _a === void 0 ? void 0 : _a.type) != 'chat' || !element.additionalData;
            });
            this.count = JSON.parse(localStorage.getItem('notifications')).length;
          }

          this.util.observNotiCount().subscribe(function (_res) {
            _this.ngZone.run(function () {
              _this.count = _res;
            });
          });
        }

        _createClass(BtnNotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "notifications",
          value: function notifications() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"],
                        cssClass: '',
                        showBackdrop: false,
                        componentProps: {}
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
        }]);

        return BtnNotificationComponent;
      }();

      BtnNotificationComponent.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      BtnNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./btn-notification.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/btn-notification/btn-notification.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./btn-notification.component.scss */
        "./src/app/common-component/btn-notification/btn-notification.component.scss"))["default"]]
      })], BtnNotificationComponent);
      /***/
    },

    /***/
    "./src/app/common-component/category-modal/category-modal.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/common-component/category-modal/category-modal.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentCategoryModalCategoryModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-button {\n  --ion-color-primary-contrast: var(--ion-color-secondary);\n}\n.main .title {\n  color: var(--ion-color-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.main .title ion-label {\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-bottom: 6px;\n}\n.main ion-segment {\n  --background: transparent;\n  border: 2px solid #979797 !important;\n  --ion-background-color: #fff !important;\n  --box-shadow: none;\n  height: 44px !important;\n}\n.main ion-segment ion-segment-button {\n  margin: 0 !important;\n  --border-radius: 0;\n  --indicator-box-shadow: 0;\n}\n.main ion-segment ion-segment-button ion-label {\n  margin: 0 10px;\n}\n.main ion-segment ion-segment-button ion-img::part(image) {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.main ion-segment ion-segment-button::part(indicator) {\n  margin-left: -2px;\n  margin-right: -2px;\n}\n.main ion-segment ion-segment-button:before {\n  margin: 0 !important;\n  --border-width: 0 !important;\n}\n.main ion-segment ion-segment-button div {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.main ion-segment ion-segment-button div ion-icon {\n  font-size: 1.4rem;\n  margin-right: 8px;\n}\n.main .item {\n  margin: 8px auto;\n  text-align: center;\n}\n.main .item.selected ion-img {\n  background: rgba(184, 204, 148, 0.5);\n}\n.main .item.selected:before {\n  content: \"\";\n  position: absolute;\n  height: 24px;\n  width: 24px;\n  background: var(--ion-color-secondary);\n  border-radius: 50%;\n  top: 6px;\n  z-index: 99;\n  right: 0px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n.main .item.selected:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 10px;\n  transform: rotate(45deg);\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  top: 10px;\n  z-index: 99;\n  right: 9px;\n  border-color: #fff;\n}\n.main .item ion-img {\n  height: 64px;\n  max-width: 64px;\n  margin: auto;\n  border: 2px solid #e5e7e6;\n  padding: 4px;\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n.main .item ion-img::part(image) {\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 2px;\n}\n.main .item ion-text {\n  font-size: 0.8rem;\n}\n.custom-skeleton .dimg ion-skeleton-text {\n  height: 70px;\n  width: 80%;\n  margin: auto;\n  border-radius: 12px;\n}\n.custom-skeleton ion-label ion-skeleton-text {\n  width: 50% !important;\n  margin: auto;\n  margin-top: 8px;\n  height: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9jYXRlZ29yeS1tb2RhbC9jYXRlZ29yeS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7QUFDSTtFQUNJLHdEQUFBO0FBQ1I7QUFHSTtFQUNJLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFSO0FBRVE7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUtJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS1E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFIWjtBQUlZO0VBQ0ksY0FBQTtBQUZoQjtBQUtnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUhwQjtBQU1ZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUpoQjtBQU9ZO0VBQ0ksb0JBQUE7RUFDQSw0QkFBQTtBQUxoQjtBQVFZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU5oQjtBQU9nQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFMcEI7QUFXSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVlZO0VBQ0ksb0NBQUE7QUFWaEI7QUFhWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0FBWGhCO0FBY1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBWmhCO0FBZ0JRO0VBS0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUoseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQW5CUjtBQVFZO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0FBTmhCO0FBa0JRO0VBQ0ksaUJBQUE7QUFoQlo7QUF1QlE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXBCWjtBQXlCUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBdkJaIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9jYXRlZ29yeS1tb2RhbC9jYXRlZ29yeS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbn1cbi5tYWluIHtcbiAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk3OTc5NyAhaW1wb3J0YW50O1xuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogMDtcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgJjo6cGFydChpbWFnZSl7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjo6cGFydChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbSB7XG4gICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxODQgMjA0IDE0OCAvIC41KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAmOjpwYXJ0KGltYWdlKXtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjRweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlNjtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jdXN0b20tc2tlbGV0b24ge1xuICAgIC5kaW1nIHtcbiAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/category-modal/category-modal.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/common-component/category-modal/category-modal.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CategoryModalComponent */

    /***/
    function srcAppCommonComponentCategoryModalCategoryModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryModalComponent", function () {
        return CategoryModalComponent;
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


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var CategoryModalComponent = /*#__PURE__*/function () {
        function CategoryModalComponent(service, helperService, modalCtrl, util) {
          _classCallCheck(this, CategoryModalComponent);

          this.service = service;
          this.helperService = helperService;
          this.modalCtrl = modalCtrl;
          this.util = util;
          this.filterCat = [];
          this.animal = [];
          this.dummy = Array(4);
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domain;
          this.hasSubCat = false;
          this.subCatList = [];
          this.currentLang = this.helperService.getLang();
        }

        _createClass(CategoryModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTopicCategories();
            console.log('type', this.type);
          }
        }, {
          key: "getTopicCategories",
          value: function getTopicCategories() {
            var _this2 = this;

            this.service.getTopicsCategory().subscribe(function (_res) {
              _this2.catList = _res;
              console.log('topicscategory', _res); // this.agriculture = this.catList[0].categoriesList;

              if (_this2.type == '1') {
                _this2.filterCat = _this2.catList.filter(function (_type) {
                  return _type.type.trim().toLowerCase() == 'agriculture';
                });
                _this2.filterCat = _this2.filterCat[0].categories;
              } else if (_this2.type == '2') {
                _this2.filterCat = _this2.catList.filter(function (_type) {
                  return _type.masterTag.trim().toLowerCase() == 'animal';
                });
                _this2.filterCat = _this2.filterCat[0].categories; // this.filterCat = this.catList[1].categories;
              }

              _this2.dummy = [];
            });
          }
        }, {
          key: "selectItem",
          value: function selectItem(_item) {
            if (_item.subCategories.length != 0) {
              this.catDetails = _item;
              this.subCatList = _item.subCategories;
              this.hasSubCat = true;
              this.selectedCat = null;
            } else {
              this.selectedCat = _item;
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.subCatList = [];
            this.hasSubCat = false;
            this.selectedCat = null;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.selectedCat) {
              this.modalCtrl.dismiss({
                cat: this.selectedCat,
                type: this.type
              });
            } else {
              this.helperService.showToast(this.helperService.translate('selectCategory'), 'danger', 'bottom');
            }
          }
        }, {
          key: "onError",
          value: function onError(event) {
            event.srcElement.src = './assets/no-image.svg';
          }
        }]);

        return CategoryModalComponent;
      }();

      CategoryModalComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      CategoryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/category-modal/category-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category-modal.component.scss */
        "./src/app/common-component/category-modal/category-modal.component.scss"))["default"]]
      })], CategoryModalComponent);
      /***/
    },

    /***/
    "./src/app/common-component/category-types/category-types.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/common-component/category-types/category-types.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentCategoryTypesCategoryTypesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  --background: transparent;\n}\nion-header ion-toolbar {\n  --border-width: 0 !important;\n}\nion-header ion-toolbar ion-button {\n  --ion-color-primary-contrast: var(--ion-color-secondary);\n}\nion-toolbar {\n  --border-width: 0 !important;\n}\nion-item {\n  border-bottom: 1px solid #c8c7cc;\n  padding: 8px 0;\n}\nion-item ion-thumbnail img {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9jYXRlZ29yeS10eXBlcy9jYXRlZ29yeS10eXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7QUFBQTtFQUNJLDRCQUFBO0FBRUo7QUFBSTtFQUNJLHdEQUFBO0FBRVI7QUFHQTtFQUNJLDRCQUFBO0FBQUo7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9jYXRlZ29yeS10eXBlcy9jYXRlZ29yeS10eXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbmlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVte1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjN2NjO1xuICAgIHBhZGRpbmc6IDhweCAwO1xuaW9uLXRodW1ibmFpbHtcbiAgICBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbn1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/common-component/category-types/category-types.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/common-component/category-types/category-types.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CategoryTypesComponent */

    /***/
    function srcAppCommonComponentCategoryTypesCategoryTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryTypesComponent", function () {
        return CategoryTypesComponent;
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


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var CategoryTypesComponent = /*#__PURE__*/function () {
        function CategoryTypesComponent(modalCtrl, helperService) {
          _classCallCheck(this, CategoryTypesComponent);

          this.modalCtrl = modalCtrl;
          this.helperService = helperService;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domain;
        }

        _createClass(CategoryTypesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentLang = this.helperService.getLang();
            console.log(this.category, this.currentLang);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "selectCat",
          value: function selectCat(_id) {
            this.modalCtrl.dismiss({
              id: _id
            });
          }
        }]);

        return CategoryTypesComponent;
      }();

      CategoryTypesComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
        }];
      };

      CategoryTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-types',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category-types.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/category-types/category-types.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category-types.component.scss */
        "./src/app/common-component/category-types/category-types.component.scss"))["default"]]
      })], CategoryTypesComponent);
      /***/
    },

    /***/
    "./src/app/common-component/common-component.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/common-component/common-component.module.ts ***!
      \*************************************************************/

    /*! exports provided: CommonComponentPageModule */

    /***/
    function srcAppCommonComponentCommonComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonComponentPageModule", function () {
        return CommonComponentPageModule;
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _weather_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./weather/weather.component */
      "./src/app/common-component/weather/weather.component.ts");
      /* harmony import */


      var _otp_otp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./otp/otp.component */
      "./src/app/common-component/otp/otp.component.ts");
      /* harmony import */


      var _common_component_topic_filter_topic_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/topic-filter/topic-filter.component */
      "./src/app/common-component/topic-filter/topic-filter.component.ts");
      /* harmony import */


      var _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common-component/topic-images/topic-images.component */
      "./src/app/common-component/topic-images/topic-images.component.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var _category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./category-modal/category-modal.component */
      "./src/app/common-component/category-modal/category-modal.component.ts");
      /* harmony import */


      var _btn_notification_btn_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./btn-notification/btn-notification.component */
      "./src/app/common-component/btn-notification/btn-notification.component.ts");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      "./src/app/common-component/notifications/notifications.component.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _event_search_event_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./event-search/event-search.component */
      "./src/app/common-component/event-search/event-search.component.ts");
      /* harmony import */


      var _farm_images_farm_images_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./farm-images/farm-images.component */
      "./src/app/common-component/farm-images/farm-images.component.ts");
      /* harmony import */


      var _category_types_category_types_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./category-types/category-types.component */
      "./src/app/common-component/category-types/category-types.component.ts");
      /* harmony import */


      var _select_advisory_select_advisory_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./select-advisory/select-advisory.component */
      "./src/app/common-component/select-advisory/select-advisory.component.ts");

      var components = [_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__["WeatherComponent"], _otp_otp_component__WEBPACK_IMPORTED_MODULE_7__["OtpComponent"], _common_component_topic_filter_topic_filter_component__WEBPACK_IMPORTED_MODULE_8__["TopicFilterComponent"], _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_9__["TopicImagesComponent"], _category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_11__["CategoryModalComponent"], _btn_notification_btn_notification_component__WEBPACK_IMPORTED_MODULE_12__["BtnNotificationComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"], _event_search_event_search_component__WEBPACK_IMPORTED_MODULE_15__["EventSearchComponent"], _farm_images_farm_images_component__WEBPACK_IMPORTED_MODULE_16__["FarmImagesComponent"], _category_types_category_types_component__WEBPACK_IMPORTED_MODULE_17__["CategoryTypesComponent"], _select_advisory_select_advisory_component__WEBPACK_IMPORTED_MODULE_18__["SelectAdvisoryComponent"]];

      var CommonComponentPageModule = function CommonComponentPageModule() {
        _classCallCheck(this, CommonComponentPageModule);
      };

      CommonComponentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_14__["ExploreContainerComponentModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_10__["NgOtpInputModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        declarations: [components],
        exports: [].concat(components)
      })], CommonComponentPageModule);
      /***/
    },

    /***/
    "./src/app/common-component/event-search/event-search.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/common-component/event-search/event-search.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentEventSearchEventSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.event-details {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\n.event-details ion-card-subtitle {\n  font-weight: 400 !important;\n}\n\n.event-details img {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9ldmVudC1zZWFyY2gvZXZlbnQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLDJCQUFBO0FBRVI7O0FBQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9ldmVudC1zZWFyY2gvZXZlbnQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ldmVudC1kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/event-search/event-search.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/common-component/event-search/event-search.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EventSearchComponent */

    /***/
    function srcAppCommonComponentEventSearchEventSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventSearchComponent", function () {
        return EventSearchComponent;
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


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var EventSearchComponent = /*#__PURE__*/function () {
        function EventSearchComponent(service, router, helperService) {
          _classCallCheck(this, EventSearchComponent);

          this.service = service;
          this.router = router;
          this.helperService = helperService;
          this.eventList = [];
          this.filterEvents = [];
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domain;
          this.currentLang = this.helperService.getLang();
        }

        _createClass(EventSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEvents();
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            var _this3 = this;

            this.service.getEvents().subscribe(function (_res) {
              _this3.eventList = _res;
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            console.log(changes.search.currentValue);

            if (changes.search.currentValue) {
              this.filterEvents = this.eventList.filter(function (_item) {
                return _item.title.toLowerCase().includes(changes.search.currentValue.toLowerCase()) || _item.description.toLowerCase().includes(changes.search.currentValue.toLowerCase());
              });
            } else {
              this.filterEvents = [];
            }
          }
        }, {
          key: "goToEvent",
          value: function goToEvent(id) {
            this.router.navigate(['/event-details'], {
              queryParams: {
                id: id
              }
            });
          }
        }]);

        return EventSearchComponent;
      }();

      EventSearchComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
        }];
      };

      EventSearchComponent.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      EventSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./event-search.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/event-search/event-search.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./event-search.component.scss */
        "./src/app/common-component/event-search/event-search.component.scss"))["default"]]
      })], EventSearchComponent);
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
    "./src/app/common-component/notifications/notifications.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/common-component/notifications/notifications.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0px !important;\n}\n\n.not-item {\n  display: flex;\n  flex-direction: row;\n  padding: 16px 0;\n}\n\n.not-item .details {\n  display: flex;\n  flex-direction: column;\n}\n\n.not-item .details ion-text {\n  font-size: 0.7rem;\n  margin-top: 5px;\n  opacity: 0.7;\n}\n\n.not-item .icon {\n  display: flex;\n  align-items: center;\n}\n\n.not-item .icon ion-icon {\n  font-size: 1.6rem;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ1o7O0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFGWiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTZweCAwO1xuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common-component/notifications/notifications.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/common-component/notifications/notifications.component.ts ***!
      \***************************************************************************/

    /*! exports provided: NotificationsComponent */

    /***/
    function srcAppCommonComponentNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return NotificationsComponent;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_services/helper.service */
      "./src/app/_services/helper.service.ts");

      var NotificationsComponent = /*#__PURE__*/function () {
        function NotificationsComponent(router, modalCtrl, alertCtrl, util, helperService) {
          _classCallCheck(this, NotificationsComponent);

          this.router = router;
          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.util = util;
          this.helperService = helperService;

          if (JSON.parse(localStorage.getItem('notifications'))) {
            this.notificationList = JSON.parse(localStorage.getItem('notifications'));
          } else {
            this.notificationList = [];
          }
        }

        _createClass(NotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToDetails",
          value: function goToDetails(_data) {
            var _this4 = this;

            switch (_data.type) {
              case 'topic':
                this.router.navigate(['/topic-details'], {
                  queryParams: {
                    id: _data.id
                  }
                });
                setTimeout(function () {
                  _this4.modalCtrl.dismiss();
                }, 100);
                break;

              case 'event':
                this.router.navigate(['/event-details'], {
                  queryParams: {
                    id: _data.id
                  }
                });
                setTimeout(function () {
                  _this4.modalCtrl.dismiss();
                }, 100);
                break;

              case 'chat':
                this.router.navigate(['/tabs/chat']);
                setTimeout(function () {
                  _this4.modalCtrl.dismiss();
                }, 100);
                break;

              default:
                break;
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "clear",
          value: function clear() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var _self, alert;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _self = this;
                      _context2.next = 3;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: _self.helperService.translate("confirm"),
                        message: _self.helperService.translate("clearNotification"),
                        buttons: [{
                          text: _self.helperService.translate("no"),
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: _self.helperService.translate("yes"),
                          handler: function handler() {
                            localStorage.removeItem('notifications');
                            _this5.notificationList = [];

                            _this5.util.publishNotiCount(0);
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return NotificationsComponent;
      }();

      NotificationsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }];
      };

      NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notifications.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/notifications/notifications.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notifications.component.scss */
        "./src/app/common-component/notifications/notifications.component.scss"))["default"]]
      })], NotificationsComponent);
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
            var _this6 = this;

            var timer = 120;
            var minutes;
            var seconds;
            this.unsubscribe = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000).subscribe(function (x) {
              minutes = Math.floor(timer / 60);
              seconds = Math.floor(timer % 60);
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;
              _this6.timeLeft = minutes + ":" + seconds;
              timer--;

              if (timer < 0) {
                _this6.timeLeft = 0;
                _this6.otpExpired = true;

                _this6.unsubscribe.unsubscribe();
              }
            });
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp() {
            var _this7 = this;

            var payload = {
              "refCode": this.data.refCode,
              "OTP": this.otp
            };
            this.helperService.show();
            this.service.verifyOTP(payload).subscribe(function (_res) {
              if (_res.code != 'FG400-VOTP') {
                _this7.register(_this7.data.user);
              } else {
                _this7.helperService.hide();

                _this7.showToast(_res.msg, 'danger', 'bottom');
              }
            });
          }
        }, {
          key: "resendOTP",
          value: function resendOTP() {
            var _this8 = this;

            this.service.generateOTP(this.data.user.mobile).subscribe(function (_res) {
              _this8.showToast(_res.otp, 'success', 'bottom');

              _this8.timeLeft = 0;
              _this8.otpExpired = false;

              _this8.startTimer();
            });
          }
        }, {
          key: "showToast",
          value: function showToast(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 5000,
                        color: colors,
                        position: positon
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "register",
          value: function register(_payload) {
            var _this9 = this;

            this.service.register(_payload).subscribe(function (_res) {
              _this9.modalController.dismiss();

              _this9.helperService.hide();

              _this9.router.navigate(['/member-login']);

              _this9.helperService.showToast(_this9.helperService.translate('successfullyRegistered'), 'success', 'bottom');
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
    "./src/app/common-component/select-advisory/select-advisory.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/common-component/select-advisory/select-advisory.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentSelectAdvisorySelectAdvisoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\nion-toolbar ion-button {\n  --ion-color-primary-contrast: var(--ion-color-secondary);\n}\nion-item ion-avatar {\n  width: 48px;\n  height: 48px;\n  margin: 8px 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9zZWxlY3QtYWR2aXNvcnkvc2VsZWN0LWFkdmlzb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjtBQUNJO0VBQ0ksd0RBQUE7QUFDUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9zZWxlY3QtYWR2aXNvcnkvc2VsZWN0LWFkdmlzb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxufVxuXG5pb24taXRlbXtcbiAgICBpb24tYXZhdGFye1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/select-advisory/select-advisory.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/common-component/select-advisory/select-advisory.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SelectAdvisoryComponent */

    /***/
    function srcAppCommonComponentSelectAdvisorySelectAdvisoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectAdvisoryComponent", function () {
        return SelectAdvisoryComponent;
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


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");

      var SelectAdvisoryComponent = /*#__PURE__*/function () {
        function SelectAdvisoryComponent(service, modalCtrl) {
          _classCallCheck(this, SelectAdvisoryComponent);

          this.service = service;
          this.modalCtrl = modalCtrl;
          this.AdvisorList = [];
        }

        _createClass(SelectAdvisoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAdvisors();
          }
        }, {
          key: "getAdvisors",
          value: function getAdvisors() {
            var _this10 = this;

            this.service.getAdvisors().subscribe(function (_res) {
              if (_this10.type) {
                debugger;
                _this10.AdvisorList = _res.data.filter(function (_advisor) {
                  return _advisor.masterTag == _this10.type.toLowerCase();
                });
              } else {
                _this10.AdvisorList = _res.data.filter(function (_advisor) {
                  return _advisor.masterTag == 'plant';
                });
              }
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(_type) {
            var _this11 = this;

            if (_type == 'close') {
              this.modalCtrl.dismiss('', '0');
            } else {
              var advisor = this.AdvisorList.filter(function (_advisor) {
                return _advisor.id == _this11.selectedAdvisor;
              });
              this.modalCtrl.dismiss(advisor, '1');
            }
          }
        }]);

        return SelectAdvisoryComponent;
      }();

      SelectAdvisoryComponent.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      SelectAdvisoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-advisory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select-advisory.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/select-advisory/select-advisory.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select-advisory.component.scss */
        "./src/app/common-component/select-advisory/select-advisory.component.scss"))["default"]]
      })], SelectAdvisoryComponent);
      /***/
    },

    /***/
    "./src/app/common-component/topic-filter/topic-filter.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/common-component/topic-filter/topic-filter.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentTopicFilterTopicFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC90b3BpYy1maWx0ZXIvdG9waWMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnQvdG9waWMtZmlsdGVyL3RvcGljLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common-component/topic-filter/topic-filter.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/common-component/topic-filter/topic-filter.component.ts ***!
      \*************************************************************************/

    /*! exports provided: TopicFilterComponent */

    /***/
    function srcAppCommonComponentTopicFilterTopicFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicFilterComponent", function () {
        return TopicFilterComponent;
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


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");

      var TopicFilterComponent = /*#__PURE__*/function () {
        function TopicFilterComponent(modalCtrl, helperService) {
          _classCallCheck(this, TopicFilterComponent);

          this.modalCtrl = modalCtrl;
          this.helperService = helperService;
          this.currentLang = this.helperService.getLang();
        }

        _createClass(TopicFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.details);
          }
        }, {
          key: "close",
          value: function close(_item) {
            this.modalCtrl.dismiss({
              id: _item.targetId
            });
          }
        }]);

        return TopicFilterComponent;
      }();

      TopicFilterComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
        }];
      };

      TopicFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./topic-filter.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-filter/topic-filter.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./topic-filter.component.scss */
        "./src/app/common-component/topic-filter/topic-filter.component.scss"))["default"]]
      })], TopicFilterComponent);
      /***/
    },

    /***/
    "./src/app/common-component/topic-images/topic-images.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/common-component/topic-images/topic-images.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentTopicImagesTopicImagesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n  --background: var(--ion-color-secondary);\n}\n\nion-content {\n  --background: var(--ion-color-secondary);\n  --color: #fff;\n}\n\nion-content ion-list {\n  background: transparent;\n}\n\nion-content ion-list ion-item {\n  --background: transparent;\n  --color: #fff;\n  --inner-padding-end: 0;\n}\n\nion-content ion-list ion-item .other-docs {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4rem;\n  border: 1px solid #fff;\n  margin: 8px 0;\n}\n\nion-content ion-list ion-item div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-direction: column;\n}\n\nion-content ion-list ion-item div img {\n  width: 100%;\n}\n\nion-content ion-list ion-item div ion-text {\n  margin-bottom: 20px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC90b3BpYy1pbWFnZXMvdG9waWMtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtBQUNSOztBQUNRO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFDWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDaEI7O0FBRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBaEI7O0FBRWdCO0VBQ0ksV0FBQTtBQUFwQjs7QUFHZ0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFEcEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50L3RvcGljLWltYWdlcy90b3BpYy1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiAjZmZmO1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgICAgIC5vdGhlci1kb2NzIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/topic-images/topic-images.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/common-component/topic-images/topic-images.component.ts ***!
      \*************************************************************************/

    /*! exports provided: TopicImagesComponent */

    /***/
    function srcAppCommonComponentTopicImagesTopicImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicImagesComponent", function () {
        return TopicImagesComponent;
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
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");

      var TopicImagesComponent = /*#__PURE__*/function () {
        function TopicImagesComponent(modalCtrl, sanitizer, helperService, previewAnyFile, iab) {
          _classCallCheck(this, TopicImagesComponent);

          this.modalCtrl = modalCtrl;
          this.sanitizer = sanitizer;
          this.helperService = helperService;
          this.previewAnyFile = previewAnyFile;
          this.iab = iab;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain;
          this.currentLang = this.helperService.getLang();
        }

        _createClass(TopicImagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            console.log(this.details);
            this.details.medias.forEach(function (_media) {
              if (_media.type.toLowerCase() === 'video') {
                _media.url = _this12.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed' + _media.url.substr(_media.url.lastIndexOf('/')));
              }
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "getSanitizeUrl",
          value: function getSanitizeUrl(_url) {
            var youtubeEmbed = 'https://www.youtube.com/embed' + _url.substr(_url.lastIndexOf('/'));

            return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
          }
        }, {
          key: "openBrowser",
          value: function openBrowser(_url) {
            this.previewAnyFile.preview(this.path + _url).then(function (res) {
              return console.log(res);
            })["catch"](function (error) {
              return console.error(error);
            });
          }
        }]);

        return TopicImagesComponent;
      }();

      TopicImagesComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__["PreviewAnyFile"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
        }];
      };

      TopicImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./topic-images.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-images/topic-images.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./topic-images.component.scss */
        "./src/app/common-component/topic-images/topic-images.component.scss"))["default"]]
      })], TopicImagesComponent);
      /***/
    },

    /***/
    "./src/app/common-component/weather/weather.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/common-component/weather/weather.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentWeatherWeatherComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".weather-wrapper {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.weather-wrapper .temp {\n  background: rgba(203, 216, 220, 0.2);\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.weather-wrapper .temp div {\n  flex-grow: 1;\n  flex-basis: auto;\n  text-align: center;\n  margin: 10px 0;\n}\n.weather-wrapper .temp div.high {\n  border-right: 1px solid rgba(151, 151, 151, 0.26);\n}\n.weather-wrapper .temp div ion-text {\n  font-size: 10px;\n  opacity: 0.5;\n}\n.weather-wrapper .temp div ion-label h2 {\n  font-size: 1.4rem;\n  color: var(--ion-color-secondary);\n  font-weight: 500;\n}\n.weather-wrapper .weather {\n  background: rgba(203, 216, 220, 0.2);\n  height: 100%;\n  margin-left: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.weather-wrapper .weather .content {\n  display: flex;\n  flex-direction: column;\n}\n.weather-wrapper .weather .content ion-text {\n  font-size: 14px;\n  opacity: 0.5;\n}\n.weather-wrapper .weather .content ion-label {\n  margin-top: 14px;\n  text-transform: capitalize;\n}\n.weather-wrapper .weather .icon ion-icon {\n  display: flex;\n  align-items: center;\n  font-size: 4.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFWjtBQUFZO0VBQ0ksaURBQUE7QUFFaEI7QUFDWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ2hCO0FBR2dCO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBRHBCO0FBT0k7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBTFI7QUFPUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUxaO0FBT1k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUxoQjtBQVFZO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtBQU5oQjtBQVdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50L3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgLnRlbXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAzIDIxNiAyMjAgLyAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgICAgICAgICAmLmhpZ2gge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNTEgMTUxIDE1MSAvIC4yNik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53ZWF0aGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwMyAyMTYgMjIwIC8gLjIpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC40cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common-component/weather/weather.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/common-component/weather/weather.component.ts ***!
      \***************************************************************/

    /*! exports provided: WeatherComponent */

    /***/
    function srcAppCommonComponentWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
        return WeatherComponent;
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


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var WeatherComponent = /*#__PURE__*/function () {
        function WeatherComponent(helperService, diagnostic, geolocation) {
          _classCallCheck(this, WeatherComponent);

          this.helperService = helperService;
          this.diagnostic = diagnostic;
          this.geolocation = geolocation;
          this.weatherData = {
            currentConditions: {
              icon: 'clear'
            },
            days: [{
              tempmax: 0,
              tempmin: 0
            }]
          };
        }

        _createClass(WeatherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('weatherData') != undefined && localStorage.getItem('weatherData') != 'undefined') {
              this.weatherData = JSON.parse(localStorage.getItem('weatherData'));
              var now = moment__WEBPACK_IMPORTED_MODULE_5__(new Date()); //todays date

              var end = moment__WEBPACK_IMPORTED_MODULE_5__(this.weatherData.currentConditions.datetime); // another date

              var duration = moment__WEBPACK_IMPORTED_MODULE_5__["duration"](now.diff(end));

              if (duration.asHours() > 1) {
                this.getLocation();
              }
            } else {
              this.getLocation();
            }
          }
        }, {
          key: "getWeather",
          value: function getWeather(_location) {
            var _this13 = this;

            var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + _location + "?unitGroup=uk&key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].weatherKey;
            this.helperService.getWeather(url).then(function (_res) {
              _this13.weatherData = _res;
              localStorage.setItem('weatherData', JSON.stringify(_res));
            })["catch"](function (error) {});
          }
        }, {
          key: "getCondition",
          value: function getCondition(_condition) {
            return _condition.replace(/-/g, ' ');
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this14 = this;

            this.diagnostic.isLocationEnabled().then(function (data) {
              if (data) {
                _this14.geolocation.getCurrentPosition({
                  maximumAge: 3000,
                  timeout: 10000,
                  enableHighAccuracy: false
                }).then(function (resp) {
                  var location = resp.coords.latitude + ',' + resp.coords.longitude;

                  _this14.getWeather(location);
                })["catch"](function (error) {
                  console.log(error);
                });
              } else {
                _this14.diagnostic.switchToLocationSettings();

                _this14.geolocation.getCurrentPosition({
                  maximumAge: 3000,
                  timeout: 10000,
                  enableHighAccuracy: false
                }).then(function (resp) {
                  if (resp) {
                    var location = resp.coords.latitude + ',' + resp.coords.longitude;

                    _this14.getWeather(location);
                  }
                })["catch"](function (error) {
                  console.log(error);
                });
              }
            }, function (error) {
              console.log('errir', error);

              _this14.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  var location = resp.coords.latitude + ',' + resp.coords.longitude;

                  _this14.getWeather(location);
                }
              })["catch"](function (error) {
                console.log(error);

                _this14.helperService.showToast('Something went wrong please try again later', 'danger', 'bottom'); //this.grantRequest();

              })["catch"](function (error) {
                console.log('error', error);

                _this14.helperService.showToast('Something went wrong please try again later', 'danger', 'bottom');
              }); //this.util.errorToast('Something went wrong please try again later');

            });
          }
        }]);

        return WeatherComponent;
      }();

      WeatherComponent.ctorParameters = function () {
        return [{
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__["Diagnostic"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }];
      };

      WeatherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./weather.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/weather/weather.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./weather.component.scss */
        "./src/app/common-component/weather/weather.component.scss"))["default"]]
      })], WeatherComponent);
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.ts ***!
      \******************************************************************/

    /*! exports provided: ExploreContainerComponent */

    /***/
    function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
        return ExploreContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      ExploreContainerComponent.ctorParameters = function () {
        return [];
      };

      ExploreContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore-container.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore-container.component.scss */
        "./src/app/explore-container/explore-container.component.scss"))["default"]]
      })], ExploreContainerComponent);
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/explore-container/explore-container.module.ts ***!
      \***************************************************************/

    /*! exports provided: ExploreContainerComponentModule */

    /***/
    function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
        return ExploreContainerComponentModule;
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


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-container.component */
      "./src/app/explore-container/explore-container.component.ts");

      var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
      })], ExploreContainerComponentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~animal-symptoms-animal-symptoms-module~animal-symptoms-detail-animal-symptoms-detail-module~~d81a9405-es5.js.map