(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-subject-filter-subject-module"], {
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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-subject/filter-subject.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter-subject/filter-subject.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilterSubjectFilterSubjectPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"!hideHeader\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main\">\n    <div class=\"top-wrapper ion-padding\">\n      <div class=\"title\">\n        <ion-label>{{\"filterSubjects\" | translate}}</ion-label>\n        <!-- <ion-text>{{\"whatDoYouLikeToFindGuideAbout\" | translate}}</ion-text> -->\n      </div>\n\n      <div *ngIf=\"!hasSubCat && catList.length <= 2\" class=\"header\">\n        <!-- <ion-segment mode=\"ios\" [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\"> -->\n        <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button [value]=\"item.id\" *ngFor=\"let item of catList\">\n            <div>\n              <ion-img [src]=\"path + item.icon\"></ion-img>\n              <ion-label *ngIf=\"currentLang == 'en'\">{{item.type}}</ion-label>\n              <ion-label *ngIf=\"currentLang == 'ar'\">{{item.type_ar}}</ion-label>\n            </div>\n          </ion-segment-button>\n\n        </ion-segment>\n      </div>\n\n      <div class=\"header\" *ngIf=\"!hasSubCat && catList.length > 2\">\n        <ion-item lines=\"none\" (click)=\"openModal()\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"path + selectedCat?.icon\" onError=\"this.src='./assets/no-image.svg'\" />\n          </ion-thumbnail>\n          <ion-label *ngIf=\"currentLang == 'en'\">{{selectedCat?.type}}</ion-label>\n          <ion-label *ngIf=\"currentLang == 'ar'\">{{selectedCat?.type_ar}}</ion-label>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </div>\n      <div *ngIf=\"hasSubCat\" class=\"header\">\n        <ion-segment mode=\"ios\">\n          <ion-segment-button (click)=\"back()\">\n            <div>\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"path + catDetails?.icon\" onError=\"this.src='./assets/no-image.svg'\" />\n              </ion-thumbnail>\n              <ion-label *ngIf=\"currentLang == 'en'\">{{catDetails.name}}</ion-label>\n              <ion-label *ngIf=\"currentLang == 'ar'\">{{catDetails.name_ar}}</ion-label>\n            </div>\n          </ion-segment-button>\n\n        </ion-segment>\n      </div>\n    </div>\n    <div class=\"content\" *ngIf=\"!hasSubCat\">\n      <ng-container *ngFor=\"let cat of catList\">\n        <div *ngIf=\"cat.id == type\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"4\" *ngFor=\"let item of cat.categories\">\n                <div class=\"item\" [ngClass]=\"selectedSubCat?.id == item.id ? 'selected' : ''\"\n                  (click)=\"selectItem(item)\">\n                  <ion-img [src]=\"path + item.icon\" (ionError)=\"onError($event)\"></ion-img>\n                  <ion-text *ngIf=\"currentLang == 'en'\">{{item.name}}</ion-text>\n                  <ion-text *ngIf=\"currentLang == 'ar'\">{{item.name_ar}}</ion-text>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div *ngIf=\"dummy\">\n            <ion-grid class=\"ion-no-padding custom-skeleton\">\n              <ion-row>\n                <ion-col size=\"3\" *ngFor=\"let item of dummy\">\n                  <div class=\"dimg\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                  </div>\n                  <ion-label>\n                    <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </ng-container>\n\n    </div>\n    <div class=\"content\" *ngIf=\"hasSubCat\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\" *ngFor=\"let item of subCatList\">\n            <div class=\"item\" [ngClass]=\"selectedSubCat?.id == item.id ? 'selected' : ''\" (click)=\"selectItem(item)\">\n              <ion-img [src]=\"path + item.icon\" (ionError)=\"onError($event)\"></ion-img>\n              <ion-text *ngIf=\"currentLang == 'en'\">{{item.name}}</ion-text>\n              <ion-text *ngIf=\"currentLang == 'ar'\">{{item.name_ar}}</ion-text>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div *ngIf=\"dummy\">\n        <ion-grid class=\"ion-no-padding custom-skeleton\">\n          <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let item of dummy\">\n              <div class=\"dimg\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <ion-label>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer mode=\"ios\" class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-button (click)=\"goToHome()\" expand=\"block\" [disabled]=\"selectedSubCat == undefined || selectedSubCat == null\">\n      {{\"find\" | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>";
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
    "./src/app/filter-subject/filter-subject-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/filter-subject/filter-subject-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FilterSubjectPageRoutingModule */

    /***/
    function srcAppFilterSubjectFilterSubjectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterSubjectPageRoutingModule", function () {
        return FilterSubjectPageRoutingModule;
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


      var _filter_subject_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filter-subject.page */
      "./src/app/filter-subject/filter-subject.page.ts");

      var routes = [{
        path: '',
        component: _filter_subject_page__WEBPACK_IMPORTED_MODULE_3__["FilterSubjectPage"]
      }];

      var FilterSubjectPageRoutingModule = function FilterSubjectPageRoutingModule() {
        _classCallCheck(this, FilterSubjectPageRoutingModule);
      };

      FilterSubjectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FilterSubjectPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/filter-subject/filter-subject.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/filter-subject/filter-subject.module.ts ***!
      \*********************************************************/

    /*! exports provided: FilterSubjectPageModule */

    /***/
    function srcAppFilterSubjectFilterSubjectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterSubjectPageModule", function () {
        return FilterSubjectPageModule;
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


      var _filter_subject_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filter-subject-routing.module */
      "./src/app/filter-subject/filter-subject-routing.module.ts");
      /* harmony import */


      var _filter_subject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filter-subject.page */
      "./src/app/filter-subject/filter-subject.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var FilterSubjectPageModule = function FilterSubjectPageModule() {
        _classCallCheck(this, FilterSubjectPageModule);
      };

      FilterSubjectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _filter_subject_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterSubjectPageRoutingModule"]],
        declarations: [_filter_subject_page__WEBPACK_IMPORTED_MODULE_6__["FilterSubjectPage"]]
      })], FilterSubjectPageModule);
      /***/
    },

    /***/
    "./src/app/filter-subject/filter-subject.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/filter-subject/filter-subject.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilterSubjectFilterSubjectPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n  --background: #FDFDFD;\n}\nion-toolbar ion-button {\n  --ion-color-primary-contrast: var(--ion-color-secondary);\n}\n.main .title {\n  color: var(--ion-color-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 20px;\n}\n.main .title ion-label {\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-bottom: 6px;\n}\n.main .header ion-item {\n  border: 2px solid #979797 !important;\n  border-radius: 8px;\n  margin-top: 10px;\n}\n.main .header ion-item ion-label {\n  text-align: initial;\n}\n.main .header ion-item img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.main ion-segment {\n  --background: transparent;\n  border: 2px solid #979797 !important;\n  --ion-background-color: #B8CC94 !important;\n  --box-shadow: none;\n  height: 64px !important;\n}\n.main ion-segment ion-segment-button {\n  margin: 0 !important;\n  --border-radius: 0;\n  --indicator-box-shadow: 0;\n}\n.main ion-segment ion-segment-button img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.main ion-segment ion-segment-button ion-label {\n  margin: 0 10px;\n}\n.main ion-segment ion-segment-button ion-img::part(image) {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.main ion-segment ion-segment-button::part(indicator) {\n  margin-left: -2px;\n  margin-right: -2px;\n}\n.main ion-segment ion-segment-button:before {\n  margin: 0 !important;\n  --border-width: 0 !important;\n}\n.main ion-segment ion-segment-button div {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.main ion-segment ion-segment-button div ion-icon {\n  font-size: 1.4rem;\n  margin-right: 8px;\n}\n.main .item {\n  margin: 8px auto;\n  text-align: center;\n}\n.main .item ion-img {\n  height: 64px;\n  width: 64px;\n  margin: auto;\n  background: #d5e6ba;\n  padding: 2px;\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n.main .item ion-img::part(image) {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 2px;\n}\n.main .item ion-text {\n  font-size: 0.8rem;\n}\n.top-wrapper {\n  background: #FDFDFD;\n  box-shadow: 0 -5px 12px #636363;\n}\n.custom-skeleton .dimg ion-skeleton-text {\n  height: 70px;\n  width: 80%;\n  margin: auto;\n  border-radius: 12px;\n}\n.custom-skeleton ion-label ion-skeleton-text {\n  width: 50% !important;\n  margin: auto;\n  margin-top: 8px;\n  height: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLXN1YmplY3QvZmlsdGVyLXN1YmplY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSx3REFBQTtBQUNSO0FBSUk7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZaO0FBT1E7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU1RO0VBQ0ksbUJBQUE7QUFKWjtBQU1RO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtBQUpaO0FBU0k7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBUFI7QUFTUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVBaO0FBUVk7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0FBTmhCO0FBUVk7RUFDSSxjQUFBO0FBTmhCO0FBU2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBUHBCO0FBVVk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBUmhCO0FBV1k7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0FBVGhCO0FBWVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBVmhCO0FBV2dCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQVRwQjtBQWVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQWJSO0FBZVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBYlo7QUFjWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBWmhCO0FBZ0JRO0VBQ0ksaUJBQUE7QUFkWjtBQW1CQTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUFoQko7QUFxQlE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWxCWjtBQXVCUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBckJaIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLXN1YmplY3QvZmlsdGVyLXN1YmplY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkRGREZEOyAgXG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxufVxuXG4ubWFpbiB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJ7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNCOENDOTQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcblxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgICY6OnBhcnQoaW1hZ2Upe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OnBhcnQoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBtYXJnaW46IDhweCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkNWU2YmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAmOjpwYXJ0KGltYWdlKXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRvcC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xuICAgIGJveC1zaGFkb3c6IDAgLTVweCAxMnB4ICM2MzYzNjM7XG59XG5cbi5jdXN0b20tc2tlbGV0b24ge1xuICAgIC5kaW1nIHtcbiAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/filter-subject/filter-subject.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/filter-subject/filter-subject.page.ts ***!
      \*******************************************************/

    /*! exports provided: FilterSubjectPage */

    /***/
    function srcAppFilterSubjectFilterSubjectPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterSubjectPage", function () {
        return FilterSubjectPage;
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


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/helper.service */
      "./src/app/_services/helper.service.ts");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _common_component_category_types_category_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/category-types/category-types.component */
      "./src/app/common-component/category-types/category-types.component.ts");

      var FilterSubjectPage = /*#__PURE__*/function () {
        function FilterSubjectPage(service, router, navController, route, helperService, modalCtrl, util) {
          _classCallCheck(this, FilterSubjectPage);

          this.service = service;
          this.router = router;
          this.navController = navController;
          this.route = route;
          this.helperService = helperService;
          this.modalCtrl = modalCtrl;
          this.util = util;
          this.catList = [];
          this.subCatList = [];
          this.farming = [];
          this.agriculture = [];
          this.dummy = Array(4);
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domain;
          this.guest = false;
          this.hasSubCat = false;
          this.hideHeader = false;
          this.currentLang = this.helperService.getLang();

          if (location.pathname.indexOf('tab-filter') != -1) {
            this.hideHeader = true;
          }
        }

        _createClass(FilterSubjectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('guest') == '1') {
              this.guest = true;
            } else {
              this.guest = false;
            }

            this.getTopicCategories();
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(_ev) {
            localStorage.setItem('catType', this.type);
          }
        }, {
          key: "selectItem",
          value: function selectItem(_item) {
            if (_item.subCategories.length != 0) {
              this.catDetails = _item;
              this.subCatList = _item.subCategories;
              this.hasSubCat = true;
              this.selectedSubCat = null;
            } else {
              this.selectedSubCat = _item;
              this.goToHome(); //this.subCatList = [];
              // if(this.hasSubCat){
              // }else{
              //   this.hasSubCat = false;
              // }
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.subCatList = [];
            this.hasSubCat = false;
            this.selectedSubCat = null;
          }
        }, {
          key: "getTopicCategories",
          value: function getTopicCategories() {
            var _this = this;

            this.service.getTopicsCategory().subscribe(function (_res) {
              _this.catList = _res;
              debugger;

              if (localStorage.getItem('catType')) {
                _this.type = localStorage.getItem('catType');
              } else {
                _this.type = _this.catList[0].id;
              }

              _this.agriculture = _this.catList[0].categories;
              _this.farming = _this.catList[1].categories;
              _this.dummy = [];
            });
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            var _this2 = this;

            this.helperService.show();

            if (this.guest) {
              this.navController.navigateRoot(['/tabs/home']);
              setTimeout(function () {
                _this2.goToTopics(_this2.selectedSubCat); //this.router.navigate(['/topic-details'], { queryParams: { id: this.selectedCat.id } });


                _this2.helperService.hide();
              }, 1000);
            } else {
              this.service.selectCategory(this.selectedSubCat.id).subscribe(function (_res) {
                _this2.util.publishProfile('update');

                _this2.navController.navigateRoot(['/tabs/home']);

                setTimeout(function () {
                  _this2.goToTopics(_this2.selectedSubCat); //this.router.navigate(['/topic-details'], { queryParams: { id: this.selectedCat.id } });


                  _this2.helperService.hide();
                }, 1000);
              });
            }
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _common_component_category_types_category_types_component__WEBPACK_IMPORTED_MODULE_8__["CategoryTypesComponent"],
                        cssClass: 'category-type-modal',
                        componentProps: {
                          category: this.catList
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data) {
                          _this3.type = data.data.id;
                          _this3.selectedCat = _this3.catList.filter(function (_item) {
                            return _item.id == _this3.type;
                          });
                          _this3.selectedCat = _this3.selectedCat[0];
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
          key: "goToTopics",
          value: function goToTopics(item) {
            var payload = {
              id: item.id,
              name: item.name,
              name_ar: item.name_ar,
              icon: item.icon
            };
            localStorage.setItem('selectedTopic', JSON.stringify(payload));
            this.router.navigate(['/tabs/topic'], {
              queryParams: {
                id: item.id
              }
            });
          }
        }, {
          key: "onError",
          value: function onError(event) {
            event.srcElement.src = '/assets/no-image.svg';
          }
        }]);

        return FilterSubjectPage;
      }();

      FilterSubjectPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      FilterSubjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-subject',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./filter-subject.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-subject/filter-subject.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./filter-subject.page.scss */
        "./src/app/filter-subject/filter-subject.page.scss"))["default"]]
      })], FilterSubjectPage);
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
//# sourceMappingURL=filter-subject-filter-subject-module-es5.js.map