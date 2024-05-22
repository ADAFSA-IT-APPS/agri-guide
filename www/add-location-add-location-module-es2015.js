(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-location-add-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" text=\"{{'back' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"params.type == 'edit'\">{{'editFarm' | translate}}</ion-title>\n    <ion-title *ngIf=\"params.type == 'new'\">{{'addFarm' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map-container\">\n    <input id=\"map-input\" type=\"text\" placeholder=\"Enter a location\" />\n    <div class=\"div_map\" #map></div>\n  </div>\n  <div class=\"farm-location\">\n    <form [formGroup]=\"farmForm\" novalidate>\n      <ion-item class=\"ion-margin-vertical\">\n        <ion-label position=\"stacked\" color=\"secondary\">{{\"location\" | translate}}</ion-label>\n        <ion-input placehoder=\"\" formControlName=\"address\" readonly></ion-input>\n      </ion-item>\n    <ion-item class=\"ion-margin-vertical\">\n      <ion-label position=\"stacked\" color=\"secondary\">{{\"farmName\" | translate}}</ion-label>\n      <ion-input placehoder=\"\" formControlName=\"title\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-vertical\">\n      <ion-label position=\"stacked\" color=\"secondary\">{{\"city\" | translate}}</ion-label>\n      <ion-input placehoder=\"\" formControlName=\"city\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-vertical\">\n      <ion-label position=\"stacked\" color=\"secondary\">{{\"country\" | translate}}</ion-label>\n      <ion-input placehoder=\"\" formControlName=\"country\"></ion-input>\n    </ion-item>\n  </form>\n  </div>\n  <div class=\"farm-images\">\n    <div class=\"ion-padding-horizontal\">\n      <!-- <input type=\"file\" name=\"uploadImage\" id=\"uploadImage\" (change)=\"upload($event.target.files)\"> -->\n      <ion-button class=\"ion-float-right\" size=\"sm\" color=\"secondary\" (click)=\"selectImage()\">{{'addImage' | translate}}</ion-button>\n    </div>\n    <ion-grid>\n      <ion-row class=\"w-100\">\n        <ion-col size=\"6\" *ngFor=\"let item of farmImages\">\n          <ion-img *ngIf=\"item.fileContent\" [src]=\"item.fileContent.base64\"></ion-img>\n          <ion-img *ngIf=\"!item.fileContent\" [src]=\"path + item.Url\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border\">\n    <ion-button expand=\"block\" (click)=\"addFarm()\">{{'save' | translate}}</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/add-location/add-location-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-location/add-location-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationPageRoutingModule", function() { return AddLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-location.page */ "./src/app/add-location/add-location.page.ts");




const routes = [
    {
        path: '',
        component: _add_location_page__WEBPACK_IMPORTED_MODULE_3__["AddLocationPage"]
    }
];
let AddLocationPageRoutingModule = class AddLocationPageRoutingModule {
};
AddLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/add-location/add-location.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-location/add-location.module.ts ***!
  \*****************************************************/
/*! exports provided: AddLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationPageModule", function() { return AddLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-location-routing.module */ "./src/app/add-location/add-location-routing.module.ts");
/* harmony import */ var _add_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-location.page */ "./src/app/add-location/add-location.page.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");











let AddLocationPageModule = class AddLocationPageModule {
};
AddLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _add_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddLocationPageRoutingModule"]
        ],
        providers: [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]],
        declarations: [_add_location_page__WEBPACK_IMPORTED_MODULE_6__["AddLocationPage"]]
    })
], AddLocationPageModule);



/***/ }),

/***/ "./src/app/add-location/add-location.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/add-location/add-location.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --ion-border-width: 0 !important;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.farm-images ion-img::part(image) {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.map-container {\n  position: relative;\n}\n\n.map-container .div_map {\n  height: 350px;\n  width: 100%;\n}\n\n.map-container #map-input {\n  width: calc(100% - 70px);\n  height: 40px;\n  border-radius: 10px;\n  position: absolute;\n  top: 10px;\n  z-index: 99;\n  right: 30px;\n  left: 10px;\n  border: 0;\n  padding-left: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWxvY2F0aW9uL2FkZC1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUlRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBRFo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKOztBQUtJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFIUjs7QUFNSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0taW9uLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4udy0xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmFybS1pbWFnZXMge1xuICAgIGlvbi1pbWcge1xuICAgICAgICAmOjpwYXJ0KGltYWdlKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1hcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5kaXZfbWFwIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI21hcC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiKDAgMCAwIC8gLjEpO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-location/add-location.page.ts":
/*!***************************************************!*\
  !*** ./src/app/add-location/add-location.page.ts ***!
  \***************************************************/
