(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treatment-details-treatment-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-filter/topic-filter.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-filter/topic-filter.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{currentLang == 'en' ? details.categories?.name : details.categories?.name_ar}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('')\">\n        <ion-icon color=\"primary\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>{{currentLang == 'en' ? details?.title : details?.title_ar}}</ion-text>\n  </div>\n  <ion-list class=\"ion-padding\">\n    <ion-item class=\"ion-no-padding\" *ngFor=\"let item of details.sections\" (click)=\"close(item)\">\n          <ion-label class=\"ion-padding-horizontal\">\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-images/topic-images.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-images/topic-images.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{'viewImages' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon color=\"light\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>{{ currentLang == 'en' ? details.heading : details.heading_ar}}</ion-text>\n  </div>\n  <!-- <div class=\"sub-title ion-text-center ion-padding-vertical\">\n    <ion-text>What you want Know?</ion-text>\n  </div> -->\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"none\" class=\"ion-no-padding\" *ngFor=\"let image of details.medias\">\n      <div *ngIf=\"image.type == 'picture'\">\n        <img [src]=\"path + image.url\" onError=\"this.src='./assets/no-image.svg'\"/>\n        <ion-text>{{ currentLang == 'en' ? image.title : image.title_ar}}</ion-text>\n      </div>\n      <div *ngIf=\"image.type == 'video'\" >\n        <iframe width=\"100%\" height=\"300\" [src]=\"image.url\">\n        </iframe>\n      </div>\n      <div *ngIf=\"image.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-xls\"></ion-icon>\n      </div>\n      <div *ngIf=\"image.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-pdf\"></ion-icon>\n      </div>\n      <div *ngIf=\"image.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-doc\"></ion-icon>\n      </div>\n      <div *ngIf=\"image.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(image.url)\">\n        <ion-icon name=\"ic-ppt\"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/treatment-details/treatment-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treatment-details/treatment-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon color=\"secondary\" name=\"ic-notification\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <div class=\"content\">\n    <div class=\"banner\">\n      <img [src]=\"path + details?.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n      <div class=\"title\">\n        <ion-label>{{currentLang == 'en' ? details?.title : details?.title_ar}}</ion-label>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"name\">\n        <ion-label>\n          <h1>{{currentLang == 'en' ? details?.title : details?.title_ar}}</h1>\n        </ion-label>\n      </div>\n      <div class=\"action-btns\">\n        <ion-icon name=\"ic-share\" class=\"ion-hide\"></ion-icon>\n        <ion-icon name=\"ic-filter\" (click)=\"openFilter()\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"about-wrapper\">\n      <div class=\"inner-details ion-padding\">\n        <section id=\"detail{{item.targetId}}\" class=\"ion-padding-bottom\" *ngFor=\"let item of details?.sections\">\n          <label>\n            <h2>{{currentLang == 'en' ? item.heading : item.heading_ar}}</h2>\n          </label>\n          <div class=\"description\">\n            <div [innerHtml]=\"(currentLang == 'en' ? item.description : item.description_ar) | safeHtml\"></div>\n          </div>\n          <div class=\"media\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let itm of item.medias | slice:0:2; let i=index\">\n                  <div class=\"media-item\">\n                    <div *ngIf=\"itm.type == 'picture'\">\n                      <img (click)=\"openImages(item)\" onError=\"this.src='./assets/no-image.svg'\" [src]=\"path + itm.url\" />\n                    </div>\n                    <div *ngIf=\"itm.type == 'video'\">\n                      <iframe width=\"100%\" height=\"150\" [src]=\"itm.url\">\n                      </iframe>\n                    </div>\n                    <div *ngIf=\"itm.type == 'excel'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-xls\"></ion-icon>\n                    </div>\n                    <div *ngIf=\"itm.type == 'pdf'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-pdf\"></ion-icon>\n                    </div>\n                    <div *ngIf=\"itm.type == 'word'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-doc\"></ion-icon>\n                    </div>\n                    <div *ngIf=\"itm.type == 'ppt'\" class=\"other-docs\" (click)=\"openBrowser(itm.url)\">\n                      <ion-icon name=\"ic-ppt\"></ion-icon>\n                    </div>\n                    <div class=\"overlay\" *ngIf=\"item.medias.length > 2 && i == 1\" (click)=\"openImages(item)\">\n                      <h1>+{{item.medias.length - 1}}</h1>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/_pipes/safe-html.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/_pipes/safe-html.pipe.ts ***!
  \******************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: 'safeHtml' })
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/common-component/topic-filter/topic-filter.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/common-component/topic-filter/topic-filter.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC90b3BpYy1maWx0ZXIvdG9waWMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnQvdG9waWMtZmlsdGVyL3RvcGljLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/common-component/topic-filter/topic-filter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common-component/topic-filter/topic-filter.component.ts ***!
  \*************************************************************************/
