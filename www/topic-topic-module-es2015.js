(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topic-topic-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\" *ngIf=\"!enableSearch\">\n      <ion-button fill=\"clear\" color=\"primary\" (click)=\"toggleMenu()\">\n        <ion-icon color=\"dark\" name=\"ic-menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-title>{{'topic' | translate}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!enableSearch\">\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon color=\"dark\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <app-btn-notification></app-btn-notification>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"enableSearch\">\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon color=\"dark\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!enableSearch\" class=\"ion-padding\">\n    <div class=\"selected-item\" *ngIf=\"selectedCat\">\n      <div class=\"img\">\n        <ion-img [src]=\"path+selectedCat.icon\" (ionError)=\"imgError($event)\"></ion-img>\n      </div>\n      <div class=\"content\">\n        <ion-label>{{'youHaveSelected' | translate }} </ion-label>\n        <ion-text>{{currentLang == 'en' ? selectedCat.name : selectedCat.name_ar}}</ion-text>\n      </div>\n      <div class=\"remove\" *ngIf=\"!guest\">\n        <ion-icon name=\"close\" color=\"danger\" (click)=\"deleteCategory(selectedCat.id)\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"topic-wrapper\">\n      <div class=\"topic-filter\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let item of filterOptions\">\n              <div class=\"type-text\" [ngClass]=\"{'selected': item.id == filter}\" class=\"{{currentLang}}\" (click)=\"filterType(item.id)\">{{currentLang == 'en' ? item.name : item.name_ar }}</div>\n              <!-- <div [ngClass]=\"{'selected': item.id == filter}\" class=\"border-bottom\"></div> -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"topic-list\">\n        <ion-grid>\n          <ion-row>\n            <ng-container *ngFor=\"let item of filterTopicList\">\n              <ion-col size=\"6\" (click)=\"goToDetails(item.id)\" class=\"topic-item\">\n                <img [src]=\"path + item.banner\" onError=\"this.src='./assets/no-image.svg'\" />\n                <ion-text>{{currentLang == 'en' ? item.title : item.title_ar }}</ion-text>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-grid>\n        <div *ngIf=\"filterTopicList.length == 0 && dummy.length == 0\">\n          <app-explore-container name=\"{{'noResultFound' | translate}}\"></app-explore-container>\n        </div>\n        <div *ngIf=\"dummy\">\n          <ion-grid class=\"ion-no-padding custom-skeleton\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let item of dummy\">\n                <div class=\"dimg\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                </div>\n                <ion-label>\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"enableSearch\" class=\"ion-padding-bottom ion-padding-horizontal\">\n    <ion-searchbar placeholder=\"{{'searchTopic' | translate}}\" [(ngModel)]=\"searchTerm\" (ionChange)=\"onSearch()\"></ion-searchbar>\n    <div class=\"topic-wrapper\">\n      <div class=\"topic-list search-list\">\n        <ion-grid>\n          <ion-row>\n            <ng-container *ngFor=\"let item of searchList\">\n              <ion-col size=\"6\" (click)=\"goToDetails(item.id)\" class=\"topic-item\">\n                <img [src]=\"path + item.banner\" onError=\"this.src='./assets/no-image.svg'\" />\n                <ion-text>{{currentLang == 'en' ? item.title : item.title_ar }}</ion-text>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-grid>\n        <div *ngIf=\"dummy\">\n          <ion-grid class=\"ion-no-padding custom-skeleton\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let item of dummy\">\n                <div class=\"dimg\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                </div>\n                <ion-label>\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n    <div class=\"empty-search\" *ngIf=\"searchTerm == '' && searchList.length == 0\">\n      <app-explore-container name=\"{{'searchTopic' | translate}}\"></app-explore-container>\n    </div>\n    <div class=\"empty-search\" *ngIf=\"searchTerm != '' && searchList.length == 0\">\n      <app-explore-container name=\"{{'noResultFound' | translate}}\"></app-explore-container>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!enableSearch\" threshold=\"25%\" position=\"bottom\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content disabled=\"true\" loadingSpinner=\"bubbles\" loadingText=\"Loading ...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-infinite-scroll *ngIf=\"enableSearch\" threshold=\"25%\" position=\"bottom\" (ionInfinite)=\"loadSearch($event)\">\n    <ion-infinite-scroll-content disabled=\"true\" loadingSpinner=\"bubbles\" loadingText=\"Loading ...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/topic/topic-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/topic/topic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TopicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageRoutingModule", function() { return TopicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _topic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic.page */ "./src/app/topic/topic.page.ts");




const routes = [
    {
        path: '',
        component: _topic_page__WEBPACK_IMPORTED_MODULE_3__["TopicPage"]
    }
];
let TopicPageRoutingModule = class TopicPageRoutingModule {
};
TopicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopicPageRoutingModule);



