(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symptoms-details-symptoms-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-details/symptoms-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-details/symptoms-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon color=\"secondary\" name=\"ic-notification\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n \n  <div class=\"content\">\n    <div class=\"banner\">\n      <img [src]=\"path + details?.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n      <div class=\"title\">\n        <ion-label>{{currentLang == 'en' ? details?.title : details?.title_ar}}</ion-label>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"name\">\n        <ion-label>\n          <h1>{{currentLang == 'en' ? details?.title : details?.title_ar}}</h1>\n        </ion-label>\n      </div>\n      <div class=\"action-btns\">\n        <ion-icon name=\"ic-share\" class=\"ion-hide\"></ion-icon>\n        <ion-icon name=\"ic-filter\" (click)=\"openFilter()\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"about-wrapper\">\n      <div class=\"inner-details ion-padding\">\n        <section id=\"detail{{item.targetId}}\" class=\"ion-padding-bottom\" *ngFor=\"let item of details?.sections\">\n          <label>\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </label>\n          <div class=\"description\">\n            <div [innerHtml]=\"(currentLang == 'en' ? item.description : item.description_ar) | safeHtml\"></div>\n          </div>\n          <div class=\"media\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let itm of item.medias | slice:0:2; let i=index\">\n                  <div class=\"media-item\">\n                    <div *ngIf=\"itm.type == 'picture'\">\n                    <img (click)=\"openImages(item)\" onError=\"this.src='./assets/no-image.svg'\" [src]=\"path + itm.url\" />\n                  </div>\n                  <div *ngIf=\"itm.type == 'video'\">\n                    <iframe width=\"100%\" height=\"150\" [src]=\"itm.url\">\n                    </iframe>\n                  </div>\n                  <div *ngIf=\"itm.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-xls\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-pdf\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-doc\"></ion-icon>\n                  </div>\n                  <div *ngIf=\"itm.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                    <ion-icon name=\"ic-ppt\"></ion-icon>\n                  </div>\n                    <div class=\"overlay\" *ngIf=\"item.medias.length > 2 && i == 1\" (click)=\"openImages(item)\">\n                      <h1>+{{item.medias.length - 1}}</h1>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/symptoms-details/symptoms-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/symptoms-details/symptoms-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SymptomsDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsDetailsPageRoutingModule", function() { return SymptomsDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _symptoms_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symptoms-details.page */ "./src/app/symptoms-details/symptoms-details.page.ts");




const routes = [
    {
        path: '',
        component: _symptoms_details_page__WEBPACK_IMPORTED_MODULE_3__["SymptomsDetailsPage"]
    }
];
let SymptomsDetailsPageRoutingModule = class SymptomsDetailsPageRoutingModule {
};
SymptomsDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SymptomsDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/symptoms-details/symptoms-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/symptoms-details/symptoms-details.module.ts ***!
  \*************************************************************/
/*! exports provided: SymptomsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsDetailsPageModule", function() { return SymptomsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _symptoms_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symptoms-details-routing.module */ "./src/app/symptoms-details/symptoms-details-routing.module.ts");
/* harmony import */ var _symptoms_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symptoms-details.page */ "./src/app/symptoms-details/symptoms-details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-component/common-component.module */ "./src/app/common-component/common-component.module.ts");









let SymptomsDetailsPageModule = class SymptomsDetailsPageModule {
};
SymptomsDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"],
            _symptoms_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SymptomsDetailsPageRoutingModule"]
        ],
        declarations: [_symptoms_details_page__WEBPACK_IMPORTED_MODULE_6__["SymptomsDetailsPage"]]
    })
], SymptomsDetailsPageModule);



/***/ }),