/*! exports provided: TopicFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicFilterComponent", function() { return TopicFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/helper.service */ "./src/app/_services/helper.service.ts");




let TopicFilterComponent = class TopicFilterComponent {
    constructor(modalCtrl, helperService) {
        this.modalCtrl = modalCtrl;
        this.helperService = helperService;
        this.currentLang = this.helperService.getLang();
    }
    ngOnInit() {
        console.log(this.details);
    }
    close(_item) {
        this.modalCtrl.dismiss({ id: _item.targetId });
    }
};
TopicFilterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }
];
TopicFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./topic-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-filter/topic-filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./topic-filter.component.scss */ "./src/app/common-component/topic-filter/topic-filter.component.scss")).default]
    })
], TopicFilterComponent);



/***/ }),

/***/ "./src/app/common-component/topic-images/topic-images.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/common-component/topic-images/topic-images.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n  --background: var(--ion-color-secondary);\n}\n\nion-content {\n  --background: var(--ion-color-secondary);\n  --color: #fff;\n}\n\nion-content ion-list {\n  background: transparent;\n}\n\nion-content ion-list ion-item {\n  --background: transparent;\n  --color: #fff;\n  --inner-padding-end: 0;\n}\n\nion-content ion-list ion-item .other-docs {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4rem;\n  border: 1px solid #fff;\n  margin: 8px 0;\n}\n\nion-content ion-list ion-item div {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-direction: column;\n}\n\nion-content ion-list ion-item div img {\n  width: 100%;\n}\n\nion-content ion-list ion-item div ion-text {\n  margin-bottom: 20px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC90b3BpYy1pbWFnZXMvdG9waWMtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtBQUNSOztBQUNRO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFDWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDaEI7O0FBRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBaEI7O0FBRWdCO0VBQ0ksV0FBQTtBQUFwQjs7QUFHZ0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFEcEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50L3RvcGljLWltYWdlcy90b3BpYy1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiAjZmZmO1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgICAgIC5vdGhlci1kb2NzIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/common-component/topic-images/topic-images.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common-component/topic-images/topic-images.component.ts ***!
  \*************************************************************************/
/*! exports provided: TopicImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicImagesComponent", function() { return TopicImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");








let TopicImagesComponent = class TopicImagesComponent {
    constructor(modalCtrl, sanitizer, helperService, previewAnyFile, iab) {
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.helperService = helperService;
        this.previewAnyFile = previewAnyFile;
        this.iab = iab;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain;
        this.currentLang = this.helperService.getLang();
    }
    ngOnInit() {
        console.log(this.details);
        this.details.medias.forEach(_media => {
            if (_media.type.toLowerCase() === 'video') {
                _media.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed' + _media.url.substr(_media.url.lastIndexOf('/')));
            }
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    getSanitizeUrl(_url) {
        var youtubeEmbed = 'https://www.youtube.com/embed' + _url.substr(_url.lastIndexOf('/'));
        return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
    }
    openBrowser(_url) {
        this.previewAnyFile.preview(this.path + _url)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
};
TopicImagesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__["PreviewAnyFile"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] }
];
TopicImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./topic-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/topic-images/topic-images.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./topic-images.component.scss */ "./src/app/common-component/topic-images/topic-images.component.scss")).default]
    })
], TopicImagesComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_pipes/safe-html.pipe */ "./src/app/_pipes/safe-html.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/treatment-details/treatment-details-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/treatment-details/treatment-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TreatmentDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentDetailsPageRoutingModule", function() { return TreatmentDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _treatment_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treatment-details.page */ "./src/app/treatment-details/treatment-details.page.ts");




const routes = [
    {
        path: '',
        component: _treatment_details_page__WEBPACK_IMPORTED_MODULE_3__["TreatmentDetailsPage"]
    }
];
let TreatmentDetailsPageRoutingModule = class TreatmentDetailsPageRoutingModule {
};
TreatmentDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TreatmentDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/treatment-details/treatment-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/treatment-details/treatment-details.module.ts ***!
  \***************************************************************/
/*! exports provided: TreatmentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentDetailsPageModule", function() { return TreatmentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _treatment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treatment-details-routing.module */ "./src/app/treatment-details/treatment-details-routing.module.ts");
/* harmony import */ var _treatment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treatment-details.page */ "./src/app/treatment-details/treatment-details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let TreatmentDetailsPageModule = class TreatmentDetailsPageModule {
};
TreatmentDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _treatment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreatmentDetailsPageRoutingModule"]
        ],
        declarations: [_treatment_details_page__WEBPACK_IMPORTED_MODULE_6__["TreatmentDetailsPage"]]
    })
], TreatmentDetailsPageModule);