/***/ }),

/***/ "./src/app/topic/topic.module.ts":
/*!***************************************!*\
  !*** ./src/app/topic/topic.module.ts ***!
  \***************************************/
/*! exports provided: TopicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageModule", function() { return TopicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _topic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic-routing.module */ "./src/app/topic/topic-routing.module.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _topic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic.page */ "./src/app/topic/topic.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common-component/common-component.module */ "./src/app/common-component/common-component.module.ts");










let TopicPageModule = class TopicPageModule {
};
TopicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_9__["CommonComponentPageModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _topic_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopicPageRoutingModule"]
        ],
        declarations: [_topic_page__WEBPACK_IMPORTED_MODULE_7__["TopicPage"]]
    })
], TopicPageModule);



/***/ }),

/***/ "./src/app/topic/topic.page.scss":
/*!***************************************!*\
  !*** ./src/app/topic/topic.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.custom-skeleton .dimg ion-skeleton-text {\n  height: 150px;\n  width: calc(100% - 12px);\n  margin: auto;\n  border-radius: 12px;\n}\n\n.custom-skeleton ion-label ion-skeleton-text {\n  width: 50% !important;\n  margin: auto;\n  margin-top: 8px;\n  margin-bottom: 16px;\n  height: 6px;\n}\n\n.selected-item {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.selected-item .img {\n  margin-right: 10px;\n  text-align: center;\n}\n\n.selected-item .img ion-img {\n  height: 64px;\n  width: 64px;\n  margin: auto;\n  background: #e5e7e6;\n  padding: 4px;\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n\n.selected-item .img ion-img::part(image) {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 2px;\n}\n\n.selected-item .content {\n  display: flex;\n  flex-direction: column;\n  color: #5C6770;\n  flex-grow: 1;\n}\n\n.selected-item .content ion-label {\n  font-size: 0.8rem;\n}\n\n.selected-item .content ion-text {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.selected-item .remove {\n  font-size: 2rem;\n}\n\n.topic-filter ion-col {\n  height: 70px;\n  display: flex;\n  align-items: center;\n}\n\n.topic-filter ion-col div {\n  background: #F3F3F3;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 16px 10px;\n  font-weight: bold;\n  align-items: center;\n  position: relative;\n}\n\n.topic-filter ion-col div.ar.selected:after {\n  right: 10px;\n  left: initial;\n}\n\n.topic-filter ion-col div.selected:after {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  background: #E94757;\n  border-radius: 4px;\n  bottom: 12px;\n  left: 10px;\n}\n\n.topic-list img {\n  margin-bottom: 12px;\n  border-radius: 10px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMvdG9waWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFJUTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURaOztBQU1RO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpaOztBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFRUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFOWjs7QUFPWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0FBTGhCOztBQVVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFSUjs7QUFVUTtFQUNJLGlCQUFBO0FBUlo7O0FBV1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBVFo7O0FBWUk7RUFDSSxlQUFBO0FBVlI7O0FBZUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWlI7O0FBY1E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBWlo7O0FBZW9CO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFieEI7O0FBa0JnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBaEJwQjs7QUF3Qkk7RUFDUSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FBckJaIiwiZmlsZSI6InNyYy9hcHAvdG9waWMvdG9waWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc2tlbGV0b24ge1xuICAgIC5kaW1nIHtcbiAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMnB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3RlZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAuaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZTY7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAmOjpwYXJ0KGltYWdlKXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGNvbG9yOiAjNUM2NzcwO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJlbW92ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59XG5cbi50b3BpYy1maWx0ZXIge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmLmFye1xuICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U5NDc1NztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9waWMtbGlzdCB7XG4gICAgaW1neyAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/topic/topic.page.ts":
/*!*************************************!*\
  !*** ./src/app/topic/topic.page.ts ***!
  \*************************************/
