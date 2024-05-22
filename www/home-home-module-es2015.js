(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'home' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n     <app-btn-notification></app-btn-notification>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"main\">\n    <div class=\"general-noti\" *ngIf=\"generalNotification\">\n      <div class=\"close\" (click)=\"removeNoti()\">\n          <ion-icon name=\"close\"></ion-icon>\n      </div>\n      <div class=\"content\">\n        <ion-label>{{generalNotification.body}}</ion-label>\n        <ion-text>{{generalNotification.date | date: 'dd MMM, yyyy hh:mm a'}}</ion-text>\n      </div>\n    </div>\n    <div class=\"date-wrapper\">\n      <ion-text class=\"day\">{{date | date: 'EEEE'}}</ion-text> | <ion-text class=\"date\">{{date | date: 'MMM dd yyyy'}}\n      </ion-text>\n    </div>\n    <app-weather></app-weather>\n    <div class=\"selected-topics\" *ngIf=\"!guest\">\n      <div class=\"sub-title\" *ngIf=\"farming.length > 0\">\n        <ion-text>{{'topicSelected' | translate}}</ion-text>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\" *ngFor=\"let item of farming\">\n            <div class=\"item\" (click)=\"goToTopics(item)\">\n              <ion-img [src]=\"path + item.icon\" (ionError)=\"onError($event)\"></ion-img>\n              <ion-text *ngIf=\"currentLang == 'en'\">{{item.name}}</ion-text>\n              <ion-text *ngIf=\"currentLang == 'ar'\">{{item.name_ar}}</ion-text>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div *ngIf=\"dummy\">\n        <ion-grid class=\"ion-no-padding custom-skeleton\">\n          <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let item of dummy\">\n              <div class=\"dimg\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <ion-label>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </ion-label>\n              </ion-col>\n              </ion-row>\n        </ion-grid>\n        </div>\n    </div>\n    <div class=\"activities ion-margin-top\">\n      <div class=\"sub-title\">\n        <ion-text>{{'ADAFSAActivities' | translate}}</ion-text>\n      </div>  \n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of eventList\">\n          <div (click)=\"goToEvent(item.id)\">\n            <ion-img [src]=\"path + item.banner\" (ionError)=\"onError($event)\"></ion-img>\n            <ion-text *ngIf=\"currentLang == 'en'\">{{item.title}}</ion-text>\n            <ion-text *ngIf=\"currentLang == 'ar'\">{{item.title_ar}}</ion-text>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <div class=\"no-events\" *ngIf=\"eventList?.length == 0\">\n        <ion-text>\n          <strong>{{'noEventsFound' | translate}}</strong>\n        </ion-text>\n      </div>\n    </div>\n    <div class=\"smart-service ion-margin-top\">\n      <div class=\"sub-title\">\n        <ion-text>{{'supportingSmartServices' | translate}}</ion-text>\n      </div>\n      <div class=\"service\" (click)=\"openModal('1')\">\n        <ion-img src=\"./assets/cam-scan.svg\" (ionError)=\"onError($event)\"></ion-img>\n        <div>\n          <ion-label>{{'CamScan' | translate}}</ion-label>\n          <ion-text>{{'UseYourCameraToFindTheTypeOfPest' | translate}}</ion-text>\n        </div>\n      </div>\n      <div class=\"service ion-margin-top lang-{{currentLang}}\" (click)=\"openModal('2')\">\n        <ion-img src=\"./assets/animal-diseases.svg\" (ionError)=\"onError($event)\"></ion-img>\n        <div>\n          <ion-label>{{'AnimalDiseases' | translate}}</ion-label>\n          <ion-text>{{'findWhatDiseaseYourAnimalHas' | translate}}</ion-text>\n        </div>\n      </div>     \n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-component/common-component.module */ "./src/app/common-component/common-component.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");










let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_7__["CommonComponentPageModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        providers: [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.general-noti {\n  padding: 16px 20px 16px 16px;\n  background: #E94757;\n  color: #fff;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.general-noti .close {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  font-size: 1.2rem;\n}\n\n.general-noti .content {\n  display: flex;\n  flex-direction: column;\n}\n\n.general-noti .content ion-label {\n  font-size: 1.2rem;\n}\n\n.general-noti .content ion-text {\n  font-size: 0.7rem;\n  margin-top: 5px;\n  opacity: 0.7;\n}\n\n.custom-skeleton .dimg ion-skeleton-text {\n  height: 70px;\n  width: 80%;\n  margin: auto;\n  border-radius: 12px;\n}\n\n.custom-skeleton ion-label ion-skeleton-text {\n  width: 50% !important;\n  margin: auto;\n  margin-top: 8px;\n  height: 6px;\n}\n\n.selected-topics ion-grid {\n  padding: 0;\n  --ion-grid-column-padding: 5px;\n}\n\n.selected-topics ion-grid ion-row {\n  flex-wrap: nowrap;\n  overflow-x: scroll !important;\n  overflow-y: hidden;\n}\n\n.date-wrapper {\n  padding: 12px;\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.date-wrapper .day {\n  font-weight: bold;\n}\n\n.item {\n  text-align: center;\n}\n\n.item ion-img {\n  margin: auto;\n  background: #F3F3F3;\n  padding: 2px;\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n\n.item ion-img::part(image) {\n  height: 64px !important;\n  width: 64px !important;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 2px;\n  margin: auto;\n}\n\n.item ion-text {\n  font-size: 12px;\n  display: inline-block;\n}\n\n.sub-title {\n  color: #5C6770;\n  margin-top: 20px;\n  margin-bottom: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\nion-slides {\n  --bullet-background-active: #ED737E;\n}\n\nion-slides ion-slide {\n  padding-bottom: 40px;\n}\n\nion-slides ion-slide div {\n  text-align: left;\n  font-weight: bold;\n  width: 100%;\n}\n\nion-slides ion-slide div ion-img {\n  margin-bottom: 10px;\n}\n\nion-slides ion-slide div ion-img::part(image) {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.service {\n  display: flex;\n  background: rgba(184, 205, 194, 0.2);\n  padding: 16px;\n  border-radius: 10px;\n}\n\n.service ion-img {\n  min-width: 70px;\n  max-width: 70px;\n  height: 56px;\n  padding: 3px;\n}\n\n.service.lang-ar div {\n  margin-left: 0px !important;\n}\n\n.service div {\n  margin-left: 16px;\n}\n\n.service div ion-label {\n  font-weight: 600;\n  font-size: 1.4rem;\n  display: block;\n}\n\n.service div ion-text {\n  font-size: 10px;\n  display: inline-block;\n}\n\n.activities,\n.smart-service {\n  margin-top: 24px !important;\n}\n\n.no-events {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f0f0;\n}\n\n::ng-deep .swiper-pagination {\n  display: inline-flex !important;\n}\n\n::ng-deep .swiper-pagination-bullet {\n  width: 50% !important;\n  border-radius: 2px;\n  height: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFESTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUdSOztBQURJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBR1I7O0FBRlE7RUFDSSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUlaOztBQUlRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFEWjs7QUFNUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSlo7O0FBVUk7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7QUFQUjs7QUFTUTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVlBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQVRKOztBQVdJO0VBQ0ksaUJBQUE7QUFUUjs7QUFhQTtFQUNJLGtCQUFBO0FBVko7O0FBWUk7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVhSOztBQVlRO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFWWjs7QUFjSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQVpSOztBQWdCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWdCQTtFQUdJLG1DQUFBO0FBZko7O0FBaUJJO0VBQ0ksb0JBQUE7QUFmUjs7QUFpQlE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWZaOztBQWlCWTtFQUNJLG1CQUFBO0FBZmhCOztBQWlCZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFmcEI7O0FBc0JBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbkJKOztBQXFCSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFuQlI7O0FBdUJRO0VBQ0EsMkJBQUE7QUFyQlI7O0FBeUJJO0VBQ0ksaUJBQUE7QUF2QlI7O0FBeUJRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF2Qlo7O0FBMEJRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBeEJaOztBQTZCQTs7RUFFSSwyQkFBQTtBQTFCSjs7QUE2QkE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTFCSjs7QUE2QkE7RUFDSSwrQkFBQTtBQTFCSjs7QUE2QkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG4uZ2VuZXJhbC1ub3RpIHtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNFOTQ3NTc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgcmlnaHQ6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmN1c3RvbS1za2VsZXRvbiB7XG4gICAgLmRpbWcge1xuICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0ZWQtdG9waWNzIHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDVweDtcblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXRlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgLmRheSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlvbi1pbWcge1xuICAgICAgICAvLyB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICY6OnBhcnQoaW1hZ2Upe1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG4uc3ViLXRpdGxlIHtcbiAgICBjb2xvcjogIzVDNjc3MDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIC8vIC0tYnVsbGV0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC8vIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI0VENzM3RTtcblxuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgICAgICY6OnBhcnQoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlcnZpY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogcmdiKDE4NCAyMDUgMTk0IC8gLjIpO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGlvbi1pbWcge1xuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgJi5sYW5nLWFye1xuICAgICAgICBkaXYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3Rpdml0aWVzLFxuLnNtYXJ0LXNlcnZpY2Uge1xuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm5vLWV2ZW50cyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cblxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/util.service */ "./src/app/_services/util.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_component_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-component/category-modal/category-modal.component */ "./src/app/common-component/category-modal/category-modal.component.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");










let HomePage = class HomePage {
    constructor(menuCtrl, service, util, oneSignal, helperService, modalCtrl, ngZone, router) {
        this.menuCtrl = menuCtrl;
        this.service = service;
        this.util = util;
        this.oneSignal = oneSignal;
        this.helperService = helperService;
        this.modalCtrl = modalCtrl;
        this.ngZone = ngZone;
        this.router = router;
        this.date = new Date();
        this.dummy = Array(4);
        this.farming = [];
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domain;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            spaceBetween: 10
        };
        this.guest = false;
        this.currentLang = this.helperService.getLang();
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
        }
        else {
            this.util.observProfile().subscribe(data => {
                this.getProfile();
            });
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.generalNotification$ = this.util.observNoti();
            this.util.observNoti().subscribe(_res => {
                console.log('observNotify', _res);
                this.ngZone.run(() => {
                    this.generalNotification = JSON.parse(localStorage.getItem('generalNotifications'));
                });
                console.log('generalNotification', this.generalNotification);
            });
        });
    }
    ionViewWillEnter() {
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
            this.getEvents();
        }
        else {
            this.farming = [];
            this.getProfile();
            this.getEvents();
            this.generalNotification = JSON.parse(localStorage.getItem('generalNotifications'));
        }
    }
    ngDoCheck() {
        //this.generalNotification = JSON.parse(localStorage.getItem('generalNotifications'));
    }
    removeNoti() {
        localStorage.removeItem('generalNotifications');
        this.generalNotification = undefined;
    }
    toggleMenu() {
        // this.menuCtrl.toggle();
        this.router.navigate(['/filter-subject']);
    }
    getProfile() {
        // this.helperService.show();
        this.service.getProfile().subscribe(_res => {
            // this.helperService.hide();
            console.log('appid', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId);
            console.log('googlenumnner', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.googleProjectNumber);
            this.oneSignal.getIds().then((data) => {
                console.log('iddddd', data);
                localStorage.setItem('fcm', data.userId);
            });
            localStorage.removeItem('currentUser');
            this.util.chatService();
            this.profileData = _res;
            this.farming = _res.categoryList;
            this.dummy = [];
            localStorage.setItem('currentUser', JSON.stringify(_res));
        });
    }
    scanImage(_id) {
        this.router.navigate(['/scan-image'], { queryParams: { cid: _id } });
    }
    openModal(_type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.router.navigate(['add-new-address']);
            const modal = yield this.modalCtrl.create({
                component: _common_component_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_7__["CategoryModalComponent"],
                cssClass: 'category-modal',
                componentProps: { type: _type }
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data.data && data.role == '1') {
                    this.scanSelectedCat = data.data.cat;
                    this.scanImage(this.scanSelectedCat.id);
                }
                else if (data.data && data.role == '2') {
                    this.goToAnimalSymptoms();
                }
            });
            return yield modal.present();
        });
    }
    getEvents() {
        this.eventList = [];
        this.service.getEvents().subscribe(_res => {
            this.eventList = _res;
        });
    }
    goToTopics(item) {
        var payload = { id: item.id, name: item.name, name_ar: item.name_ar, icon: item.icon };
        localStorage.setItem('selectedTopic', JSON.stringify(payload));
        this.router.navigate(['/tabs/topic'], { queryParams: { id: item.id } });
    }
    goToEvent(id) {
        this.router.navigate(['/event-details'], { queryParams: { id } });
    }
    goToAnimalSymptoms() {
        this.router.navigate(['/animal-symptoms']);
    }
    onError(event) {
        event.srcElement.src = '/assets/no-image.svg';
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map