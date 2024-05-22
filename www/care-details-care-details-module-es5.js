(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["care-details-care-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/care-details/care-details.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/care-details/care-details.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCareDetailsCareDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon color=\"secondary\" name=\"ic-notification\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-segment class=\"ion-padding-horizontal ion-padding-top\" mode=\"md\" [(ngModel)]=\"sectionType\" *ngIf=\"from != 'animals'\">\n    <ion-segment-button value=\"about\">\n      <ion-label>{{'about' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"care\" *ngIf=\"details?.treatmentList\">\n      <ion-label>{{'treatment' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"symptom\" *ngIf=\"details?.symptomList\">\n      <ion-label>{{'symptoms' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"content\">\n    <div class=\"banner\">\n      <img [src]=\"path + details?.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n      <div class=\"title\">\n        <ion-label>{{currentLang == 'en' ? details?.title : details?.title_ar}}</ion-label>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"name\">\n        <ion-label>\n          <h1>{{currentLang == 'en' ? details?.title : details?.title_ar}}</h1>\n        </ion-label>\n      </div>\n      <div class=\"action-btns\">\n        <ion-icon name=\"ic-share\" class=\"ion-hide\"></ion-icon>\n        <ion-icon name=\"ic-filter\" (click)=\"openFilter()\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"about-wrapper\" *ngIf=\"sectionType == 'about'\">\n      <div class=\"inner-details ion-padding\">\n        <section id=\"detail{{item.targetId}}\" class=\"ion-padding-bottom\" *ngFor=\"let item of details?.sections\">\n          <label>\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </label>\n          <div class=\"description\">\n            <div [innerHtml]=\"(currentLang == 'en' ? item.description : item.description_ar) | safeHtml\"></div>\n          </div>\n          <div class=\"media\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let itm of item.medias | slice:0:2; let i=index\">\n                  <div class=\"media-item\">\n                    <div *ngIf=\"itm.type == 'picture'\">\n                    <img (click)=\"openImages(item)\" [src]=\"path + itm.url\"  onError=\"this.src='./assets/no-image.svg'\" />\n                  </div>\n                  <div *ngIf=\"itm.type == 'video'\" (click)=\"openImages(item)\">\n                    <iframe width=\"100%\" height=\"150\" [src]=\"itm.url\">\n                    </iframe>\n                  </div>\n                  <div *ngIf=\"itm.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-xls\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-pdf\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-doc\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-ppt\"></ion-icon>\n                  </div>\n                    <div class=\"overlay\" *ngIf=\"item.medias.length > 2 && i == 1\" (click)=\"openImages(item)\">\n                      <h1>+{{item.medias.length - 1}}</h1>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </section>\n      </div>\n    </div>\n    <div class=\"care-wrapper\" *ngIf=\"sectionType == 'care'\">\n      <div class=\"inner-details\">\n        <ion-card *ngFor=\"let treatment of details?.treatmentList\">\n          <img [src]=\"path + treatment.banner\"  onError=\"this.src='./assets/no-image.svg'\" (click)=\"diseaseDetails(treatment.id)\" />\n          <ion-card-content>\n            <div class=\"pest-foot\">\n              <ion-text (click)=\"diseaseDetails(treatment.id)\">{{ currentLang == 'en' ? treatment?.title : treatment?.title_ar }}</ion-text>\n              <!-- <ion-icon name=\"ic-chat\" [routerLink]=\"['/conversation']\"></ion-icon> -->\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <div class=\"care-wrapper\" *ngIf=\"sectionType == 'symptom'\">\n      <div class=\"inner-details\">\n        <ion-card *ngFor=\"let symptom of details?.symptomList\">\n          <img [src]=\"path + symptom.banner\"  onError=\"this.src='./assets/no-image.svg'\" (click)=\"symptomDetails(symptom.id)\" />\n          <ion-card-content>\n            <div class=\"pest-foot\">\n              <ion-text (click)=\"symptomDetails(symptom.id)\">{{ currentLang == 'en' ? symptom?.title : symptom?.title_ar }}</ion-text>\n              <!-- <ion-icon name=\"ic-chat\" [routerLink]=\"['/conversation']\"></ion-icon> -->\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/care-details/care-details-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/care-details/care-details-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CareDetailsPageRoutingModule */

    /***/
    function srcAppCareDetailsCareDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareDetailsPageRoutingModule", function () {
        return CareDetailsPageRoutingModule;
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


      var _care_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./care-details.page */
      "./src/app/care-details/care-details.page.ts");

      var routes = [{
        path: '',
        component: _care_details_page__WEBPACK_IMPORTED_MODULE_3__["CareDetailsPage"]
      }];

      var CareDetailsPageRoutingModule = function CareDetailsPageRoutingModule() {
        _classCallCheck(this, CareDetailsPageRoutingModule);
      };

      CareDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CareDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/care-details/care-details.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/care-details/care-details.module.ts ***!
      \*****************************************************/

    /*! exports provided: CareDetailsPageModule */

    /***/
    function srcAppCareDetailsCareDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareDetailsPageModule", function () {
        return CareDetailsPageModule;
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


      var _care_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./care-details-routing.module */
      "./src/app/care-details/care-details-routing.module.ts");
      /* harmony import */


      var _care_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./care-details.page */
      "./src/app/care-details/care-details.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/common-component.module */
      "./src/app/common-component/common-component.module.ts");

      var CareDetailsPageModule = function CareDetailsPageModule() {
        _classCallCheck(this, CareDetailsPageModule);
      };

      CareDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"], _care_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CareDetailsPageRoutingModule"]],
        declarations: [_care_details_page__WEBPACK_IMPORTED_MODULE_6__["CareDetailsPage"]]
      })], CareDetailsPageModule);
      /***/
    },

    /***/
    "./src/app/care-details/care-details.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/care-details/care-details.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCareDetailsCareDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-segment-button {\n  --indicator-height: 6px;\n  text-transform: uppercase;\n}\n\n.segment-button-checked {\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-segment::part(indicator) {\n  width: 80% !important;\n  margin: auto !important;\n}\n\nion-segment-button::part(indicator-background) {\n  border-radius: 25px;\n}\n\n.content .banner {\n  position: relative;\n}\n\n.content .banner:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: linear-gradient(180deg, #242933 0%, transparent 50%);\n  content: \"\";\n}\n\n.content .banner img {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .banner .title {\n  font-size: 2.4rem;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.content .actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 16px;\n  border-bottom: 1px solid #F3F3F3;\n  padding: 16px 0;\n}\n\n.content .action-btns {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n}\n\n.content .action-btns ion-icon {\n  padding: 0 8px;\n}\n\n.content .care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.content .care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content .care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.content .doc-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.content .doc-wrapper .doc-type {\n  font-size: 2rem;\n  background: #D8D8D8;\n  padding: 16px;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n\n.content .doc-wrapper .title ion-label {\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.content .inner-details section {\n  border-bottom: 1px solid #F3F3F3;\n}\n\n.content .inner-details section .description {\n  line-height: 1.8;\n  text-align: justify !important;\n}\n\n.content .inner-details section .media ion-grid {\n  padding: 0px;\n  --ion-grid-column-padding: 5px;\n}\n\n.content .inner-details section .media .media-item {\n  position: relative;\n  height: 100%;\n}\n\n.content .inner-details section .media .media-item .other-docs {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  min-height: 120px;\n}\n\n.content .inner-details section .media .media-item img {\n  width: 100%;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .inner-details section .media .media-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content .inner-details section .media .media-item .overlay h1 {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZS1kZXRhaWxzL2NhcmUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUtJO0VBQ0ksa0JBQUE7QUFGUjs7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdFQUFBO0VBQ0EsV0FBQTtBQUZaOztBQUtRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBSFo7O0FBTVE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBSlo7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFOUjs7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUFI7O0FBU1E7RUFDSSxjQUFBO0FBUFo7O0FBWVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBVlo7O0FBYVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVhaOztBQWFZO0VBQ0ksaUJBQUE7QUFYaEI7O0FBaUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBZlI7O0FBaUJRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWZaOztBQW1CWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFqQmhCOztBQXlCUTtFQUNJLGdDQUFBO0FBdkJaOztBQXlCWTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7QUF2QmhCOztBQTJCZ0I7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUF6QnBCOztBQTRCZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUExQnBCOztBQTJCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBekJ4Qjs7QUEyQm9CO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBMUJ4Qjs7QUE2Qm9CO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTNCeEI7O0FBNkJ3QjtFQUNJLGVBQUE7QUEzQjVCIiwiZmlsZSI6InNyYy9hcHAvY2FyZS1kZXRhaWxzL2NhcmUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXNlZ21lbnQ6OnBhcnQoaW5kaWNhdG9yKSB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b246OnBhcnQoaW5kaWNhdG9yLWJhY2tncm91bmQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5cblxuLmNvbnRlbnQge1xuICAgIC5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI0MjkzMyAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjNGM0YzO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG5zIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZS13cmFwcGVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGVzdC1mb290IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kb2Mtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmRvYy10eXBlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlubmVyLWRldGFpbHMge1xuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjNGM0YzO1xuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1lZGlhLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLm90aGVyLWRvY3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogLjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/care-details/care-details.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/care-details/care-details.page.ts ***!
      \***************************************************/

    /*! exports provided: CareDetailsPage */

    /***/
    function srcAppCareDetailsCareDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareDetailsPage", function () {
        return CareDetailsPage;
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


      var _common_component_topic_filter_topic_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common-component/topic-filter/topic-filter.component */
      "./src/app/common-component/topic-filter/topic-filter.component.ts");
      /* harmony import */


      var _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common-component/topic-images/topic-images.component */
      "./src/app/common-component/topic-images/topic-images.component.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var CareDetailsPage = /*#__PURE__*/function () {
        function CareDetailsPage(modalCtrl, router, service, helperService, translateService, alertController, iab, previewAnyFile, route, sanitizer) {
          var _this = this;

          _classCallCheck(this, CareDetailsPage);

          this.modalCtrl = modalCtrl;
          this.router = router;
          this.service = service;
          this.helperService = helperService;
          this.translateService = translateService;
          this.alertController = alertController;
          this.iab = iab;
          this.previewAnyFile = previewAnyFile;
          this.route = route;
          this.sanitizer = sanitizer;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domain;
          this.sectionType = 'about';
          this.currentLang = this.helperService.getLang();
          this.route.queryParams.subscribe(function (_res) {
            _this.selectedId = _res.id;
            _this.from = _res.from;

            _this.getDiseaseById(_this.selectedId);
          });
        }

        _createClass(CareDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "diseaseDetails",
          value: function diseaseDetails(id) {
            this.router.navigate(['/treatment-details'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "symptomDetails",
          value: function symptomDetails(id) {
            this.router.navigate(['/symptom-details'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "openFilter",
          value: function openFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _common_component_topic_filter_topic_filter_component__WEBPACK_IMPORTED_MODULE_4__["TopicFilterComponent"],
                        cssClass: 'transparent-modal',
                        showBackdrop: false,
                        componentProps: {
                          details: this.details
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data.id) {
                          _this2.goToSection(data.data.id);
                        }
                      });
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
          key: "openImages",
          value: function openImages(_images) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_5__["TopicImagesComponent"],
                        showBackdrop: false,
                        componentProps: {
                          details: _images
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goToSection",
          value: function goToSection(_id) {
            var yOffset = document.getElementById('detail' + _id).offsetTop;
            var yHOffset = document.getElementById('detail' + _id).offsetHeight;
            this.content.scrollToPoint(0, yOffset, 1000);
          }
        }, {
          key: "getDiseaseById",
          value: function getDiseaseById(_id) {
            var _this3 = this;

            this.service.getDiseaseById(_id).subscribe(function (_res) {
              _this3.details = _res;

              _this3.details.sections.sort(function (a, b) {
                return a.indexing - b.indexing;
              });

              _this3.details.sections.forEach(function (_item) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(_this3.currentLang == 'en' ? _item.description : _item.description_ar, 'text/html');
                var oEmb = doc.getElementsByTagName('oembed');

                for (var oe = 0; oe < oEmb.length; oe++) {
                  var oEmbObj = oEmb[oe];
                  var vURL = oEmbObj.getAttribute('url');
                  var viframe = document.createElement("iframe");
                  viframe.src = 'https://www.youtube.com/embed' + vURL.substr(vURL.lastIndexOf('/'));
                  viframe.height = '300px';
                  viframe.width = '100%';
                  oEmbObj.parentNode.appendChild(viframe);
                  oEmbObj.remove();
                }

                if (_this3.currentLang == 'en') {
                  _item.description = doc.body.innerHTML;
                } else {
                  _item.description_ar = doc.body.innerHTML;
                }

                _item.medias.sort(function (a, b) {
                  return a.indexing - b.indexing;
                });

                _item.medias.forEach(function (_media) {
                  if (_media.type.toLowerCase() === 'video') {
                    _media.url = _this3.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed' + _media.url.substr(_media.url.lastIndexOf('/')));
                  }
                });
              });

              setTimeout(function () {
                var fig = document.querySelectorAll('figure.table');
                fig.forEach(function (_item) {
                  var figth = _item.querySelectorAll('th');

                  figth.forEach(function (_item2) {
                    _item2.style.minWidth = _item2.style.width;
                  });

                  var figtd = _item.querySelectorAll('td');

                  figtd.forEach(function (_item3) {
                    _item3.style.minWidth = _item3.style.width;
                  });
                });
              }, 100);
            });
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
        }, {
          key: "getYoutubeID",
          value: function getYoutubeID(_url) {
            console.log('https://www.youtube.com/embed' + _url.substr(_url.lastIndexOf('/')));
            return this.sanitizer.bypassSecurityTrustUrl('https://www.youtube.com/embed' + _url.substr(_url.lastIndexOf('/')));
          }
        }]);

        return CareDetailsPage;
      }();

      CareDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_11__["PreviewAnyFile"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
        }];
      };

      CareDetailsPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            "static": false
          }]
        }]
      };
      CareDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-care-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./care-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/care-details/care-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./care-details.page.scss */
        "./src/app/care-details/care-details.page.scss"))["default"]]
      })], CareDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=care-details-care-details-module-es5.js.map