import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ActionSheetController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HelperService } from '../_services/helper.service';
import { File } from '@ionic-native/file/ngx';
import { UtilService } from '../_services/util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

declare var google;
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {
  @ViewChild('map', { static: true }) mapEle: ElementRef;
  map: any;
  marker: any;
  lat: any;
  lng: any;
  address: any;
  farmImages: any = [];
  profileId: any;
  name: any;
  city: any;
  country: any;
  farmForm: FormGroup;
  params: any;
  observData: any;
  path = environment.domain;

  constructor(
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private diagnostic: Diagnostic,
    public geolocation: Geolocation,
    private router: Router,
    private file: File,
    private service: ApiService,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private util: UtilService,
    private helperService: HelperService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.farmForm = formBuilder.group({
      address: ['', Validators.required],
      title: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });

    this.route.queryParams.subscribe(_res => {
      this.params = _res;
      if(this.params.type == 'edit'){
        this.getFarmData();
      }else{
        this.getLocation();
      }
    });
  }

  ngOnInit() {
   
  }

  getFarmData(){
    this.observData = this.util.observFarm();
    console.log( this.observData);
    this.observData.gallery.forEach(_item => {
      var payload = {
        "Type": "Picture",
        "Title": "",
        "Title_ar": "",
        "fileContent": null,
        "Url": _item.url
      }
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
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
          result => console.log('Has permission?', result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
        );
        this.grantRequest();
      } else if (this.platform.is('ios')) {
        this.grantRequest();
      } else {
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
      } else {
        _self.city = addressArray[1];
        _self.farmForm.controls['city'].setValue(addressArray[1]);
      }
      _self.country = addressArray[addressArray.length - 1].trim();
      _self.farmForm.controls['country'].setValue(_self.country);
      _self.lat = lat;
      _self.lng = lng;
      _self.address = results[0].formatted_address;
      _self.loadmap(_self.lat, _self.lng, _self.mapEle)
    });
  }

  addMarker(location) {
    console.log('location =>', location)
    const icon = {
      url: 'assets/icon/marker.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
    }
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      draggable: true,
      animation: google.maps.Animation.DROP
    })
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
      } else {
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
      } else {
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
    const input = document.getElementById("map-input") as HTMLInputElement;
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
      } else {
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

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 70,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false
    }
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
      }
      this.farmImages.push(payload);
    }, (err) => {
      // Handle error
    });
  }

  upload(files: FileList) {
    let me = this;
    let file = files[0]
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
      }
      me.farmImages.push(payload);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  getFarmById(_id){
    this.service.farmById(_id).subscribe(_res=>{
      this.farmForm.patchValue(_res);
      this.lat = parseFloat(_res.lat);
      this.lng = parseFloat(_res.lng);
      this.getAddress(this.lat, this.lng);
    })
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
    if(this.params.type == 'edit'){
      this.service.editFarm(this.params.fid, payload).subscribe(_res => {
        this.helperService.showToast(this.helperService.translate('successfullyUpdated'), 'success', 'bottom');
        this.util.publishProfile('updated');
        this.helperService.hide();
        this.navCtrl.back();
      })
    }else{
      this.service.addFarm(payload).subscribe(_res => {
        this.helperService.showToast(this.helperService.translate('successfullyAdded'), 'success', 'bottom');
        this.util.publishProfile('updated');
        this.helperService.hide();
        this.navCtrl.back();
      })
    }
  }


}