/***/ }),

/***/ "./src/app/treatment-details/treatment-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/treatment-details/treatment-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-segment-button {\n  --indicator-height: 6px;\n}\n\n.segment-button-checked {\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-segment::part(indicator) {\n  width: 80% !important;\n  margin: auto !important;\n}\n\nion-segment-button::part(indicator-background) {\n  border-radius: 25px;\n}\n\n.content .banner {\n  position: relative;\n}\n\n.content .banner:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: linear-gradient(180deg, #242933 0%, transparent 50%);\n  content: \"\";\n}\n\n.content .banner img {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .banner .title {\n  font-size: 2.4rem;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.content .actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 16px;\n  border-bottom: 1px solid #F3F3F3;\n  padding: 16px 0;\n}\n\n.content .action-btns {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n}\n\n.content .action-btns ion-icon {\n  padding: 0 8px;\n}\n\n.content .care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.content .care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.content .care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.content .doc-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.content .doc-wrapper .doc-type {\n  font-size: 2rem;\n  background: #D8D8D8;\n  padding: 16px;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n\n.content .doc-wrapper .title ion-label {\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.content .inner-details section {\n  border-bottom: 1px solid #F3F3F3;\n}\n\n.content .inner-details section .description {\n  line-height: 1.8;\n  text-align: justify !important;\n}\n\n.content .inner-details section .media ion-grid {\n  padding: 0px;\n  --ion-grid-column-padding: 5px;\n}\n\n.content .inner-details section .media .media-item {\n  position: relative;\n  height: 100%;\n}\n\n.content .inner-details section .media .media-item .other-docs {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  min-height: 120px;\n}\n\n.content .inner-details section .media .media-item img {\n  width: 100%;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content .inner-details section .media .media-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content .inner-details section .media .media-item .overlay h1 {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlYXRtZW50LWRldGFpbHMvdHJlYXRtZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBS0k7RUFDSSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0VBQUE7RUFDQSxXQUFBO0FBRlo7O0FBS1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFIWjs7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQU5SOztBQVNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQUjs7QUFTUTtFQUNJLGNBQUE7QUFQWjs7QUFZUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUFWWjs7QUFhUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBWFo7O0FBYVk7RUFDSSxpQkFBQTtBQVhoQjs7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFpQlE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZlo7O0FBbUJZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQWpCaEI7O0FBeUJRO0VBQ0ksZ0NBQUE7QUF2Qlo7O0FBeUJZO0VBQ0ksZ0JBQUE7RUFDQSw4QkFBQTtBQXZCaEI7O0FBMkJnQjtFQUNJLFlBQUE7RUFDQSw4QkFBQTtBQXpCcEI7O0FBNEJnQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQTFCcEI7O0FBNEJvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUExQnhCOztBQTZCb0I7RUFDSSxXQUFBO0VBRUEsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUE1QnhCOztBQStCb0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBN0J4Qjs7QUErQndCO0VBQ0ksZUFBQTtBQTdCNUIiLCJmaWxlIjoic3JjL2FwcC90cmVhdG1lbnQtZGV0YWlscy90cmVhdG1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDZweDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWdtZW50OjpwYXJ0KGluZGljYXRvcikge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuXG5cbi5jb250ZW50IHtcbiAgICAuYmFubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNDI5MzMgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRucyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmUtd3JhcHBlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlc3QtZm9vdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9jLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5kb2MtdHlwZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDhEOEQ4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb24ge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbm5lci1kZXRhaWxzIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YzRjNGMztcblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lZGlhIHtcbiAgICAgICAgICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tZWRpYS1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgLm90aGVyLWRvY3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAuNik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/treatment-details/treatment-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/treatment-details/treatment-details.page.ts ***!
  \*************************************************************/
/*! exports provided: TreatmentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentDetailsPage", function() { return TreatmentDetailsPage; });
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












let TreatmentDetailsPage = class TreatmentDetailsPage {
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
            this.treatmentById(this.selectedId);
        });
    }
    ngOnInit() {
    }
    diseaseDetails(_id) {
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
    treatmentById(_id) {
        this.service.getTreatmentById(_id).subscribe(_res => {
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
TreatmentDetailsPage.ctorParameters = () => [
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
TreatmentDetailsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { static: false },] }]
};
TreatmentDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treatment-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./treatment-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/treatment-details/treatment-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./treatment-details.page.scss */ "./src/app/treatment-details/treatment-details.page.scss")).default]
    })
], TreatmentDetailsPage);



/***/ })

}]);
//# sourceMappingURL=treatment-details-treatment-details-module-es2015.js.map