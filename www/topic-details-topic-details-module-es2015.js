(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topic-details-topic-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic-details/topic-details.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topic-details/topic-details.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-segment class=\"ion-padding-horizontal ion-padding-top\" mode=\"md\" [(ngModel)]=\"sectionType\"\n    (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"about\">\n      <ion-label>{{'about' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"care\" *ngIf=\"details?.topicDiseases?.length > 0\">\n      <ion-label>{{'care' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"attachments\" *ngIf=\"details.attachments?.length > 0\">\n      <ion-label>{{'attachments' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"content\">\n    <div class=\"banner\">\n      <img [src]=\"path + details.banner\" onError=\"this.src='./assets/no-image.svg'\" />\n      <div class=\"title\">\n        <ion-label>{{currentLang == 'en' ? details.title : details.title_ar}}</ion-label>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"name\">\n        <ion-label>\n          <h1>{{currentLang == 'en' ? details.title : details.title_ar}}</h1>\n        </ion-label>\n      </div>\n      <div class=\"action-btns\">\n        <ion-icon name=\"ic-heart\" *ngIf=\"!favFound\" (click)=\"addFavorite(selectedId)\"></ion-icon>\n        <ion-icon name=\"ic-heart-fill\" *ngIf=\"favFound\" color=\"danger\" (click)=\"presentAlertConfirm()\"></ion-icon>\n        <ion-icon name=\"ic-share\" class=\"ion-hide\"></ion-icon>\n        <ion-icon name=\"ic-filter\" *ngIf=\"sectionType == 'about'\" (click)=\"openFilter()\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"about-wrapper\" *ngIf=\"sectionType == 'about'\">\n      <div class=\"inner-details ion-padding\">\n        <section id=\"detail{{item.targetId}}\" class=\"ion-padding-bottom\" *ngFor=\"let item of details.sections\">\n          <label>\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </label>\n          <div class=\"description\">\n            <div [innerHtml]=\"(currentLang == 'en' ? item.description : item.description_ar) | safeHtml\"></div>\n          </div>\n          <div class=\"media\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let itm of item.medias | slice:0:2; let i=index\">\n                  <div class=\"media-item\">\n                    <div *ngIf=\"itm.type == 'picture'\">\n                      <img (click)=\"openImages(item)\" onError=\"this.src='./assets/no-image.svg'\" [src]=\"path + itm.url\" />\n                    </div>\n                    <div *ngIf=\"itm.type == 'video'\" (click)=\"openImages(item)\">\n                      <iframe width=\"100%\" height=\"150\" [src]=\"getSanitizeUrl(itm.url)\">\n                      </iframe>\n                    </div>\n                    <div *ngIf=\"itm.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-xls\"></ion-icon>\n                    </div>\n                    <div *ngIf=\"itm.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-pdf\"></ion-icon>\n                    </div>\n                    <div *ngIf=\"itm.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-doc\"></ion-icon>\n                    </div>\n                    <div *ngIf=\"itm.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-ppt\"></ion-icon>\n                    </div>\n                    <div class=\"overlay\" *ngIf=\"item.medias.length > 2 && i == 1\" (click)=\"openImages(item)\">\n                      <h1>+{{item.medias.length - 1}}</h1>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </section>\n      </div>\n    </div>\n    <div class=\"care-wrapper\" *ngIf=\"sectionType == 'care'\">\n      <div class=\"inner-details\">\n        <ion-card *ngFor=\"let pest of details?.topicDiseases\">\n          <img [src]=\"path + pest.diseases.banner\" onError=\"this.src='./assets/no-image.svg'\" (click)=\"diseaseDetails(pest.diseases.id)\" />\n          <ion-card-content>\n            <div class=\"pest-foot\">\n              <ion-text (click)=\"diseaseDetails(pest.diseases.id)\">{{currentLang == 'en' ? pest.diseases.title : pest.diseases.title_ar}}\n              </ion-text>\n              <ion-icon *ngIf=\"details.categories.advisor != null || details.subCategories.advisor != null\" name=\"ic-chat\"\n                (click)=\"goToChat(details)\"></ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <div class=\"attachment-wrapper\" *ngIf=\"sectionType == 'attachments'\">\n      <div class=\"inner-details\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of details.attachments\">\n            <div class=\"doc-wrapper\">\n              <div class=\"title\" (click)=\"openBrowser(item.url)\">\n                <ion-label>{{currentLang == 'en' ? item.title : item.title_ar}}</ion-label>\n                <ion-text>\n                  <ion-icon name=\"download-outline\"></ion-icon> Download\n                </ion-text>\n              </div>\n              <div class=\"doc-type\">\n                <!-- <ion-icon name=\"pdf-icon\"></ion-icon> -->\n                <ion-icon *ngIf=\"item.type == 'excel'\" name=\"ic-xls\"></ion-icon>\n                <ion-icon *ngIf=\"item.type == 'pdf'\" name=\"ic-pdf\"></ion-icon>\n                <ion-icon *ngIf=\"item.type == 'word'\" name=\"ic-doc\"></ion-icon>\n                <ion-icon *ngIf=\"item.type == 'ppt'\" name=\"ic-ppt\"></ion-icon>\n              </div>\n            </div>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/topic-details/topic-details-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/topic-details/topic-details-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TopicDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailsPageRoutingModule", function() { return TopicDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _topic_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-details.page */ "./src/app/topic-details/topic-details.page.ts");




const routes = [
    {
        path: '',
        component: _topic_details_page__WEBPACK_IMPORTED_MODULE_3__["TopicDetailsPage"]
    }
];
let TopicDetailsPageRoutingModule = class TopicDetailsPageRoutingModule {
};
TopicDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopicDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/topic-details/topic-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/topic-details/topic-details.module.ts ***!
  \*******************************************************/
/*! exports provided: TopicDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailsPageModule", function() { return TopicDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _topic_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic-details-routing.module */ "./src/app/topic-details/topic-details-routing.module.ts");
/* harmony import */ var _topic_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topic-details.page */ "./src/app/topic-details/topic-details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-component/common-component.module */ "./src/app/common-component/common-component.module.ts");