/*! exports provided: AddLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationPage", function() { return AddLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_services/util.service */ "./src/app/_services/util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");














let AddLocationPage = class AddLocationPage {
    constructor(platform, androidPermissions, diagnostic, geolocation, router, file, service, route, actionSheetController, camera, util, helperService, navCtrl, formBuilder) {
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.router = router;
        this.file = file;
        this.service = service;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.helperService = helperService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.farmImages = [];
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].domain;
        this.farmForm = formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
        });
        this.route.queryParams.subscribe(_res => {
            this.params = _res;
            if (this.params.type == 'edit') {
                this.getFarmData();
            }
            else {
                this.getLocation();
            }
        });
    }
    ngOnInit() {
    }
    getFarmData() {
        this.observData = this.util.observFarm();
        console.log(this.observData);
        this.observData.gallery.forEach(_item => {
            var payload = {
                "Type": "Picture",
                "Title": "",
                "Title_ar": "",
                "fileContent": null,
                "Url": _item.url
            };
            this.farmImages.push(payload);
        });
        this.farmForm.patchValue(this.observData);
        this.lat = parseFloat(this.observData.lat);
        this.lng = parseFloat(this.observData.lng);
        this.getAddress(this.lat, this.lng);
    }
    getLocation() {
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION));
                this.grantRequest();
            }
            else if (this.platform.is('ios')) {
                this.grantRequest();
            }
            else {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(this.lat, this.lng);
                    }
                });
            }
        });
    }
    getAddress(lat, lng) {
        var _self = this;
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'location': location }, (results, status) => {
            console.log(results);
            _self.farmForm.controls['address'].setValue(results[0].formatted_address);
            _self.address = results[0].formatted_address;
            var addressArray = _self.address.split('-');
            if (addressArray.length > 3) {
                _self.city = addressArray[2];
                _self.farmForm.controls['city'].setValue(addressArray[2]);
            }
            else {
                _self.city = addressArray[1];
                _self.farmForm.controls['city'].setValue(addressArray[1]);
            }
            _self.country = addressArray[addressArray.length - 1].trim();
            _self.farmForm.controls['country'].setValue(_self.country);
            _self.lat = lat;
            _self.lng = lng;
            _self.address = results[0].formatted_address;
            _self.loadmap(_self.lat, _self.lng, _self.mapEle);
        });
    }
    addMarker(location) {
        console.log('location =>', location);
        const icon = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50),
        };
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icon,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        this.getDragAddress(this.marker);
        google.maps.event.addListener(this.marker, 'dragend', () => {
            console.log(this.marker);
            this.getDragAddress(this.marker);
        });
    }
    getDragAddress(event) {
        var _self = this;
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(event.position.lat(), event.position.lng());
        geocoder.geocode({ 'location': location }, (results, status) => {
            _self.address = results[0].formatted_address;
            _self.farmForm.controls['address'].setValue(results[0].formatted_address);
            var addressArray = _self.address.split('-');
            if (addressArray.length > 3) {
                _self.city = addressArray[2];
                _self.farmForm.controls['city'].setValue(addressArray[2]);
            }
            else {
                _self.city = addressArray[1];
                _self.farmForm.controls['city'].setValue(addressArray[1]);
            }
            _self.country = addressArray[addressArray.length - 1].trim();
            _self.farmForm.controls['country'].setValue(_self.country);
            this.lat = event.position.lat();
            this.lng = event.position.lng();
        });
    }
    grantRequest() {
        this.diagnostic.isLocationEnabled().then((data) => {
            if (data) {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(resp.coords.latitude, resp.coords.longitude);
                    }
                });
            }
            else {
                this.diagnostic.switchToLocationSettings();
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                    if (resp) {
                        console.log('ress,', resp);
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(resp.coords.latitude, resp.coords.longitude);
                    }
                });
            }
        }, error => {
            this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
                if (resp) {
                    console.log('ress,', resp);
                    this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                    this.getAddress(resp.coords.latitude, resp.coords.longitude);
                }
            });
        }).catch(error => {
            console.log('error', error);
        });
    }
    loadmap(lat, lng, mapElement) {
        const location = new google.maps.LatLng(lat, lng);
        const input = document.getElementById("map-input");
        const autocomplete = new google.maps.places.Autocomplete(input);
        const style = [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];
        const mapOptions = {
            zoom: 15,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
        };
        this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        autocomplete.bindTo("bounds", this.map);
        var mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
        this.map.mapTypes.set('Foodfire5', mapType);
        this.map.setMapTypeId('Foodfire5');
        autocomplete.addListener("place_changed", () => {
            //marker.setVisible(false);
            const place = autocomplete.getPlace();
            this.addMarker(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
            let address = "";
            if (place.geometry.viewport) {
                this.map.fitBounds(place.geometry.viewport);
            }
            else {
                this.map.setCenter(place.geometry.location);
                this.map.setZoom(17); // Why 17? Because it looks good.
            }
            const mapOptions1 = {
                zoom: 19,
                scaleControl: false,
                streetViewControl: false,
                zoomControl: false,
                overviewMapControl: false,
                center: place.geometry.location,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
                }
            };
            this.map = new google.maps.Map(mapElement.nativeElement, mapOptions1);
            this.addMarker(place.geometry.location);
            if (place.address_components) {
                address = [
                    (place.address_components[0] &&
                        place.address_components[0].short_name) ||
                        "",
                    (place.address_components[1] &&
                        place.address_components[1].short_name) ||
                        "",
                    (place.address_components[2] &&
                        place.address_components[2].short_name) ||
                        "",
                ].join(" ");
            }
        });
        this.addMarker(location);
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
            quality: 70,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false
        };
        this.camera.getPicture(options).then((imageData) => {
            // base64 image data
            var image = 'data:image/jpeg;base64,' + imageData;
            var payload = {
                "Type": "Picture",
                "Title": "",
                "Title_ar": "",
                "fileContent": {
                    "base64": image,
                    "filename": "sample.jpeg"
                },
                "Url": ""
            };
            this.farmImages.push(payload);
        }, (err) => {
            // Handle error
        });
    }
    upload(files) {
        let me = this;
        let file = files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            //me.image = reader.result;
            var payload = {
                "Type": "Picture",
                "Title": "",
                "Title_ar": "",
                "fileContent": {
                    "base64": reader.result,
                    "filename": "sample.jpeg"
                },
                "Url": ""
            };
            me.farmImages.push(payload);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    getFarmById(_id) {
        this.service.farmById(_id).subscribe(_res => {
            this.farmForm.patchValue(_res);
            this.lat = parseFloat(_res.lat);
            this.lng = parseFloat(_res.lng);
            this.getAddress(this.lat, this.lng);
        });
    }
    addFarm() {
        this.helperService.show();
        var payload = {
            "ProfilesId": this.params.id,
            "Title": this.farmForm.value.title,
            "Lat": this.lat,
            "Lng": this.lng,
            "Address": this.farmForm.value.address,
            "City": this.farmForm.value.city,
            "State": this.farmForm.value.city,
            "Country": this.farmForm.value.country,
            "Gallery": this.farmImages
        };
        if (this.params.type == 'edit') {
            this.service.editFarm(this.params.fid, payload).subscribe(_res => {
                this.helperService.showToast(this.helperService.translate('successfullyUpdated'), 'success', 'bottom');
                this.util.publishProfile('updated');
                this.helperService.hide();
                this.navCtrl.back();
            });
        }
        else {
            this.service.addFarm(payload).subscribe(_res => {
                this.helperService.showToast(this.helperService.translate('successfullyAdded'), 'success', 'bottom');
                this.util.publishProfile('updated');
                this.helperService.hide();
                this.navCtrl.back();
            });
        }
    }
};
AddLocationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_2__["Diagnostic"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] }
];
AddLocationPage.propDecorators = {
    mapEle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['map', { static: true },] }]
};
AddLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location/add-location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-location.page.scss */ "./src/app/add-location/add-location.page.scss")).default]
    })
], AddLocationPage);



/***/ })

}]);
//# sourceMappingURL=add-location-add-location-module-es2015.js.map