(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-details-event-details-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event-details/event-details.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-details/event-details.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon color=\"secondary\" name=\"ic-notification\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-bottom ion-margin-bottom\" *ngIf=\"loaded\">\n    <div class=\"banner\">\n      <img [src]=\"path + details.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n      <div class=\"title\">\n        <ion-label>{{currentLang == 'en' ? details.title : details.title_ar}}</ion-label>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"name\">\n        <ion-label>\n          <small>{{details.postedOn | date:'dd MMM yyyy'}}</small>\n          <h1>{{currentLang == 'en' ? details.title : details.title_ar}}</h1>\n        </ion-label>\n      </div>\n      <div class=\"action-btns\">\n        <ion-icon name=\"ic-heart\" *ngIf=\"!favFound\" (click)=\"addFavorite(selectedId)\"></ion-icon>\n        <ion-icon name=\"ic-heart-fill\" *ngIf=\"favFound\" color=\"danger\" (click)=\"presentAlertConfirm()\"></ion-icon>\n        <ion-icon name=\"ic-share\" class=\"ion-hide\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"about-wrapper\">\n    <div class=\"inner-details ion-padding\">\n      <section class=\"ion-padding-bottom\">\n        <div class=\"event-details\">\n              <h2>{{'eventDetails' | translate}}</h2>\n              <ion-item lines=\"none\">\n                <ion-text>{{'category' | translate}}</ion-text>\n                <ion-text slot=\"end\">{{currentLang == 'en' ? details.topicTypes?.type : details.topicTypes?.type_ar}}</ion-text>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-text>{{'start' | translate}}</ion-text>\n                <ion-text slot=\"end\">{{details.startDate | date:'dd MMM yyyy'}} {{details.startTime }}</ion-text>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-text>{{'end' | translate}}</ion-text>\n              <ion-text slot=\"end\">{{details.endDate | date:'dd MMM yyyy'}} {{details.endTime }}</ion-text>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-text>{{'location' | translate}}</ion-text>\n            <ion-text slot=\"end\">{{details.location}}</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"details.mapLink\">\n          <ion-text>{{'map' | translate}}</ion-text>\n          <ion-icon slot=\"end\" name=\"location-outline\" (click)=\"openBrowser(details.mapLink)\"></ion-icon>\n      </ion-item>\n       \n        </div>\n        <div class=\"join-event\" *ngIf=\"!isBefore\">\n            <div (click)=\"openBrowser(details.externalLink)\">\n              <ion-label><h1>{{'joinEvent' | translate}}</h1></ion-label>\n              <ion-text>{{'visitEventURL' | translate}}</ion-text>\n            </div>\n        </div>\n        <div class=\"join-event expired\" *ngIf=\"isBefore\">\n          <div>\n            <ion-label><h1>{{'eventExpired' | translate}}</h1></ion-label>\n          </div>\n      </div>\n        <div class=\"description\">\n          <div><p>{{currentLang == 'en' ? details.description : details.description_ar}}</p></div>\n        </div>\n        <div class=\"media\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let itm of details.medias | slice:0:2; let i=index\">\n                <div class=\"media-item\">\n                  <div *ngIf=\"itm.type == 'picture'\">\n                    <img (click)=\"openImages(details)\" onError=\"this.src='./assets/no-image.svg'\" [src]=\"path + itm.url\" />\n                  </div>\n                  <div *ngIf=\"itm.type == 'video'\">\n                    <iframe width=\"100%\" height=\"150\" [src]=\"itm.url\">\n                    </iframe>\n                  </div>\n                  <div class=\"overlay\" *ngIf=\"details.medias.length > 2 && i == 1\" (click)=\"openImages(details)\">\n                    <h1>+{{details.medias.length - 1}}</h1>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </section>\n    </div>\n  </div>\n</ion-content>");

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

/***/ "./src/app/event-details/event-details-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/event-details/event-details-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EventDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPageRoutingModule", function() { return EventDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-details.page */ "./src/app/event-details/event-details.page.ts");




const routes = [
    {
        path: '',
        component: _event_details_page__WEBPACK_IMPORTED_MODULE_3__["EventDetailsPage"]
    }
];
let EventDetailsPageRoutingModule = class EventDetailsPageRoutingModule {
};
EventDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/event-details/event-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/event-details/event-details.module.ts ***!
  \*******************************************************/