let TopicDetailsPageModule = class TopicDetailsPageModule {
};
TopicDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"],
            _topic_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopicDetailsPageRoutingModule"]
        ],
        declarations: [_topic_details_page__WEBPACK_IMPORTED_MODULE_6__["TopicDetailsPage"]]
    })
], TopicDetailsPageModule);



/***/ }),

/***/ "./src/app/topic-details/topic-details.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/topic-details/topic-details.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-segment-button {\n  --indicator-height: 6px;\n}\n\n.segment-button-checked {\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-segment::part(indicator) {\n  width: 80% !important;\n  margin: auto !important;\n}\n\nion-segment-button::part(indicator-background) {\n  border-radius: 25px;\n}\n\n.content .banner {\n  position: relative;\n}\n\n.content .banner:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(36, 41, 51, 0.2);\n  content: \"\";\n}\n\n.content .banner img {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .banner .title {\n  font-size: 2.4rem;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 16px;\n  right: 16px;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.content .actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 16px;\n  border-bottom: 1px solid #F3F3F3;\n  padding: 16px 0;\n}\n\n.content .action-btns {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n}\n\n.content .action-btns ion-icon {\n  padding: 0 8px;\n}\n\n.content .care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.content .care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content .care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.content .doc-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.content .doc-wrapper .doc-type {\n  font-size: 2rem;\n  background: #D8D8D8;\n  padding: 16px;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n\n.content .doc-wrapper .title ion-label {\n  font-weight: 500;\n  font-size: 1.2rem;\n  white-space: normal;\n}\n\n.content .inner-details section {\n  border-bottom: 1px solid #F3F3F3;\n}\n\n.content .inner-details section .description {\n  line-height: 1.8;\n  text-align: justify !important;\n}\n\n.content .inner-details section .media ion-grid {\n  padding: 0px;\n  --ion-grid-column-padding: 5px;\n}\n\n.content .inner-details section .media .media-item {\n  position: relative;\n  height: 100%;\n}\n\n.content .inner-details section .media .media-item .other-docs {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  min-height: 120px;\n}\n\n.content .inner-details section .media .media-item img {\n  width: 100%;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .inner-details section .media .media-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content .inner-details section .media .media-item .overlay h1 {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtZGV0YWlscy90b3BpYy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUtJO0VBQ0ksa0JBQUE7QUFGUjs7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGlDQUFBO0VBRUEsV0FBQTtBQUhaOztBQU1RO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBSlo7O0FBT1E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBTFo7O0FBU0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFQUjs7QUFVSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUlI7O0FBVVE7RUFDSSxjQUFBO0FBUlo7O0FBYVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBWFo7O0FBY1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpaOztBQWNZO0VBQ0ksaUJBQUE7QUFaaEI7O0FBa0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBaEJSOztBQWtCUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFoQlo7O0FBb0JZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBbEJoQjs7QUEwQlE7RUFDSSxnQ0FBQTtBQXhCWjs7QUEwQlk7RUFDSSxnQkFBQTtFQUNBLDhCQUFBO0FBeEJoQjs7QUE2QmdCO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0FBM0JwQjs7QUE4QmdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBNUJwQjs7QUE2Qm9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTNCeEI7O0FBNkJvQjtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQTVCeEI7O0FBK0JvQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3QnhCOztBQStCd0I7RUFDSSxlQUFBO0FBN0I1QiIsImZpbGUiOiJzcmMvYXBwL3RvcGljLWRldGFpbHMvdG9waWMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDZweDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWdtZW50OjpwYXJ0KGluZGljYXRvcikge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuXG5cbi5jb250ZW50IHtcbiAgICAuYmFubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzNiA0MSA1MSAvIDAuMik7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNDI5MzMgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRucyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmUtd3JhcHBlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlc3QtZm9vdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9jLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5kb2MtdHlwZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDhEOEQ4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlubmVyLWRldGFpbHMge1xuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjNGM0YzO1xuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1lZGlhLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLm90aGVyLWRvY3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogLjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/topic-details/topic-details.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/topic-details/topic-details.page.ts ***!
  \*****************************************************/
