(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-month-view-calendar-month-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-month-view/calendar-month-view.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-month-view/calendar-month-view.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCalendarMonthViewCalendarMonthViewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'events' | translate}}</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon color=\"secondary\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon color=\"secondary\" name=\"ic-notification\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" #content>\n  <app-weather></app-weather>\n  <ion-row class=\"ion-margin-top\">\n    <ion-col size=\"12\" *ngFor=\"let month of monthData\" class=\"ion-no-padding\">\n      <app-accordion [id]=\"getID(month.month+month.year)\" name=\"{{ month.month }} {{ month.year }}\"  calendarData=\"{{ stringifyData(month) }}\"\n        (change)=\"scrollTo($event)\">\n      </app-accordion>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/accordion/accordion.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/accordion/accordion.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentAccordionAccordionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"header\" (click)=\"toggleAccordion(this.calendarData, getID(name))\">\n  <div>\n    <h2 [ngClass]=\"calendarData.isOpen ? 'active' : 'inactive'\">\n      {{ name }}\n    </h2>\n    <div class=\"highlights\">\n      <div class=\"events\">\n        <ion-text>{{calendarData.length}} {{'events' | translate}}</ion-text>\n      </div>\n      <div class=\"highlight\">\n        <ion-text color=\"danger\">{{bugs.length}} {{'highlights' | translate }}</ion-text>\n      </div>\n    </div>\n  </div>\n  <div>\n    <ion-icon *ngIf=\"calendarData.isOpen\" name=\"chevron-up-outline\"></ion-icon>\n    <ion-icon *ngIf=\"!calendarData.isOpen\" name=\"chevron-down-outline\"></ion-icon>\n  </div>\n</div>\n<div [ngClass]=\"this.calendarData.isOpen ? 'active' : 'inactive'\">\n  <div class=\"pest-wrapper\" *ngIf=\"bugs.length > 0\">\n    <div>\n      <ion-text>{{'TheMostCommonPestOfThisMonth' | translate}}</ion-text>\n    </div>\n    <div>\n      <ion-list class=\"ion-padding-bottom\">\n        <ion-item class=\"ion-no-padding\" detail *ngFor=\"let item of bugs\" (click)=\"goToDetails(item.id)\">\n          <div class=\"pest-details\">\n            <img [src]=\"path + item.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n            <div>\n              <ion-label>{{currentLang == 'en' ? item.title : item.title_ar}}</ion-label>\n              <!-- <ion-text>{{item.}}</ion-text> -->\n            </div>\n          </div>\n        </ion-item>\n      \n      </ion-list>\n    </div>\n  </div>\n  <ng-container *ngIf=\"calendarData.length > 0 else noEvents\">\n  <div *ngFor=\"let item of calendarData\" class=\"month-details\">\n    <div class=\"sub-title\">\n      <span class=\"day\">{{getDay(fetchPropertyName(item))}}</span>\n      <span class=\"date\">{{getDate(fetchPropertyName(item))}}</span>\n    </div>\n    <div *ngFor=\"let itm of item[fetchPropertyName(item)]\" class=\"event-details\" (click)=\"goToEvent(itm.id)\">\n      <img [src]=\"path + itm.banner\" onError=\"this.src='./assets/no-image.svg'\"/>\n      <h3>{{ currentLang == 'en' ? itm.title : itm.title_ar }}</h3>\n      <p>{{ currentLang == 'en' ? itm.description : itm.description_ar }}</p>\n    </div>\n  </div>\n</ng-container>\n<ng-template #noEvents>\n  <div class=\"ion-padding\">\n    <ion-text>{{'noEventsFound' | translate}}</ion-text>\n  </div>\n</ng-template>\n</div>";
      /***/
    },

    /***/
    "./src/app/calendar-month-view/calendar-month-view-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/calendar-month-view/calendar-month-view-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CalendarMonthViewPageRoutingModule */

    /***/
    function srcAppCalendarMonthViewCalendarMonthViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarMonthViewPageRoutingModule", function () {
        return CalendarMonthViewPageRoutingModule;
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


      var _calendar_month_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calendar-month-view.page */
      "./src/app/calendar-month-view/calendar-month-view.page.ts");

      var routes = [{
        path: '',
        component: _calendar_month_view_page__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewPage"]
      }];

      var CalendarMonthViewPageRoutingModule = function CalendarMonthViewPageRoutingModule() {
        _classCallCheck(this, CalendarMonthViewPageRoutingModule);
      };

      CalendarMonthViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalendarMonthViewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/calendar-month-view/calendar-month-view.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/calendar-month-view/calendar-month-view.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CalendarMonthViewPageModule */

    /***/
    function srcAppCalendarMonthViewCalendarMonthViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarMonthViewPageModule", function () {
        return CalendarMonthViewPageModule;
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


      var _calendar_month_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calendar-month-view-routing.module */
      "./src/app/calendar-month-view/calendar-month-view-routing.module.ts");
      /* harmony import */


      var _calendar_month_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calendar-month-view.page */
      "./src/app/calendar-month-view/calendar-month-view.page.ts");
      /* harmony import */


      var _common_component_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common-component/accordion/accordion.component */
      "./src/app/common-component/accordion/accordion.component.ts");
      /* harmony import */


      var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common-component/common-component.module */
      "./src/app/common-component/common-component.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var CalendarMonthViewPageModule = function CalendarMonthViewPageModule() {
        _classCallCheck(this, CalendarMonthViewPageModule);
      };

      CalendarMonthViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"], _calendar_month_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthViewPageRoutingModule"]],
        declarations: [_calendar_month_view_page__WEBPACK_IMPORTED_MODULE_6__["CalendarMonthViewPage"], _common_component_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__["AccordionComponent"]]
      })], CalendarMonthViewPageModule);
      /***/
    },

    /***/
    "./src/app/calendar-month-view/calendar-month-view.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/calendar-month-view/calendar-month-view.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCalendarMonthViewCalendarMonthViewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\napp-accordion {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXItbW9udGgtdmlldy9jYWxlbmRhci1tb250aC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci1tb250aC12aWV3L2NhbGVuZGFyLW1vbnRoLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbmFwcC1hY2NvcmRpb257XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/calendar-month-view/calendar-month-view.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/calendar-month-view/calendar-month-view.page.ts ***!
      \*****************************************************************/

    /*! exports provided: CalendarMonthViewPage */

    /***/
    function srcAppCalendarMonthViewCalendarMonthViewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarMonthViewPage", function () {
        return CalendarMonthViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/api.service */
      "./src/app/_services/api.service.ts");

      var CalendarMonthViewPage = /*#__PURE__*/function () {
        function CalendarMonthViewPage(service) {
          _classCallCheck(this, CalendarMonthViewPage);

          this.service = service;
          this.monthData = [];
          this.monthData.forEach(function (_item) {
            _item.events.forEach(function (_item1) {
              var format = 'MM/dd/yyyy';
              var locale = 'en-US';
              _item1.startDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(_item1.startDate, format, locale);
              _item1.endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(_item1.endDate, format, locale);
            });
          });
        }

        _createClass(CalendarMonthViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEvents();
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            var _this = this;

            this.service.getCalendar().subscribe(function (_res) {
              _this.monthData = _res;
            });
          }
        }, {
          key: "getID",
          value: function getID(name) {
            return name.toLowerCase().replace(' ', '');
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(_ev) {
            var yOffset = document.getElementById(_ev);
            this.content.scrollToPoint(0, yOffset.parentElement.offsetTop, 1000);
          }
        }, {
          key: "stringifyData",
          value: function stringifyData(_data) {
            return JSON.stringify(_data);
          }
        }]);

        return CalendarMonthViewPage;
      }();

      CalendarMonthViewPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      CalendarMonthViewPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['content', {
            "static": false
          }]
        }]
      };
      CalendarMonthViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-calendar-month-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./calendar-month-view.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-month-view/calendar-month-view.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./calendar-month-view.page.scss */
        "./src/app/calendar-month-view/calendar-month-view.page.scss"))["default"]]
      })], CalendarMonthViewPage);
      /***/
    },

    /***/
    "./src/app/common-component/accordion/accordion.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/common-component/accordion/accordion.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonComponentAccordionAccordionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2.active {\n  color: var(--ion-color-primary);\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n.pest-details {\n  width: 100%;\n  display: flex;\n  padding: 10px 0;\n}\n.pest-details img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 8px;\n  border-radius: 12px;\n}\n.pest-details ion-label {\n  font-weight: bold;\n  margin-top: 8px;\n  overflow: hidden;\n  white-space: break-spaces;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.pest-details ion-text {\n  font-size: 0.8rem;\n}\n.header {\n  position: relative;\n  padding: 16px;\n  background: rgba(203, 216, 220, 0.5);\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header ion-icon {\n  font-size: 2rem;\n  color: #2C2F3A;\n}\n.header h2 {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n.header .highlights {\n  display: flex;\n  font-size: 12px;\n  margin-top: 10px;\n}\n.header .highlights .events {\n  border-right: 1px solid #5C6770;\n  margin-right: 8px;\n  padding-right: 8px;\n  color: #5C6770;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1.2em 0;\n  font-family: Verdana;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/* Following classes display/hide the 'menu'\n // based on the state change detection in the\n // component class */\ndiv.active {\n  display: block;\n  padding: 16px;\n}\ndiv.inactive {\n  display: none;\n}\n.month-details .event-details {\n  margin-top: 10px;\n}\n.month-details .event-details h3 {\n  margin-top: 8px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.month-details .sub-title {\n  background: var(--ion-color-primary) !important;\n  border-radius: 0 !important;\n  padding: 10px;\n  margin-bottom: 10px;\n  color: #5C6770;\n  font-size: 14px;\n  font-weight: 300;\n}\n.month-details .sub-title .day {\n  color: #fff;\n}\n.month-details img {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQU1BLGlEQUFBO0FBSko7QUFBSTtFQUNJLCtCQUFBO0FBRVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUFSO0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFESjtBQUVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUVJO0VBQ0ksaUJBQUE7QUFBUjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFDSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ1I7QUFDSTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUlBLHVEQUFBO0FBQ0E7RUFDSSx1QkFBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFEUjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0osdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFIQTtBQU1BOztxQkFBQTtBQUdBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtBQUhKO0FBT0k7RUFDSSxnQkFBQTtBQUpSO0FBS1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNaLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBSEE7QUFNSTtFQUNJLCtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSlI7QUFLUTtFQUNJLFdBQUE7QUFIWjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMUiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnQvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAvKiBEZWZpbmUgdGhlIHN0eWxlIHJ1bGVzIGZvciB0aGUgJ2Fycm93IGljb25zJyAqL1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxZW07XG4gICAgICAgIHRvcDogMS4yZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIH1cbn1cblxuLnBlc3QtZGV0YWlsc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG4gICAgaW9uLXRleHQge1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgIH1cbn1cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMDMgMjE2IDIyMCAvIC41KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgY29sb3I6ICMyQzJGM0E7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5ldmVudHMge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzVDNjc3MDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1QzY3NzA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIEhlcmUgd2UgZGVmaW5lIHRoZSBhY3R1YWwgJ21lbnUnIGFuZCBpdHMgJ29wdGlvbnMnICovXG4uaW1hZ2Utd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XG4gICAgd2lkdGg6IDIwJTtcblxuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuXG5cbnAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBtYXJnaW46IDAgMCAxLjJlbSAwO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5kaXNwbGF5OiAtd2Via2l0LWJveDtcbi13ZWJraXQtbGluZS1jbGFtcDogMztcbi13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXG4gLy8gYmFzZWQgb24gdGhlIHN0YXRlIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhlXG4gLy8gY29tcG9uZW50IGNsYXNzICovXG5kaXYuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5kaXYuaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb250aC1kZXRhaWxzIHtcbiAgICAuZXZlbnQtZGV0YWlsc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgaDN7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5kaXNwbGF5OiAtd2Via2l0LWJveDtcbi13ZWJraXQtbGluZS1jbGFtcDogMjtcbi13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN1Yi10aXRsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNUM2NzcwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIC5kYXl7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/common-component/accordion/accordion.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/common-component/accordion/accordion.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AccordionComponent */

    /***/
    function srcAppCommonComponentAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
        return AccordionComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_services/helper.service */
      "./src/app/_services/helper.service.ts");

      var AccordionComponent = /*#__PURE__*/function () {
        function AccordionComponent(router, helperService) {
          _classCallCheck(this, AccordionComponent);

          this.router = router;
          this.helperService = helperService;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domain;
          /**
           * @public
           * @property change
           * @type {EventEmitter}
           */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Determines and stores the accordion state (I.e. opened or closed)
           * @public
           * @property isMenuOpen
           * @type {boolean}
           */

          this.isMenuOpen = false;
          this.bugs = [];

          this.groupBy = function (array, key) {
            // Return the end result
            return array.reduce(function (result, currentValue) {
              // If an array already present for key, push it to the array. Else create an array and push the object
              (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue); // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate

              return result;
            }, {}); // empty object is the initial value for result object
          };

          this.currentLang = this.helperService.getLang();
        }

        _createClass(AccordionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.bugs = JSON.parse(this.calendarData).diseases;
            this.calendarData = JSON.parse(this.calendarData).events;
            var temp = this.groupBy(this.calendarData, 'startDateTime');
            this.calendarData = [];
            Object.keys(temp).forEach(function (item) {
              _this2.calendarData.push(_defineProperty({}, item, temp[item]));
            });
            this.calendarData.isOpen = false;
            console.log(this.calendarData);
          }
          /**
           * Allows the accordion state to be toggled (I.e. opened/closed)
           * @public
           * @method toggleAccordion
           * @returns {none}
           */

        }, {
          key: "toggleAccordion",
          value: function toggleAccordion(calendarData, id) {
            this.calendarData.forEach(function (element) {
              element.isOpen = false;
            });
            console.log(this.calendarData);
            calendarData.isOpen = !calendarData.isOpen;

            if (calendarData.isOpen) {
              this.change.emit(id);
            }
          }
          /**
           * Allows the value for the <ion-button> element to be broadcast to the parent component
           * @public
           * @method broadcastName
           * @returns {none}
           */

        }, {
          key: "broadcastName",
          value: function broadcastName(name) {
            this.change.emit(name);
          }
        }, {
          key: "getID",
          value: function getID(name) {
            return name.toLowerCase().replace(' ', '');
          }
        }, {
          key: "fetchPropertyName",
          value: function fetchPropertyName(_obj) {
            return Object.keys(_obj)[0];
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('MMMM DD yyyy');
          }
        }, {
          key: "getDay",
          value: function getDay(date) {
            return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('dddd : ');
          }
        }, {
          key: "goToDetails",
          value: function goToDetails(id) {
            this.router.navigate(['/care-details'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "goToEvent",
          value: function goToEvent(id) {
            this.router.navigate(['/event-details'], {
              queryParams: {
                id: id
              }
            });
          }
        }]);

        return AccordionComponent;
      }();

      AccordionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }];
      };

      AccordionComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        calendarData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AccordionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./accordion.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/accordion/accordion.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./accordion.component.scss */
        "./src/app/common-component/accordion/accordion.component.scss"))["default"]]
      })], AccordionComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=calendar-month-view-calendar-month-view-module-es5.js.map