/*! exports provided: EventDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function() { return EventDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details-routing.module */ "./src/app/event-details/event-details-routing.module.ts");
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-details.page */ "./src/app/event-details/event-details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let EventDetailsPageModule = class EventDetailsPageModule {
};
EventDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventDetailsPageRoutingModule"]
        ],
        declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPage"]]
    })
], EventDetailsPageModule);



/***/ }),

/***/ "./src/app/event-details/event-details.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/event-details/event-details.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.banner {\n  position: relative;\n}\n\n.banner:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(36, 41, 51, 0.2);\n  content: \"\";\n}\n\n.banner img {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.banner .title {\n  font-size: 2.4rem;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 16px;\n  border-bottom: 1px solid #F3F3F3;\n  padding: 16px 0;\n}\n\n.actions ion-label {\n  direction: ltr;\n}\n\n.action-btns {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n}\n\n.action-btns ion-icon {\n  padding: 0 8px;\n}\n\n.care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.doc-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.doc-wrapper .doc-type {\n  font-size: 2rem;\n  background: #D8D8D8;\n  padding: 16px;\n  border-radius: 4px;\n  margin: 10px 0;\n}\n\n.doc-wrapper .title ion-label {\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.inner-details section {\n  border-bottom: 1px solid #F3F3F3;\n}\n\n.inner-details section .event-details ion-item {\n  --background: #F5F5F5;\n  margin-bottom: 10px;\n}\n\n.inner-details section .event-details ion-item ion-text {\n  display: flex;\n  direction: ltr;\n}\n\n.inner-details section .event-details ion-item ion-text ion-icon {\n  font-size: 1.4rem;\n}\n\n.inner-details section .join-event {\n  text-align: center;\n  padding: 10px;\n  background: var(--ion-color-primary);\n}\n\n.inner-details section .join-event.expired {\n  background: var(--ion-color-danger);\n}\n\n.inner-details section .join-event ion-label {\n  color: #fff;\n}\n\n.inner-details section .join-event ion-label h1 {\n  font-size: 1.2rem;\n}\n\n.inner-details section .join-event ion-text {\n  font-size: 0.8rem;\n}\n\n.inner-details section .description {\n  line-height: 1.8;\n  text-align: justify !important;\n}\n\n.inner-details section .media ion-grid {\n  padding: 0px;\n  --ion-grid-column-padding: 5px;\n}\n\n.inner-details section .media .media-item {\n  position: relative;\n  height: 100%;\n}\n\n.inner-details section .media .media-item img {\n  width: 100%;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.inner-details section .media .media-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.inner-details section .media .media-item .overlay h1 {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUk7RUFDSSxrQkFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsaUNBQUE7RUFFQSxXQUFBO0FBQVo7O0FBR1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFEWjs7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFGWjs7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUhSOztBQUlRO0VBQ0ksY0FBQTtBQUZaOztBQU1JO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjs7QUFLUTtFQUNJLGNBQUE7QUFIWjs7QUFRUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUFMWjs7QUFRUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTlo7O0FBUVk7RUFDSSxpQkFBQTtBQU5oQjs7QUFZSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQVRSOztBQVdRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRaOztBQWFZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVhoQjs7QUFtQlE7RUFDSSxnQ0FBQTtBQWpCWjs7QUFtQmdCO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQWpCcEI7O0FBa0JvQjtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBaEJ4Qjs7QUFpQndCO0VBQ0ksaUJBQUE7QUFmNUI7O0FBb0JZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFsQmhCOztBQW1CZ0I7RUFDSSxtQ0FBQTtBQWpCcEI7O0FBbUJnQjtFQUNJLFdBQUE7QUFqQnBCOztBQWtCb0I7RUFDSSxpQkFBQTtBQWhCeEI7O0FBbUJnQjtFQUNJLGlCQUFBO0FBakJwQjs7QUFvQlk7RUFDSSxnQkFBQTtFQUNBLDhCQUFBO0FBbEJoQjs7QUFzQmdCO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0FBcEJwQjs7QUF1QmdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBckJwQjs7QUF1Qm9CO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBdEJ4Qjs7QUF5Qm9CO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZCeEI7O0FBeUJ3QjtFQUNJLGVBQUE7QUF2QjVCIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4gICAgLmJhbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzYgNDEgNTEgLyAwLjIpO1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjQyOTMzIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGM0YzRjM7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0bnMge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJlLXdyYXBwZXIge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wZXN0LWZvb3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRvYy13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuZG9jLXR5cGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q4RDhEODtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5uZXItZGV0YWlscyB7XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGM0YzRjM7XG4gICAgICAgICAgICAuZXZlbnQtZGV0YWlsc3tcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBpb24tdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmpvaW4tZXZlbnQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAmLmV4cGlyZWR7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWVkaWEtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IC42KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/event-details/event-details.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/event-details/event-details.page.ts ***!
  \*****************************************************/