/*! exports provided: TopicDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailsPage", function() { return TopicDetailsPage; });
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");













let TopicDetailsPage = class TopicDetailsPage {
    constructor(modalCtrl, router, service, helperService, translateService, alertController, route, sanitizer, previewAnyFile, iab) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.service = service;
        this.helperService = helperService;
        this.translateService = translateService;
        this.alertController = alertController;
        this.route = route;
        this.sanitizer = sanitizer;
        this.previewAnyFile = previewAnyFile;
        this.iab = iab;
        this.sectionType = 'about';
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domain;
        this.guest = false;
        this.currentLang = this.helperService.getLang();
        this.route.queryParams.subscribe(_res => {
            this.selectedId = _res.id;
            this.getTopicById(this.selectedId);
            if (localStorage.getItem('guest') == '1') {
                this.guest = true;
            }
            else {
                setTimeout(() => {
                    this.hitVisitor(this.selectedId);
                }, 1000);
            }
        });
        this.details = [{
                id: 1,
                name: "What you want Know ?",
                desc: "Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room. Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room.Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment.",
                images: ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png']
            }, {
                id: 2,
                name: "What you want Know ?",
                desc: "Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room. Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room.Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment.",
                images: ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png']
            }, {
                id: 3,
                name: "What you want Know ?",
                desc: "Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room. Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room.Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment.",
                images: ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png']
            }];
        this.pestDetails = [{
                name: 'Pest Name',
                image: './assets/pest1.png'
            },
            {
                name: 'Pest Name',
                image: './assets/pest2.png'
            },
            {
                name: 'Pest Name',
                image: './assets/pest1.png'
            },
            {
                name: 'Pest Name',
                image: './assets/pest2.png'
            }];
    }
    ngOnInit() {
        setTimeout(() => {
            this.modalCtrl.dismiss();
        }, 100);
        if (localStorage.getItem('currentUser')) {
            this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
            if (this.favList) {
                var fav = this.favList.filter(item => item != null && item.id == this.selectedId);
                this.favFound = fav.length > 0 ? true : false;
            }
            else {
                this.favFound = false;
            }
        }
    }
    segmentChanged(_ev) {
    }
    goToChat(_user) {
        if (this.guest) {
            this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
        }
        else {
            var advisor = _user.subCategories ? _user.subCategories.advisor : _user.categories.advisor;
            this.router.navigate(['/conversation'], { queryParams: { name: advisor.name, id: advisor.id, topicId: this.selectedId, isOnline: advisor.chatStatus } });
        }
    }
    openFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
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
    getTopicById(_id) {
        this.helperService.show();
        this.service.getTopicById(_id).subscribe(_res => {
            this.helperService.hide();
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
        }, error => {
            this.helperService.hide();
        });
    }
    diseaseDetails(id) {
        this.router.navigate(['/care-details'], { queryParams: { id } });
    }
    hitVisitor(_id) {
        this.service.visitorCount(_id).subscribe(_res => {
        });
    }
    addFavorite(_id) {
        if (this.guest) {
            this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
        }
        else {
            this.service.addFavoriteTopic(_id).subscribe(_res => {
                this.helperService.show();
                this.getProfile('1');
            });
        }
    }
    getProfile(_type) {
        this.service.getProfile().subscribe(_res => {
            this.helperService.hide();
            localStorage.setItem('currentUser', JSON.stringify(_res));
            this.favList = _res.favouriteTopicsList;
            if (this.favList) {
                var fav = this.favList.filter(item => item != null && item.id == this.selectedId);
                this.favFound = fav.length > 0 ? true : false;
            }
            else {
                this.favFound = false;
            }
            if (_type == '1') {
                this.helperService.showToast(this.helperService.translate('successfullyAdded'), 'success', 'bottom');
            }
            else {
                this.helperService.showToast(this.helperService.translate('successfullyRemoved'), 'success', 'bottom');
            }
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _self = this;
            var confirm = this.helperService.translate('confirm');
            const alert = yield this.alertController.create({
                header: confirm,
                message: _self.helperService.translate("removeFavorite"),
                buttons: [
                    {
                        text: _self.helperService.translate('cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: _self.helperService.translate('okay'),
                        handler: () => {
                            console.log('Confirm Okay');
                            _self.removeFavorite();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    removeFavorite() {
        this.service.deleteFavoriteTopic(this.selectedId).subscribe(_res => {
            this.helperService.show();
            this.getProfile('2');
        });
    }
    openBrowser(_url) {
        console.log('pdf_url', this.path + _url);
        this.previewAnyFile.preview(this.path + _url)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
        //this.iab.create(this.path + _url);
    }
    getSanitizeUrl(_url) {
        var splits = _url.split('/');
        var youtubeEmbed = "https://www.youtube.com/embed/" + splits[splits.length - 1];
        return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
    }
};
TopicDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_12__["PreviewAnyFile"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] }
];
TopicDetailsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { static: false },] }]
};
TopicDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./topic-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic-details/topic-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./topic-details.page.scss */ "./src/app/topic-details/topic-details.page.scss")).default]
    })
], TopicDetailsPage);



/***/ })

}]);
//# sourceMappingURL=topic-details-topic-details-module-es2015.js.map