/*! exports provided: TopicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPage", function() { return TopicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");







let TopicPage = class TopicPage {
    constructor(menuCtrl, router, service, route, helperService) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.service = service;
        this.route = route;
        this.helperService = helperService;
        this.guest = false;
        this.filterTopicList = [];
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domain;
        this.favList = [];
        this.filter = 4;
        this.dummy = Array(2);
        this.enableSearch = false;
        this.searchTerm = "";
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
        }
        this.currentLang = this.helperService.getLang();
        this.filterOptions = [
            { name: 'All', name_ar: 'الجميع', id: 4 },
            { name: 'New', name_ar: 'جديد', id: 1 },
            { name: 'Top', name_ar: 'الاشّهر', id: 3 },
            { name: 'All Fav', name_ar: 'المفضلة', id: 2 }
        ];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.filterTopicList = [];
        this.filter = 4;
        this.dummy = Array(2);
        if (localStorage.getItem('currentUser')) {
            this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
        }
        this.route.queryParams.subscribe(_res => {
            if (_res.id) {
                this.selectedCat = JSON.parse(localStorage.getItem('selectedTopic'));
            }
            else {
                localStorage.removeItem('selectedTopic');
                delete this.selectedCat;
            }
        });
        if (this.filterTopicList.length == 0) {
            setTimeout(() => {
                // this.getNewTopics(true, '');
                this.getTopics(true, '');
            }, 100);
        }
    }
    ScrollToBottom() {
        setTimeout(() => {
            this.myContent.scrollToBottom(300);
        }, 100);
    }
    toggleMenu() {
        this.router.navigate(['/filter-subject']);
    }
    goToDetails(_id) {
        this.router.navigate(['/topic-details'], { queryParams: { id: _id } });
    }
    loadData(event) {
        debugger;
        switch (this.filter) {
            case 1:
                this.getNewTopics(false, event);
                break;
            case 2:
                //if (this.favList) {
                //   this.filterTopicList = this.favList;
                //   this.favList.forEach(_fav => {
                //     this.topicList.forEach(_topic => {
                //       if (_topic.id == _fav.id) {
                //         _topic.favorite = true;
                //         this.filterTopicList.push(_topic);
                //       }
                //     });
                //   });
                // }
                if (localStorage.getItem('currentUser')) {
                    this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
                }
                if (this.favList) {
                    this.filterTopicList = this.favList;
                    this.dummy = [];
                }
                else {
                    this.filterTopicList = [];
                    this.dummy = [];
                }
                event.target.complete();
                break;
            case 3:
                // this.filterTopicList = JSON.parse(JSON.stringify(this.topicList));
                // this.filterTopicList.sort((a, b) => a.visitedCounter - b.visitedCounter)
                this.getTopTopics(false, event);
                break;
            case 4:
                this.getTopics(false, event);
                break;
            default:
                break;
        }
    }
    loadSearch(event) {
        if (this.searchTerm.length > 0) {
            var from = this.searchList.length;
            var to = from + 10;
            var payload = 'q=' + this.searchTerm + '&startPage=' + from + '&pageSize=' + to;
            this.service.searchTopics(payload).subscribe(_res => {
                this.searchList = [...this.searchList, ..._res];
                event.target.complete();
            });
        }
        else {
            event.target.complete();
        }
    }
    getTopics(firstload, event) {
        var from = this.filterTopicList.length;
        var to = from + 10;
        var payload;
        if (this.selectedCat) {
            payload = 'cateId=' + this.selectedCat.id + '&startPage=' + from + '&pageSize=' + to + '&sort=false';
        }
        else {
            payload = 'startPage=' + from + '&pageSize=' + to + '&sort=false';
        }
        this.service.getAllTopics(payload).subscribe(_res => {
            this.helperService.hide();
            if (!firstload) {
                event.target.complete();
            }
            // if (this.selectedCat) {
            //   this.topicList = _res.filter(item => item.categories?.id == this.selectedCat.id);
            // } else {
            //   this.topicList = _res;
            // }
            //this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
            this.filterTopicList = [...this.filterTopicList, ..._res];
            this.dummy = [];
        });
    }
    getNewTopics(firstload, event) {
        if (firstload) {
            this.filterTopicList = [];
        }
        // var from = document.getElementsByClassName('topic-item').length;
        var from = this.filterTopicList.length;
        var to = (from + 1) + 10;
        var payload;
        if (this.selectedCat) {
            payload = 'cateId=' + this.selectedCat.id + '&startPage=' + from + '&pageSize=' + to;
        }
        else {
            payload = 'startPage=' + from + '&pageSize=' + to;
        }
        this.service.getNewTopics(payload).subscribe(_res => {
            if (!firstload) {
                event.target.complete();
            }
            // if (this.selectedCat) {
            //   this.topicList = _res.filter(item => item.categories?.id == this.selectedCat.id);
            // } else {
            //   this.topicList = _res;
            // }
            //this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
            this.filterTopicList = [...this.filterTopicList, ..._res];
            this.dummy = [];
        });
    }
    getTopTopics(firstload, event) {
        var from = this.filterTopicList.length;
        var to = (from + 1) + 10;
        var payload;
        if (this.selectedCat) {
            payload = 'cateId=' + this.selectedCat.id + '&startPage=' + from + '&pageSize=' + to;
        }
        else {
            payload = 'startPage=' + from + '&pageSize=' + to;
        }
        this.service.getTopTopics(payload).subscribe(_res => {
            if (!firstload) {
                event.target.complete();
            }
            // if (this.selectedCat) {
            //   this.topicList = _res.filter(item => item.categories?.id == this.selectedCat.id);
            // } else {
            //   this.topicList = _res;
            // }
            //this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
            this.filterTopicList = [...this.filterTopicList, ..._res];
            this.dummy = [];
        });
    }
    filterType(_id) {
        this.filterTopicList = [];
        this.dummy = this.dummy = Array(2);
        this.filter = _id;
        debugger;
        switch (this.filter) {
            case 1:
                this.getNewTopics(true, '');
                break;
            case 2:
                if (localStorage.getItem('currentUser')) {
                    this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
                }
                if (this.favList) {
                    this.filterTopicList = this.favList;
                    this.dummy = [];
                }
                else {
                    this.filterTopicList = [];
                    this.dummy = [];
                }
                break;
            case 3:
                // this.filterTopicList = JSON.parse(JSON.stringify(this.topicList));
                // this.filterTopicList.sort((a, b) => a.visitedCounter - b.visitedCounter)
                this.getTopTopics(true, '');
                break;
            case 4:
                this.getTopics(true, '');
                break;
            default:
                break;
        }
    }
    onSearch() {
        this.searchList = [];
        if (this.searchTerm) {
            var from = this.searchList.length;
            var to = from + 10;
            var payload = 'q=' + this.searchTerm + '&startPage=' + from + '&pageSize=' + to;
            this.service.searchTopics(payload).subscribe(_res => {
                this.searchList = [...this.searchList, ..._res];
            });
            //this.searchList = this.topicList.filter(element => (element.title.toLowerCase().includes(this.searchTerm.toLowerCase())) || (element.title_ar.toLowerCase().includes(this.searchTerm.toLowerCase())));
            // this.searchList = this.topicList.filter((group: any) => {
            //   if (group.title.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1) {
            //     return true;
            //   }
            //   let matches: any[] = group.sections.filter((item: any) => {
            //     //console.log(item.heading.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1 || item.description.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1)
            //     return item.heading.toLowerCase().lastIndexOf(this.searchTerm).toLowerCase() !== -1 || item.description.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1;
            //   });
            //   return matches.length > 0;
            // });
        }
        else {
            this.searchList = [];
        }
    }
    toggleSearch() {
        this.enableSearch = !this.enableSearch;
        this.searchTerm = '';
        this.searchList = [];
    }
    deleteCategory(_id) {
        this.helperService.show();
        this.service.deleteSelectedCategory(_id).subscribe(_res => {
            this.helperService.hide();
            this.helperService.showToast(this.helperService.translate('successfullyRemoved'), 'success', 'bottom');
            this.router.navigate(["/tabs/home"]);
        });
    }
    imgError(event) {
        event.srcElement.src = '/assets/no-image.svg';
    }
};
TopicPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] }
];
TopicPage.propDecorators = {
    myContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], static: false },] }]
};
TopicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./topic.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./topic.page.scss */ "./src/app/topic/topic.page.scss")).default]
    })
], TopicPage);



/***/ })

}]);
//# sourceMappingURL=topic-topic-module-es2015.js.map