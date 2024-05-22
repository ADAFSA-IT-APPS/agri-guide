(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animal-symptoms-animal-symptoms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animal-symptoms/animal-symptoms.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animal-symptoms/animal-symptoms.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'symptoms' | translate}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'back' | translate}}\" color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"care-wrapper\">\n    <div class=\"inner-details\">\n      <ion-card *ngFor=\"let symptoms of animalSymptoms\">\n        <img [src]=\"path + symptoms.banner\" onError=\"this.src='./assets/no-image.svg'\"\n          (click)=\"symptomDetails(symptoms.id)\" />\n        <ion-card-content>\n          <div class=\"pest-foot\">\n            <ion-text (click)=\"symptomDetails(symptoms.id)\">{{currentLang == 'en' ? symptoms.title : symptoms.title_ar}}\n            </ion-text>\n            <!-- <ion-icon *ngIf=\"details.categories.advisor != null\" name=\"ic-chat\"\n              (click)=\"goToChat(details.categories.advisor)\"></ion-icon> -->\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <div class=\"ask-advisor-wrapper ion-padding\" *ngIf=\"!guest\">\n    <div class=\"main-heading\">\n      <ion-label class=\"ion-text-center\">\n        {{'CantFindExactSymptoms' | translate }}\n      </ion-label>\n    </div>\n    <div class=\"ask-advisor\" (click)=\"openModal()\">\n      <div>\n        <ion-icon name=\"ic-chat\" color=\"light\"></ion-icon>\n      </div>\n      <div class=\"details\">\n        <ion-label class=\"title\">\n          <h2>{{ 'askAdvisory' | translate }}</h2>\n        </ion-label>\n        <ion-text>{{ 'couldntFindRightSymptoms' | translate }}</ion-text>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/animal-symptoms/animal-symptoms-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/animal-symptoms/animal-symptoms-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AnimalSymptomsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSymptomsPageRoutingModule", function() { return AnimalSymptomsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _animal_symptoms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal-symptoms.page */ "./src/app/animal-symptoms/animal-symptoms.page.ts");




const routes = [
    {
        path: '',
        component: _animal_symptoms_page__WEBPACK_IMPORTED_MODULE_3__["AnimalSymptomsPage"]
    }
];
let AnimalSymptomsPageRoutingModule = class AnimalSymptomsPageRoutingModule {
};
AnimalSymptomsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnimalSymptomsPageRoutingModule);



/***/ }),

/***/ "./src/app/animal-symptoms/animal-symptoms.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/animal-symptoms/animal-symptoms.module.ts ***!
  \***********************************************************/
/*! exports provided: AnimalSymptomsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSymptomsPageModule", function() { return AnimalSymptomsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _animal_symptoms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal-symptoms-routing.module */ "./src/app/animal-symptoms/animal-symptoms-routing.module.ts");
/* harmony import */ var _animal_symptoms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal-symptoms.page */ "./src/app/animal-symptoms/animal-symptoms.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-component/common-component.module */ "./src/app/common-component/common-component.module.ts");









let AnimalSymptomsPageModule = class AnimalSymptomsPageModule {
};
AnimalSymptomsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _common_component_common_component_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentPageModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _animal_symptoms_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnimalSymptomsPageRoutingModule"]
        ],
        declarations: [_animal_symptoms_page__WEBPACK_IMPORTED_MODULE_6__["AnimalSymptomsPage"]]
    })
], AnimalSymptomsPageModule);



/***/ }),

/***/ "./src/app/animal-symptoms/animal-symptoms.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/animal-symptoms/animal-symptoms.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\nion-segment-button {\n  --indicator-height: 6px;\n  text-transform: uppercase;\n}\n\n.segment-button-checked {\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.care-wrapper img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.care-wrapper .pest-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.care-wrapper .pest-foot ion-icon {\n  font-size: 1.6rem;\n}\n\n.ask-advisor-wrapper .main-heading {\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n\n.ask-advisor-wrapper .ask-advisor {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  background: var(--ion-color-primary);\n}\n\n.ask-advisor-wrapper .ask-advisor ion-icon {\n  font-size: 52px;\n  width: 68px;\n}\n\n.ask-advisor-wrapper .ask-advisor .details h2 {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.ask-advisor-wrapper .ask-advisor .details ion-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWFsLXN5bXB0b21zL2FuaW1hbC1zeW1wdG9tcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURSOztBQUdRO0VBQ0ksaUJBQUE7QUFEWjs7QUFRSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMUjs7QUFRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQU5SOztBQU9RO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFMWjs7QUFRWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU5oQjs7QUFRWTtFQUNJLGVBQUE7QUFOaEIiLCJmaWxlIjoic3JjL2FwcC9hbmltYWwtc3ltcHRvbXMvYW5pbWFsLXN5bXB0b21zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZS13cmFwcGVyIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wZXN0LWZvb3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLmFzay1hZHZpc29yLXdyYXBwZXJ7XG4gICAgLm1haW4taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAvLyBjb2xvcjogIzcwNzA3MDtcbiAgICB9XG4gICAgLmFzay1hZHZpc29ye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHN7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/animal-symptoms/animal-symptoms.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/animal-symptoms/animal-symptoms.page.ts ***!
  \*********************************************************/
/*! exports provided: AnimalSymptomsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSymptomsPage", function() { return AnimalSymptomsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _common_component_select_advisory_select_advisory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-component/select-advisory/select-advisory.component */ "./src/app/common-component/select-advisory/select-advisory.component.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let AnimalSymptomsPage = class AnimalSymptomsPage {
    constructor(service, translateService, router, modalCtrl, helperService, alertController) {
        this.service = service;
        this.translateService = translateService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.helperService = helperService;
        this.alertController = alertController;
        this.animalSymptoms = [];
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].domain;
        this.guest = false;
        this.currentLang = this.helperService.getLang();
    }
    ngOnInit() {
        this.getSympotoms();
        if (localStorage.getItem('guest') == '1') {
            this.guest = true;
        }
    }
    getSympotoms() {
        this.service.getAnimalSymptoms().subscribe(_res => {
            this.animalSymptoms = _res.data;
        });
    }
    symptomDetails(id) {
        this.router.navigate(['/animal-symptoms-detail'], { queryParams: { id } });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _self = this;
            const modal = yield this.modalCtrl.create({
                component: _common_component_select_advisory_select_advisory_component__WEBPACK_IMPORTED_MODULE_6__["SelectAdvisoryComponent"],
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
                            }, 100);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AnimalSymptomsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AnimalSymptomsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animal-symptoms',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./animal-symptoms.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animal-symptoms/animal-symptoms.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./animal-symptoms.page.scss */ "./src/app/animal-symptoms/animal-symptoms.page.scss")).default]
    })
], AnimalSymptomsPage);



/***/ })

}]);
//# sourceMappingURL=animal-symptoms-animal-symptoms-module-es2015.js.map