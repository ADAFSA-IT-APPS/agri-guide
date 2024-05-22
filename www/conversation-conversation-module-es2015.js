(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversation-conversation-module"],{

/***/ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/*! exports provided: PhotoViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoViewer", function() { return PhotoViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var PhotoViewer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewer.prototype.show = function (url, title, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", { "sync": true }, arguments); };
    PhotoViewer.pluginName = "PhotoViewer";
    PhotoViewer.plugin = "com-sarriaroman-photoviewer";
    PhotoViewer.pluginRef = "PhotoViewer";
    PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewer.platforms = ["Android", "iOS"];
PhotoViewer.ɵfac = function PhotoViewer_Factory(t) { return ɵPhotoViewer_BaseFactory(t || PhotoViewer); };
PhotoViewer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoViewer, factory: function (t) { return PhotoViewer.ɵfac(t); } });
var ɵPhotoViewer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PhotoViewer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return PhotoViewer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcGhvdG8tdmlld2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdRLElBb0R5QiwrQkFBaUI7QUFBQztBQUU5QjtBQUVSO0FBQU0sSUFJakIsMEJBQUksYUFBQyxHQUFXLEVBQUUsS0FBYyxFQUFFLE9BQTRCO0FBRVg7QUFBNEM7QUFBd0Q7QUFBMkM7QUFBcUU7K0NBWHhRLFVBQVU7Ozs7OzBCQUNMO0FBQUMsc0JBekRQO0FBQUUsRUF5RCtCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBob3RvVmlld2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2hhcmUgYnV0dG9uIChBbmRyb2lkIG9ubHkpLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBzaGFyZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBZGQgSFRUUCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LiAgVXNlZnVsIGZvciBhdXRoZW50aWNhdGVkIHBhZ2VzLlxuICAgKiBUaGUgdmFsdWUgaXMgYSBzdHJpbmcgaW4gYSBKU09OIGZvcm1hdC4gIERlZmF1bHQ6ICcnXG4gICAqL1xuICBoZWFkZXJzPzogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uIGZvciBjbG9zZSBidXR0b24gdmlzaWJpbGl0eSB3aGVuIHNoYXJlIGZhbHNlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiB5b3UgbmVlZCB0byBjb3B5IGltYWdlIHRvIHJlZmVyZW5jZSBiZWZvcmUgc2hvdyB0aGVuIHNldCBpdCB0cnVlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjb3B5VG9SZWZlcmVuY2U/OiBib29sZWFuO1xuICAvKipcbiAgICogRW5hYmxlIG9yIERpc2FibGUgUGljYXNzbyBPcHRpb25zICggT25seSBBbmRyb2lkICk6IGZpdCwgY2VudGVySW5zaWRlLCBjZW50ZXJDcm9wLlxuICAgKi9cbiAgcGljY2Fzb09wdGlvbnM/OiB7XG4gICAgZml0PzogYm9vbGVhbjtcbiAgICBjZW50ZXJJbnNpZGU/OiBib29sZWFuO1xuICAgIGNlbnRlckNyb3A/OiBib29sZWFuO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIFBob3RvIFZpZXdlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGNhbiBkaXNwbGF5IHlvdXIgaW1hZ2UgaW4gZnVsbCBzY3JlZW4gd2l0aCB0aGUgYWJpbGl0eSB0byBwYW4sIHpvb20sIGFuZCBzaGFyZSB0aGUgaW1hZ2UuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG90by12aWV3ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvVmlld2VyOiBQaG90b1ZpZXdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2V9KTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzZWN1cmVzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2UsIGhlYWRlcnM6ICd7dXNlcm5hbWU6Zm9vLHBhc3N3b3JkOmJhcn0nfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQaG90b1ZpZXdlcicsXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXG4gIHBsdWdpblJlZjogJ1Bob3RvVmlld2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXJyaWFyb21hbi9waG90b3ZpZXdlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIGFuIGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"\" defaultHref=\"/tabs/chat\"></ion-back-button>\n    </ion-buttons>\n    <ion-avatar slot=\"start\" class=\"contact-avatar\">\n      <img [src]=\"chatTo?.profilePic\" onError=\"this.src='./assets/user.svg'\">\n    </ion-avatar>\n    <ion-title class=\"lang-{{currentLang}}\">\n      <ion-label>\n        <h2>{{ chatTo.name }}</h2>\n        <small>{{ chatTo.isOnline }}</small>\n      </ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding-bottom\">\n  <ion-infinite-scroll threshold=\"100px\" position=\"top\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content disabled=\"true\" loadingSpinner=\"bubbles\" loadingText=\"Loading chat...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div class=\"chat-container\">\n    <div *ngFor=\"let item of oldMsgs\">\n      <div *ngFor=\"let message of item; let i=index\" class=\"chat-bubble old-bubble\"\n        [ngClass]=\"[message.cstatus, message.media.type]\">\n        <img [src]=\"path + message.media.url\" onError=\"this.src='./assets/no-image.svg'\" *ngIf=\"message.media.type == 'image'\"\n          (click)=\"showPreview(path + message.media.url)\" />\n        <h6 *ngIf=\"message.media.type == 'text' || message.media.type == 'image'\">{{ message.message }}</h6>\n        <div class=\"topic-details\" *ngIf=\"message.media.type == 'topic'\">\n          <div class=\"topic-image\">\n            <img [src]=\"path + message.media.topics.banner\" onError=\"this.src='./assets/no-image.svg'\">\n          </div>\n          <div class=\"topic-content\">\n            <h6>{{ currentLang == 'en' ? message.media.topics.title : message.media.topics.title_ar }}</h6>\n          </div>\n        </div>\n        <p>{{ message.createdOn | date: 'EEE MMM, yyyy hh:mm a' }}</p>\n      </div>\n    </div>\n    <div *ngFor=\"let message of messages; let i=index\" class=\"chat-bubble\" [ngClass]=\"[message.status, message.type]\">\n      <img [src]=\"path + message.url\" onError=\"this.src='./assets/no-image.svg'\" *ngIf=\"message.type == 'image'\" (click)=\"showPreview(path + message.url)\" />\n      <h6 *ngIf=\"message.type == 'text' || message.type == 'image'\">{{ message.text }}</h6>\n      <div class=\"topic-details\" *ngIf=\"message.type == 'topic'\">\n        <div class=\"topic-image\">\n          <img [src]=\"path + message.url\" onError=\"this.src='./assets/no-image.svg'\">\n        </div>\n        <div class=\"topic-content\">\n          <h6>{{ message.text }}</h6>\n        </div>\n      </div>\n      <p>{{ message.createdOn | date: 'EEE MMM, yyyy hh:mm a' }}</p>\n    </div>\n  </div>\n  <!-- <input type=\"file\" name=\"uploadImage\" id=\"uploadImage\" (change)=\"upload($event.target.files)\"> -->\n</ion-content>\n<ion-footer>\n  <div class=\"chat-controls\">\n    <ion-row class=\"bg-white ion-align-items-center footer\">\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <p class=\"ion-text-center icon-controls\">\n          <ion-icon mode=\"ios\" name=\"add\" *ngIf=\"!showOptions\" (click)=\"selectImage()\"></ion-icon>\n          <ion-icon mode=\"ios\" color=\"danger\" name=\"close\" *ngIf=\"showOptions\"></ion-icon>\n        </p>\n      </ion-col>\n      <ion-col size=\"8\" class=\"ion-no-padding\">\n        <ion-list lines=\"none\" class=\"ion-no-padding\">\n          <ion-item>\n            <ion-input placeholder=\"Type your message\" type=\"text\" [(ngModel)]=\"message\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <p class=\"ion-text-center icon-controls\">\n          <ion-icon mode=\"ios\" name=\"send\" class=\"text-primary\" (click)=\"sendMsgType('text')\"></ion-icon>\n        </p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/conversation/conversation-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/conversation/conversation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConversationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageRoutingModule", function() { return ConversationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation.page */ "./src/app/conversation/conversation.page.ts");




const routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_3__["ConversationPage"]
    }
];
let ConversationPageRoutingModule = class ConversationPageRoutingModule {
};
ConversationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConversationPageRoutingModule);



/***/ }),

/***/ "./src/app/conversation/conversation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.module.ts ***!
  \*****************************************************/
/*! exports provided: ConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversation-routing.module */ "./src/app/conversation/conversation-routing.module.ts");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation.page */ "./src/app/conversation/conversation.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");









let ConversationPageModule = class ConversationPageModule {
};
ConversationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConversationPageRoutingModule"]
        ],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"]],
        declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
    })
], ConversationPageModule);



/***/ }),

/***/ "./src/app/conversation/conversation.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-color: transparent;\n  align-items: center;\n  display: flex;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\nion-title {\n  margin-left: 10px;\n}\n\nion-title.lang-ar {\n  text-align: right;\n}\n\nion-title.lang-en {\n  text-align: left;\n}\n\nion-title h2 {\n  font-weight: 500;\n  margin: 0;\n}\n\nion-back-button {\n  color: #000;\n}\n\n.contact-avatar {\n  height: 40px;\n  width: 40px;\n  margin-left: 8px;\n}\n\n.icon-controls ion-icon {\n  font-size: 2rem;\n}\n\nion-item {\n  --padding-start: 0px;\n}\n\n.chat-bubble {\n  width: auto;\n  max-width: 75%;\n  min-width: 25%;\n  border-radius: 25px;\n  padding: 8px 16px;\n  margin: 10px;\n  display: block;\n  clear: both;\n  position: relative;\n  margin-bottom: 0;\n}\n\n.chat-bubble.topic {\n  border-radius: 10px;\n  padding: 8px;\n}\n\n.chat-bubble.received {\n  background: #F5F5F5;\n  float: left;\n}\n\n.chat-bubble.received p {\n  color: #000 !important;\n}\n\n.chat-bubble.send {\n  background: var(--ion-color-primary);\n  float: right;\n  text-align: left;\n  color: #fff;\n  transition: all 0.3s;\n}\n\n.chat-bubble .topic-details {\n  display: flex;\n  flex-direction: column;\n}\n\n.chat-bubble .topic-details .topic-image img {\n  border-radius: 10px;\n}\n\n.chat-bubble.image {\n  padding: 8px;\n  border-radius: 10px;\n}\n\n.chat-bubble.image img {\n  border-radius: 10px;\n}\n\n.chat-bubble h6 {\n  margin: 0;\n  font-weight: 400;\n}\n\n.chat-bubble p {\n  margin: 0;\n  margin-top: 4px;\n  font-size: 10px;\n  opacity: 0.6;\n}\n\n::ng-deep .my-custom-class .modal-wrapper {\n  height: 70vh;\n  margin-top: auto;\n  border-top-right-radius: 33px;\n  border-top-left-radius: 33px;\n}\n\n::ng-deep .request-view-modal .modal-wrapper {\n  max-height: 320px;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content;\n  margin-top: auto;\n  border-top-right-radius: 33px;\n  border-top-left-radius: 33px;\n}\n\n::ng-deep .swiper-pagination-bullet {\n  width: 6px;\n  height: 6px;\n}\n\n::ng-deep .swiper-pagination-bullets {\n  bottom: 10px !important;\n}\n\n::ng-deep .swiper-pagination-bullet-active {\n  width: 8px;\n  height: 8px;\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FBQUo7O0FBR0E7RUFPSSxpQkFBQTtBQU5KOztBQUFJO0VBQ0ksaUJBQUE7QUFFUjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLFNBQUE7QUFBUjs7QUFJQTtFQUNJLFdBQUE7QUFESjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFPSTtFQUNJLGVBQUE7QUFKUjs7QUFTQTtFQUNJLG9CQUFBO0FBTko7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5KOztBQU9JO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBTFI7O0FBUUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFOUjs7QUFPUTtFQUNJLHNCQUFBO0FBTFo7O0FBU0k7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtBQVBSOztBQVVJO0VBQ0ksYUFBQTtFQUVBLHNCQUFBO0FBVFI7O0FBWVk7RUFDSSxtQkFBQTtBQVZoQjs7QUFrQkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFoQlI7O0FBa0JRO0VBQ0ksbUJBQUE7QUFoQlo7O0FBb0JJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBbEJSOztBQXFCSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFuQlI7O0FBK0JJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQTVCUjs7QUFpQ0k7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQTlCUjs7QUFrQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQS9CSjs7QUFrQ0E7RUFDSSx1QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQS9CSjs7QUFrQ0E7RUFDSTtJQUNJLFVBQUE7RUEvQk47RUFrQ0U7SUFDSSxVQUFBO0VBaENOO0FBQ0Y7O0FBeUJBO0VBQ0k7SUFDSSxVQUFBO0VBL0JOO0VBa0NFO0lBQ0ksVUFBQTtFQWhDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8vaGVpZ2h0OiA2MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICAmLmxhbmctYXJ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAmLmxhbmctZW57XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gICAgaDIge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5cblxuLmNvbnRhY3QtYXZhdGFyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmljb24tY29udHJvbHMge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn1cblxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5jaGF0LWJ1YmJsZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgbWluLXdpZHRoOiAyNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgJi50b3BpY3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cblxuICAgICYucmVjZWl2ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnNlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB9XG5cbiAgICAudG9waWMtZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLnRvcGljLWltYWdlIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b3BpYy1jb250ZW50IHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuaW1hZ2Uge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgb3BhY2l0eTogMC42XG4gICAgfVxufVxuXG4uY2hhdC1jb250YWluZXIge1xuICAgIC8vIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuXG46Om5nLWRlZXAgLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgLm1vZGFsLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzM3B4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzM3B4O1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5yZXF1ZXN0LXZpZXctbW9kYWwge1xuICAgIC5tb2RhbC13cmFwcGVyIHtcbiAgICAgICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzNweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzNweDtcbiAgICB9XG59XG5cbjo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogNnB4O1xufVxuXG46Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgIGJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/conversation/conversation.page.ts":
/*!***************************************************!*\
  !*** ./src/app/conversation/conversation.page.ts ***!
  \***************************************************/
