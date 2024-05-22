(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animal-symptoms-detail-animal-symptoms-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animal-symptoms-detail/animal-symptoms-detail.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animal-symptoms-detail/animal-symptoms-detail.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-segment class=\"ion-padding-horizontal ion-padding-top\" mode=\"md\" [(ngModel)]=\"sectionType\">\n    <ion-segment-button value=\"symptom\">\n      <ion-label>{{'symptoms' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"diseases\" *ngIf=\"details?.diseases\">\n      <ion-label>{{'Diseases' | translate}}</ion-label>\n    </ion-segment-button>\n    \n  </ion-segment>\n  <div class=\"content\">\n    <div class=\"banner\" *ngIf=\"sectionType == 'symptom'\">\n      <img [src]=\"path + details?.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n      <div class=\"title\">\n        <ion-label>{{currentLang == 'en' ? details?.title : details?.title_ar}}</ion-label>\n      </div>\n    </div>\n    <div class=\"actions\" *ngIf=\"sectionType == 'symptom'\">\n      <div class=\"name\">\n        <ion-label>\n          <h1>{{currentLang == 'en' ? details?.title : details?.title_ar}}</h1>\n        </ion-label>\n      </div>\n      <div class=\"action-btns\">\n        <ion-icon name=\"ic-share\" class=\"ion-hide\"></ion-icon>\n        <ion-icon name=\"ic-filter\" (click)=\"openFilter()\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"about-wrapper\" *ngIf=\"sectionType == 'symptom'\">\n      <div class=\"inner-details ion-padding\">\n        <section id=\"detail{{item.targetId}}\" class=\"ion-padding-bottom\" *ngFor=\"let item of details?.sections\">\n          <label>\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </label>\n          <div class=\"description\">\n            <div [innerHtml]=\"(currentLang == 'en' ? item.description : item.description_ar) | safeHtml\"></div>\n          </div>\n          <div class=\"media\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let itm of item.medias | slice:0:2; let i=index\">\n                  <div class=\"media-item\">\n                    <div *ngIf=\"itm.type == 'picture'\">\n                    <img (click)=\"openImages(item)\" onError=\"this.src='./assets/no-image.svg'\" [src]=\"path + itm.url\" />\n                  </div>\n                  <div *ngIf=\"itm.type == 'video'\">\n                    <iframe width=\"100%\" height=\"150\" [src]=\"itm.url\">\n                    </iframe>\n                  </div>\n                  <div *ngIf=\"itm.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-xls\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-pdf\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-doc\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-ppt\"></ion-icon>\n                  </div>\n                    <div class=\"overlay\" *ngIf=\"item.medias.length > 2 && i == 1\" (click)=\"openImages(item)\">\n                      <h1>+{{item.medias.length - 1}}</h1>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </section>\n      </div>\n    </div>\n    <div class=\"care-wrapper\" *ngIf=\"sectionType == 'diseases'\">\n      <div class=\"inner-details\">\n        <ion-card *ngFor=\"let disease of details?.diseases\">\n          <img [src]=\"path + disease.banner\"  onError=\"this.src='./assets/no-image.svg'\" (click)=\"diseaseDetails(disease.id)\" />\n          <ion-card-content>\n            <div class=\"pest-foot\">\n              <ion-text (click)=\"diseaseDetails(disease.id)\">{{ currentLang == 'en' ? disease?.title : disease?.title_ar }}</ion-text>\n              <!-- <ion-icon name=\"ic-chat\" [routerLink]=\"['/conversation']\"></ion-icon> -->\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <div class=\"no-match-found\" *ngIf=\"sectionType == 'diseases' && details?.diseases?.length == 0\">\n        <ion-label>{{'NoMatchFound' | translate}}</ion-label>\n        <ion-text>{{'YouCanDirectlyAskYourAdvisor' | translate}}</ion-text>\n    </div>\n    <div class=\"ask-advisor-wrapper ion-padding\" *ngIf=\"sectionType == 'diseases' && !guest\">\n      <div class=\"main-heading\" *ngIf=\"details?.diseases?.length > 0\">\n        <ion-label class=\"ion-text-center\">\n          {{'StillNotSureAboutTheAnimalCondition' | translate }}\n        </ion-label>\n      </div>\n      <div class=\"ask-advisor\" (click)=\"openModal()\">\n        <div>\n          <ion-icon name=\"ic-chat\" color=\"light\"></ion-icon>\n        </div>\n        <div class=\"details\">\n          <ion-label class=\"title\">\n            <h2>{{ 'askAdvisory' | translate }}</h2>\n          </ion-label>\n          <ion-text>{{ 'couldntFindRightSymptoms' | translate }}</ion-text>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/animal-symptoms-detail/animal-symptoms-detail-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/animal-symptoms-detail/animal-symptoms-detail-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AnimalSymptomsDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSymptomsDetailPageRoutingModule", function() { return AnimalSymptomsDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _animal_symptoms_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal-symptoms-detail.page */ "./src/app/animal-symptoms-detail/animal-symptoms-detail.page.ts");




const routes = [
    {
        path: '',
        component: _animal_symptoms_detail_page__WEBPACK_IMPORTED_MODULE_3__["AnimalSymptomsDetailPage"]
    }
];
let AnimalSymptomsDetailPageRoutingModule = class AnimalSymptomsDetailPageRoutingModule {
};
AnimalSymptomsDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnimalSymptomsDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/animal-symptoms-detail/animal-symptoms-detail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/animal-symptoms-detail/animal-symptoms-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: AnimalSymptomsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSymptomsDetailPageModule", function() { return AnimalSymptomsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _animal_symptoms_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal-symptoms-detail-routing.module */ "./src/app/animal-symptoms-detail/animal-symptoms-detail-routing.module.ts");
/* harmony import */ var _animal_symptoms_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal-symptoms-detail.page */ "./src/app/animal-symptoms-detail/animal-symptoms-detail.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-component/common-component.module */ "./src/app/common-component/common-component.module.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");










let AnimalSymptomsDetailPageModule = class AnimalSymptomsDetailPageModule {
};
AnimalSymptomsDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_9__["ExploreContainerComponentModule"],
            _animal_symptoms_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnimalSymptomsDetailPageRoutingModule"]
        ],
        declarations: [_animal_symptoms_detail_page__WEBPACK_IMPORTED_MODULE_6__["AnimalSymptomsDetailPage"]]
    })
], AnimalSymptomsDetailPageModule);