/*! exports provided: EventDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPage", function() { return EventDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-component/topic-images/topic-images.component */ "./src/app/common-component/topic-images/topic-images.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/util.service */ "./src/app/_services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












let EventDetailsPage = class EventDetailsPage {
    constructor(modalCtrl, router, service, helperService, translateService, alertController, route, util, iab) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.service = service;
        this.helperService = helperService;
        this.translateService = translateService;
        this.alertController = alertController;
        this.route = route;
        this.util = util;
        this.iab = iab;
        this.details = {};
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domain;
        this.guest = false;
        this.isBefore = false;
        this.loaded = false;
        this.currentLang = this.helperService.getLang();
        this.route.queryParams.subscribe(_res => {
            this.selectedId = _res.id;
            this.getEventById(this.selectedId);
        });
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
        }
        else {
            this.guest = false;
        }
    }
    ngOnInit() {
        if (localStorage.getItem('currentUser')) {
            this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteEventsList;
            if (this.favList) {
                var fav = this.favList.filter(item => item.id == this.selectedId);
                this.favFound = fav.length > 0 ? true : false;
            }
            else {
                this.favFound = false;
            }
        }
    }
    ionViewDidEnter() {
    }
    openImages(_images) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _common_component_topic_images_topic_images_component__WEBPACK_IMPORTED_MODULE_4__["TopicImagesComponent"],
                showBackdrop: false,
                componentProps: { details: _images }
            });
            return yield modal.present();
        });
    }
    getEventById(_id) {
        this.loaded = false;
        this.helperService.show();
        this.service.getEventsByID(_id).subscribe(_res => {
            this.loaded = true;
            this.details = _res;
            this.helperService.hide();
            const tempDT = this.details.endDate.replaceAll('/', '-') + ' ' + this.details.endTime;
            this.isBefore = moment__WEBPACK_IMPORTED_MODULE_11__(tempDT).isBefore(new Date());
        }, error => {
            this.helperService.hide();
            this.helperService.showToast(this.helperService.translate('somethingWentWrong'), 'danger', 'bottom');
        });
    }
    addFavorite(_id) {
        if (this.guest) {
            this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
        }
        else {
            this.service.addfavoriteEvent(_id).subscribe(_res => {
                this.helperService.show();
                this.util.publishProfile('updated');
                this.getProfile('1');
            });
        }
    }
    getProfile(_type) {
        this.service.getProfile().subscribe(_res => {
            localStorage.setItem('currentUser', JSON.stringify(_res));
            this.favList = _res.favouriteEventsList;
            if (this.favList) {
                var fav = this.favList.filter(item => item.id == this.selectedId);
                this.favFound = fav.length > 0 ? true : false;
            }
            else {
                this.favFound = false;
            }
            this.helperService.hide();
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
        this.service.deleteFavoriteEvent(this.selectedId).subscribe(_res => {
            this.helperService.show();
            this.getProfile('2');
        });
    }
    openBrowser(_url) {
        // this.iab.create(_url);
        window.open(_url, '_self');
    }
};
EventDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] }
];
EventDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event-details/event-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-details.page.scss */ "./src/app/event-details/event-details.page.scss")).default]
    })
], EventDetailsPage);



/***/ })

}]);
//# sourceMappingURL=event-details-event-details-module-es2015.js.map