/*! exports provided: ConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPage", function() { return ConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/util.service */ "./src/app/_services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");










let ConversationPage = class ConversationPage {
    constructor(camera, modalCtrl, actionSheetController, photoViewer, router, route, utilService, helperService, service) {
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController;
        this.photoViewer = photoViewer;
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.helperService = helperService;
        this.service = service;
        this.propertyList = [];
        this.contactInfo = {
            name: 'Lisa',
        };
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].domain;
        this.show = false;
        this.showOptions = false;
        this.oldMsgs = [];
        this.messages = [];
        this.image = '';
        this.currentLang = this.helperService.getLang();
        //this.ScrollToBottom();
        this.route.queryParams.subscribe(_res => {
            this.chatTo = _res;
            this.getChatHistory();
            this.gtAdvisorById(this.chatTo.id, '1');
        });
        if (localStorage.getItem('currentUser')) {
            this.myProfile = JSON.parse(localStorage.getItem('currentUser'));
        }
    }
    ngOnInit() {
        let self = this;
        this.chatServiceConnection = this.utilService.chatService();
        this.chatServiceConnection.start().then(function () {
            console.log('connected....');
            if (self.chatTo.topicId) {
                //self.sendMessage('image', selectedCat.name, data.scanImageUrl, null);
                // self.messages.push({ url: '', status: 'send', createdOn: new Date(), type: 'topic' })
                self.getTopicById(self.chatTo.topicId);
            }
            if (self.chatTo.type == 'scanned') {
                var data = JSON.parse(localStorage.getItem('scannedImage'));
                var selectedCat = JSON.parse(localStorage.getItem('selectedCat'));
                var extra = window.atob(localStorage.getItem('extra'));
                console.log(selectedCat);
                self.sendMessage('image', selectedCat.name, data.scanImageUrl, null);
                self.messages.push({ text: self.currentLang == 'en' ? selectedCat.name : selectedCat.name_ar, url: data.scanImageUrl, status: 'send', createdOn: new Date(), type: 'image' });
                setTimeout(() => {
                    self.sendMessage('text', extra, null, null);
                    self.messages.push({ text: extra, url: null, status: 'send', createdOn: new Date(), type: 'text' });
                }, 100);
                localStorage.removeItem('scannedImage');
                localStorage.removeItem('selectedCat');
                localStorage.removeItem('extra');
            }
            if (self.chatTo.type == 'animal') {
                var extra = window.atob(localStorage.getItem('extra'));
                self.messages.push({ text: extra, url: null, status: 'send', createdOn: new Date(), type: 'text' });
                self.sendMessage('text', extra, null, null);
                setTimeout(() => {
                    localStorage.removeItem('extra');
                }, 100);
            }
        }).catch(function (err) {
            console.error(err.toString());
        });
        this.chatServiceConnection.on("ReceiveMessage", function (message) {
            (new Audio('./assets/music/tune.mp3')).play();
            //var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            self.messages.push({
                username: message.fromUser.name,
                text: message.message,
                type: message.media.type,
                createdOn: message.createdOn,
                status: 'received'
            });
            self.ScrollToBottom();
        });
    }
    ngAfterViewInit() {
        this.infiniteScroll.disabled = true;
    }
    gtAdvisorById(id, type) {
        this.service.advisorById(id).subscribe(_res => {
            var _a, _b, _c, _d;
            let chatToObj = JSON.parse(JSON.stringify(this.chatTo));
            if ((_a = _res.data) === null || _a === void 0 ? void 0 : _a.profilePic) {
                if (type == '1') {
                    chatToObj['profilePic'] = this.path + ((_b = _res.data) === null || _b === void 0 ? void 0 : _b.profilePic);
                }
                if ((_c = _res.data) === null || _c === void 0 ? void 0 : _c.chatStatus) {
                    chatToObj['isOnline'] = (_d = _res.data) === null || _d === void 0 ? void 0 : _d.chatStatus;
                }
                this.chatTo = chatToObj;
            }
            else {
                chatToObj['profilePic'] = '';
                this.chatTo = chatToObj;
            }
        });
    }
    getChatHistory() {
        var payload = {
            "toUserId": this.chatTo.id,
            "pageFrom": 0,
            "pageSize": 10
        };
        this.helperService.show();
        this.service.getChatHistory(payload).subscribe(_res => {
            this.oldMsgs = _res;
            this.helperService.hide();
            this.oldMsgs.forEach(_item => {
                _item.reverse();
                _item.forEach(_itm => {
                    if (_itm.fromUsersId == this.myProfile.usersId) {
                        _itm.cstatus = 'send';
                    }
                    else {
                        _itm.cstatus = 'received';
                    }
                });
            });
            this.infiniteScroll.disabled = false;
            //event.target.disabled = true;
            this.ScrollToBottom();
        });
    }
    getTopicById(_id) {
        this.service.getTopicById(_id).subscribe(_res => {
            this.messages.push({ url: _res.banner, text: this.currentLang == 'en' ? _res.title : _res.title_ar, status: 'send', createdOn: new Date(), type: 'topic' });
            this.sendMessage('topic', 'Topic', '', _id);
            if (this.chatTo.type == 'newchat') {
                var extra = window.atob(localStorage.getItem('extra'));
                setTimeout(() => {
                    this.messages.push({ text: extra, url: null, status: 'send', createdOn: new Date(), type: 'text' });
                    this.sendMessage('text', extra, null, null);
                }, 100);
                localStorage.removeItem('extra');
            }
        });
    }
    ScrollToBottom() {
        setTimeout(() => {
            this.myContent.scrollToBottom(300);
        }, 100);
    }
    upload(files) {
        let me = this;
        let file = files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            me.image = reader.result;
            me.uploadImage(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    uploadImage(_base64) {
        var Payload = {
            fileContent: {
                "base64": _base64,
                "filename": "sample.jpeg"
            }
        };
        this.service.uploadChatImage(Payload).subscribe(_res => {
            this.sendMessage('image', null, _res.scanImageUrl, null);
            this.messages.push({ url: _res.scanImageUrl, status: 'send', createdOn: new Date(), type: 'image' });
        });
    }
    sendMsgType(_type) {
        switch (_type) {
            case 'text':
                var msg = this.message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                if (msg) {
                    this.messages.push({ text: msg, status: 'send', createdOn: new Date(), type: 'text' });
                    this.message = undefined;
                    this.sendMessage('text', msg, null, null);
                }
                return;
            case 'image':
                return;
            case 'text':
                return;
            default:
                break;
        }
    }
    sendMessage(_type, _msg, _url, _topic) {
        var send = {
            "toUsersId": this.chatTo.id,
            "message": _msg,
            "transaction": "in",
            "media": {
                "type": _type,
                "url": _type == 'image' ? _url : null,
                "topicId": _topic ? _topic : null
            }
        };
        console.log('send', send);
        this.chatServiceConnection.invoke('Send2User', JSON.stringify(send)).catch((err) => {
            return console.error(err.toString());
        });
        this.ScrollToBottom();
        this.gtAdvisorById(this.chatTo.id, '2');
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            //this.image = 'data:image/jpeg;base64,' + imageData;
            var Payload = {
                fileContent: {
                    "base64": 'data:image/jpeg;base64,' + imageData,
                    "filename": "sample.jpeg"
                }
            };
            this.helperService.show();
            this.service.uploadChatImage(Payload).subscribe(_res => {
                this.helperService.hide();
                this.sendMessage('image', null, _res.scanImageUrl, null);
                this.messages.push({ url: _res.scanImageUrl, status: 'send', createdOn: new Date(), type: 'image' });
            });
            //this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            console.log('image', this.image);
        }, (err) => {
            // Handle error
        });
    }
    showPreview(_image) {
        const options = {
            share: false,
            closeButton: true,
            copyToReference: true,
            headers: "",
            piccasoOptions: {} // If it is not provided, it will trigger an exception
        };
        this.photoViewer.show(decodeURIComponent(_image), '', options);
    }
    goToProfile() {
        this.router.navigate(['/agent-profile']);
    }
    loadData(event) {
        var payload = {
            "toUserId": this.chatTo.id,
            "pageFrom": document.getElementsByClassName('old-bubble').length,
            "pageSize": 10
        };
        this.service.getChatHistory(payload).subscribe(_res => {
            //this.oldMsgs = _res;
            event.target.complete();
            _res.forEach(_item => {
                _item.reverse();
                _item.forEach(_itm => {
                    if (_itm.fromUsersId == this.myProfile.usersId) {
                        _itm.cstatus = 'send';
                    }
                    else {
                        _itm.cstatus = 'received';
                    }
                });
            });
            this.oldMsgs.unshift(..._res);
            //event.target.disabled = true;
            if (document.getElementsByClassName('old-bubble').length < 1) {
                this.ScrollToBottom();
            }
        });
    }
};
ConversationPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
ConversationPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }],
    myContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], static: false },] }]
};
ConversationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-conversation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conversation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./conversation.page.scss */ "./src/app/conversation/conversation.page.scss")).default]
    })
], ConversationPage);



/***/ })

}]);
//# sourceMappingURL=conversation-conversation-module-es2015.js.map