/***/ }),

/***/ "./src/app/animal-symptoms-detail/animal-symptoms-detail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/animal-symptoms-detail/animal-symptoms-detail.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-segment-button {\n  --indicator-height: 6px;\n  text-transform: uppercase;\n}\n\n.segment-button-checked {\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-segment::part(indicator) {\n  width: 80% !important;\n  margin: auto !important;\n}\n\nion-segment-button::part(indicator-background) {\n  border-radius: 25px;\n}\n\n.content .banner {\n  position: relative;\n}\n\n.content .banner:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: linear-gradient(180deg, #242933 0%, transparent 50%);\n  content: \"\";\n}\n\n.content .banner img {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .banner .title {\n  font-size: 2.4rem;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.content .actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 16px;\n  border-bottom: 1px solid #F3F3F3;\n  padding: 16px 0;\n}\n\n.content .action-btns {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n}\n\n.content .action-btns ion-icon {\n  padding: 0 8px;\n}\n\n.content .care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.content .care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content .care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.content .doc-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.content .doc-wrapper .doc-type {\n  font-size: 2rem;\n  background: #D8D8D8;\n  padding: 16px;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n\n.content .doc-wrapper .title ion-label {\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.content .inner-details section {\n  border-bottom: 1px solid #F3F3F3;\n}\n\n.content .inner-details section .description {\n  line-height: 1.8;\n  text-align: justify !important;\n}\n\n.content .inner-details section .media ion-grid {\n  padding: 0px;\n  --ion-grid-column-padding: 5px;\n}\n\n.content .inner-details section .media .media-item {\n  position: relative;\n  height: 100%;\n}\n\n.content .inner-details section .media .media-item .other-docs {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  min-height: 120px;\n}\n\n.content .inner-details section .media .media-item img {\n  width: 100%;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .inner-details section .media .media-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content .inner-details section .media .media-item .overlay h1 {\n  font-size: 44px;\n}\n\n.ask-advisor-wrapper .main-heading {\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 16px;\n  font-weight: 500;\n  color: #707070;\n}\n\n.ask-advisor-wrapper .ask-advisor {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  background: var(--ion-color-primary);\n}\n\n.ask-advisor-wrapper .ask-advisor ion-icon {\n  font-size: 52px;\n  width: 68px;\n}\n\n.ask-advisor-wrapper .ask-advisor .details h2 {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.ask-advisor-wrapper .ask-advisor .details ion-text {\n  font-size: 12px;\n}\n\n.no-match-found {\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.no-match-found ion-label {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWFsLXN5bXB0b21zLWRldGFpbC9hbmltYWwtc3ltcHRvbXMtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBS0k7RUFDSSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0VBQUE7RUFDQSxXQUFBO0FBRlo7O0FBS1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFIWjs7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQU5SOztBQVNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQUjs7QUFTUTtFQUNJLGNBQUE7QUFQWjs7QUFZUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUFWWjs7QUFhUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBWFo7O0FBYVk7RUFDSSxpQkFBQTtBQVhoQjs7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFpQlE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZlo7O0FBbUJZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQWpCaEI7O0FBeUJRO0VBQ0ksZ0NBQUE7QUF2Qlo7O0FBeUJZO0VBQ0ksZ0JBQUE7RUFDQSw4QkFBQTtBQXZCaEI7O0FBMkJnQjtFQUNJLFlBQUE7RUFDQSw4QkFBQTtBQXpCcEI7O0FBNEJnQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQTFCcEI7O0FBMkJvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF6QnhCOztBQTJCb0I7RUFDSSxXQUFBO0VBRUEsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUExQnhCOztBQTZCb0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBM0J4Qjs7QUE2QndCO0VBQ0ksZUFBQTtBQTNCNUI7O0FBc0NJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFuQ1I7O0FBcUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBbkNSOztBQW9DUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBbENaOztBQXFDWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQW5DaEI7O0FBcUNZO0VBQ0ksZUFBQTtBQW5DaEI7O0FBeUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUF0Q0o7O0FBdUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQ1IiLCJmaWxlIjoic3JjL2FwcC9hbmltYWwtc3ltcHRvbXMtZGV0YWlsL2FuaW1hbC1zeW1wdG9tcy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWdtZW50OjpwYXJ0KGluZGljYXRvcikge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuXG5cbi5jb250ZW50IHtcbiAgICAuYmFubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNDI5MzMgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRucyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmUtd3JhcHBlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlc3QtZm9vdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9jLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5kb2MtdHlwZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDhEOEQ4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb24ge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbm5lci1kZXRhaWxzIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YzRjNGMztcblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lZGlhIHtcbiAgICAgICAgICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tZWRpYS1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC5vdGhlci1kb2NzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IC42KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFzay1hZHZpc29yLXdyYXBwZXJ7XG4gICAgLm1haW4taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB9XG4gICAgLmFzay1hZHZpc29ye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHN7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5vLW1hdGNoLWZvdW5kIHtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/animal-symptoms-detail/animal-symptoms-detail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/animal-symptoms-detail/animal-symptoms-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: AnimalSymptomsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSymptomsDetailPage", function() { return AnimalSymptomsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _common_component_topic_filter_topic_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-component/topic-filter/topic-filter.component */ "./src/app/common-component/topic-filter/topic-filter.component.ts");
/* harmony import */ var _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-component/topic-images/topic-images.component */ "./src/app/common-component/topic-images/topic-images.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _common_component_select_advisory_select_advisory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common-component/select-advisory/select-advisory.component */ "./src/app/common-component/select-advisory/select-advisory.component.ts");













