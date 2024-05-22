import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../_services/api.service';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-scan-image',
  templateUrl: './scan-image.page.html',
  styleUrls: ['./scan-image.page.scss'],
})
export class ScanImagePage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  image = null;
  model;
  class_indices;
  prediction;
  predicted_class;
  class_idx;
  diseaseName: any;
  actualDiseaseName: any;
  matchingPercentage: any;
  loading: boolean = false;
  scanComplete: boolean = false;
  path = environment.domain;
  diseasesList: any = [];
  selectedCat: any;
  extraMessage: any;
  currentLang: any;
  guest: boolean = false;

  constructor(private actionSheetController: ActionSheetController,
    private camera: Camera,
    private service: ApiService,
    private router: Router,
    private helperService: HelperService,
    private route: ActivatedRoute,
    private nav: NavController,
    private alertController: AlertController) {
    this.currentLang = this.helperService.getLang();
    this.route.queryParams.subscribe(_res => {
      this.getCategory(_res.cid);
    })
  }

  ngOnInit() {
    this.selectImage();
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    } else {
      this.guest = false;
    }
  }

  getCategory(_id) {
    this.service.getCategoriesByID(_id).subscribe(_res => {
      this.selectedCat = _res;
    })
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

 async pickImage(sourceType) {
  this.camera.cleanup();
    var _self = this;
    const options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: false,
      saveToPhotoAlbum: false
    }
    // try {
      
		// 	this.image = `data:image/jpeg;base64,${await this.camera.getPicture(options)}`;
		// 	console.log(this.image);
		// } catch (_) {
		
		// }
      
    await _self.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        _self.image = 'data:image/jpeg;base64,' + imageData;
        //this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
        console.log('image', _self.image);
        this.camera.cleanup();
      }, (err) => {
        // Handle error
        alert(err);
      });
  }

  uploadImage(_base64) {
    var Payload = {
      fileContent: {
        "base64": _base64,
        "filename": "sample.jpeg"
      }
    };
    this.helperService.show();
    this.service.uploadChatImage(Payload).subscribe(_res => {
      this.helperService.hide();
      localStorage.setItem('scannedImage', JSON.stringify(_res));
      localStorage.setItem('selectedCat', JSON.stringify(this.selectedCat));
      if (this.extraMessage) {
        localStorage.setItem('extra', window.btoa(this.extraMessage.trim()));
      }
      if (this.selectedCat.advisor !== null) {
        this.router.navigate(['/conversation'], { queryParams: { name: this.selectedCat.advisor.name, id: this.selectedCat.advisor.id, isOnline: this.selectedCat.advisor.chatStatus, type: 'scanned' } })
      } else {
        this.helperService.showToast(this.helperService.translate('noAdvisorFound'), 'danger', 'bottom');
        this.helperService.hide();
      }
    })
  }

  async fetchData() {
    let response = await fetch('./assets/class_indices.json');
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
  }

  async getAiTags() {
    this.service.getAiTags().subscribe(_res => {

    })
  }

  // Initialize/Load model
  async initialize() {
    this.model = await tf.loadLayersModel('./assets/tensorflowjs-model/model.json');
  }

  async predict() {
    // Function for invoking prediction
    debugger;
    let img = document.getElementById('image') as HTMLImageElement;
    let offset = tf.scalar(255)
    let tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
    let tensorImg_scaled = tensorImg.div(offset)
    this.prediction = await this.model.predict(tensorImg_scaled).data();
    //this.fetchData().then((data) => {
    this.service.getAiTags().subscribe(data => {
      this.predicted_class = tf.argMax(this.prediction);
      this.class_idx = Array.from(this.predicted_class.dataSync())[0];
      let per = (this.prediction[this.class_idx] * 100).toString();
      this.matchingPercentage = parseFloat(per).toFixed(2);
      this.actualDiseaseName = data.filter(_item => _item.label == this.class_idx);
      this.actualDiseaseName = this.actualDiseaseName[0].name;
      this.diseaseName = this.actualDiseaseName.split('___')[1].replace(/_/g, ' ');
      // this.diseaseName = data[this.class_idx].split('___')[1].replace(/_/g, ' ');
      // this.actualDiseaseName = data[this.class_idx];

      setTimeout(() => {
        this.loading = false;
        this.scanComplete = true;
        this.getScanTopics();
      }, 1000);
    });
  }

  scrollToResult() {
    var yOffset = document.getElementById('proccess-data').offsetTop;
    this.content.scrollToPoint(0, yOffset, 1000);
  }

  back() {
    this.nav.navigateRoot(['/tabs/home']);
  }

  getScanTopics() {
    // .replace(/-/g, ' ');
    if (!this.guest && this.parseNumber(this.matchingPercentage) > 60) {
      this.service.scanImage(this.actualDiseaseName).subscribe(_res => {
        this.diseasesList = _res.result;
        console.log(this.diseasesList);
      })
    }
    setTimeout(() => {
      this.scrollToResult();
    }, 300);
  }

  upload(files: FileList) {
    let me = this;
    let file = files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      me.image = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  startScanning() {
    this.loading = true;
    this.initialize().then(() => {
      this.predict()
    })
  }

  diseaseDetails(id) {
    this.router.navigate(['/care-details'], { queryParams: { id } })
  }

  parseNumber(_num) {
    return parseInt(_num);
  }

  askAdvisory() {
    if (this.guest) {
      this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
    } else {
      this.uploadImage(this.image);
    }
  }

  async presentAlertPrompt() {
    var _self = this;
    if (!this.guest) {
      const alert = await this.alertController.create({
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

              this.extraMessage = data.message;
              this.askAdvisory();
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
    }
  }

}