/***/ "./src/app/symptoms-details/symptoms-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/symptoms-details/symptoms-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-segment-button {\n  --indicator-height: 6px;\n}\n\n.segment-button-checked {\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-segment::part(indicator) {\n  width: 80% !important;\n  margin: auto !important;\n}\n\nion-segment-button::part(indicator-background) {\n  border-radius: 25px;\n}\n\n.content .banner {\n  position: relative;\n}\n\n.content .banner:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: linear-gradient(180deg, #242933 0%, transparent 50%);\n  content: \"\";\n}\n\n.content .banner img {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .banner .title {\n  font-size: 2.4rem;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.content .actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 16px;\n  border-bottom: 1px solid #F3F3F3;\n  padding: 16px 0;\n}\n\n.content .action-btns {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n}\n\n.content .action-btns ion-icon {\n  padding: 0 8px;\n}\n\n.content .care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.content .care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content .care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.content .doc-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.content .doc-wrapper .doc-type {\n  font-size: 2rem;\n  background: #D8D8D8;\n  padding: 16px;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n\n.content .doc-wrapper .title ion-label {\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.content .inner-details section {\n  border-bottom: 1px solid #F3F3F3;\n}\n\n.content .inner-details section .description {\n  line-height: 1.8;\n  text-align: justify !important;\n}\n\n.content .inner-details section .media ion-grid {\n  padding: 0px;\n  --ion-grid-column-padding: 5px;\n}\n\n.content .inner-details section .media .media-item {\n  position: relative;\n  height: 100%;\n}\n\n.content .inner-details section .media .media-item .other-docs {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  min-height: 120px;\n}\n\n.content .inner-details section .media .media-item img {\n  width: 100%;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .inner-details section .media .media-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content .inner-details section .media .media-item .overlay h1 {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ltcHRvbXMtZGV0YWlscy9zeW1wdG9tcy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUtJO0VBQ0ksa0JBQUE7QUFGUjs7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdFQUFBO0VBQ0EsV0FBQTtBQUZaOztBQUtRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBSFo7O0FBTVE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBSlo7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFOUjs7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUFI7O0FBU1E7RUFDSSxjQUFBO0FBUFo7O0FBWVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBVlo7O0FBYVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVhaOztBQWFZO0VBQ0ksaUJBQUE7QUFYaEI7O0FBaUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBZlI7O0FBaUJRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWZaOztBQW1CWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFqQmhCOztBQXlCUTtFQUNJLGdDQUFBO0FBdkJaOztBQXlCWTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7QUF2QmhCOztBQTJCZ0I7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUF6QnBCOztBQTRCZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUExQnBCOztBQTJCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBekJ4Qjs7QUEyQm9CO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBMUJ4Qjs7QUE2Qm9CO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTNCeEI7O0FBNkJ3QjtFQUNJLGVBQUE7QUEzQjVCIiwiZmlsZSI6InNyYy9hcHAvc3ltcHRvbXMtZGV0YWlscy9zeW1wdG9tcy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogNnB4O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXNlZ21lbnQ6OnBhcnQoaW5kaWNhdG9yKSB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b246OnBhcnQoaW5kaWNhdG9yLWJhY2tncm91bmQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5cblxuLmNvbnRlbnQge1xuICAgIC5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI0MjkzMyAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjNGM0YzO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG5zIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZS13cmFwcGVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGVzdC1mb290IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kb2Mtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmRvYy10eXBlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlubmVyLWRldGFpbHMge1xuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjNGM0YzO1xuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1lZGlhLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLm90aGVyLWRvY3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogLjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/symptoms-details/symptoms-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/symptoms-details/symptoms-details.page.ts ***!
  \***********************************************************/
/*! exports provided: SymptomsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsDetailsPage", function() { return SymptomsDetailsPage; });
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












let SymptomsDetailsPage = class SymptomsDetailsPage {
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
        this.sectionType = 'about';
        this.currentLang = this.helperService.getLang();
        this.route.queryParams.subscribe(_res => {
            this.selectedId = _res.id;
            this.getSymptomById(this.selectedId);
        });
    }
    ngOnInit() {
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
};
SymptomsDetailsPage.ctorParameters = () => [
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
SymptomsDetailsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { static: false },] }]
};
SymptomsDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-symptoms-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./symptoms-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/symptoms-details/symptoms-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./symptoms-details.page.scss */ "./src/app/symptoms-details/symptoms-details.page.scss")).default]
    })
], SymptomsDetailsPage);



/***/ })

}]);
//# sourceMappingURL=symptoms-details-symptoms-details-module-es2015.js.map