let AnimalSymptomsDetailPage = class AnimalSymptomsDetailPage {
    constructor(modalCtrl, router, service, helperService, translateService, alertController, iab, previewAnyFile, route) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.service = service;
        this.helperService = helperService;
        this.translateService = translateService;
        this.alertController = alertController;
        this.iab = iab;
        this.previewAnyFile = previewAnyFile;
        this.route = route;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domain;
        this.sectionType = 'symptom';
        this.guest = false;
        this.currentLang = this.helperService.getLang();
        this.route.queryParams.subscribe(_res => {
            this.selectedId = _res.id;
            this.getSymptomById(this.selectedId);
        });
    }
    ngOnInit() {
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
        }
    }
    openFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _common_component_topic_filter_topic_filter_component__WEBPACK_IMPORTED_MODULE_4__["TopicFilterComponent"],
                cssClass: 'transparent-modal',
                showBackdrop: false,
                componentProps: { details: this.details }
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.data.id) {
                    this.goToSection(data.data.id);
                }
            });
            return yield modal.present();
        });
    }
    openImages(_images) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_5__["TopicImagesComponent"],
                showBackdrop: false,
                componentProps: { details: _images }
            });
            return yield modal.present();
        });
    }
    goToSection(_id) {
        const yOffset = document.getElementById('detail' + _id).offsetTop;
        const yHOffset = document.getElementById('detail' + _id).offsetHeight;
        this.content.scrollToPoint(0, yOffset, 1000);
    }
    getSymptomById(_id) {
        this.service.getSymptomById(_id).subscribe(_res => {
            this.details = _res;
            this.details.sections.sort((a, b) => a.indexing - b.indexing);
            this.details.sections.forEach(_item => {
                _item.medias.sort((a, b) => a.indexing - b.indexing);
            });
            setTimeout(() => {
                var fig = document.querySelectorAll('figure.table');
                fig.forEach(_item => {
                    var figth = _item.querySelectorAll('th');
                    figth.forEach(_item2 => {
                        _item2.style.minWidth = _item2.style.width;
                    });
                    var figtd = _item.querySelectorAll('td');
                    figtd.forEach(_item3 => {
                        _item3.style.minWidth = _item3.style.width;
                    });
                });
            }, 100);
        });
    }
    openBrowser(_url) {
        this.previewAnyFile.preview(this.path + _url)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    diseaseDetails(id) {
        this.router.navigate(['/care-details'], { queryParams: { id, from: 'animals' } });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _self = this;
            const modal = yield this.modalCtrl.create({
                component: _common_component_select_advisory_select_advisory_component__WEBPACK_IMPORTED_MODULE_12__["SelectAdvisoryComponent"],
                cssClass: 'category-type-modal',
                componentProps: { type: 'animal' }
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.role == '1') {
                    debugger;
                    _self.presentAlertPrompt(data.data[0]);
                }
            });
            return yield modal.present();
        });
    }
    presentAlertPrompt(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _self = this;
            var _data = data;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.helperService.translate('WhatDoYouWantToDiscussAbout'),
                inputs: [
                    {
                        name: 'message',
                        id: 'message',
                        type: 'textarea',
                        placeholder: ''
                    },
                ],
                buttons: [
                    {
                        text: _self.helperService.translate('cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: _self.helperService.translate('okay'),
                        handler: (data) => {
                            _self.extraMessage = data.message;
                            if (_self.extraMessage) {
                                localStorage.setItem('extra', window.btoa(_self.extraMessage.trim()));
                            }
                            _self.router.navigate(['/tabs/home']);
                            setTimeout(() => {
                                _self.helperService.hide();
                                _self.router.navigate(['/conversation'], { queryParams: { name: _data.name, id: _data.id, isOnline: _data.chatStatus, type: "animal" } });
                            }, 500);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AnimalSymptomsDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_11__["PreviewAnyFile"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AnimalSymptomsDetailPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { static: false },] }]
};
AnimalSymptomsDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animal-symptoms-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./animal-symptoms-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animal-symptoms-detail/animal-symptoms-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./animal-symptoms-detail.page.scss */ "./src/app/animal-symptoms-detail/animal-symptoms-detail.page.scss")).default]
    })
], AnimalSymptomsDetailPage);



/***/ })

}]);
//# sourceMappingURL=animal-symptoms-detail-animal-symptoms-detail-module-es2015.js.map