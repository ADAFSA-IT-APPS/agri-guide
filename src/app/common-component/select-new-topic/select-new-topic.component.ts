import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/_services/api.service';
import { HelperService } from 'src/app/_services/helper.service';
import { UtilService } from 'src/app/_services/util.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-new-topic',
  templateUrl: './select-new-topic.component.html',
  styleUrls: ['./select-new-topic.component.scss'],
})
export class SelectNewTopicComponent implements OnInit {
  topicList: any = [];
  filterTopicList: any = [];
  catList: any = [];
  agriculture: any = [];
  dummy = Array(4);
  currentLang: any;
  topic: any;
  selectedCat: any = '';
  selectedSubCat: any = '';
  selectedType: any = '';
  selectedTopic: any = '';
  selectedAdvisor: any;
  extraMessage: any;
  hasSubCat: boolean = false;
  subCatList: any = [];
  step = 1;
  path = environment.domain;
  advisorDetails: any;
  
  @ViewChild('message') messageText ;
  constructor(private service: ApiService,
    private helperService: HelperService,
    private modalCtrl: ModalController,
    private router: Router,
    private alertController: AlertController,
    private util: UtilService) {
    this.currentLang = this.helperService.getLang();
  }

  ngOnInit() {
    this.getTopicCategories();
  }

  getTopicCategories() {
    this.helperService.show();
    this.service.getTopicsCategory().subscribe(_res => {
      console.log('close');
      this.helperService.hide();
      this.catList = _res.filter(item => item.type.toLowerCase() != 'none');
      if (this.selectedType) {
        this.agriculture = _res.filter(item => item.id == this.selectedType);
        this.agriculture = this.agriculture[0].categories;
      } else {
        this.selectedType = this.catList[0].id;
      }
    })
  }

  getTopics(_id) {
    this.helperService.show();
    var payload = payload = 'cateId=' + _id + '&startPage=0&pageSize=1000&sort=false';
    this.service.getAllTopics(payload).subscribe(_res => {
      this.helperService.hide();
      this.filterTopicList = _res;
    });
    // this.service.getTopics().subscribe(_res => {
    //   this.helperService.hide();
    //   if (_id) {
    //     this.topicList = _res.filter(item => item.categories?.id == _id);
    //   } else {
    //     this.topicList = _res;
    //   }
    //   this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);

    // })
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  typeChange(_ev) {
    this.step = 1;
    this.getTopicCategories();
    this.selectedCat = '';
    this.selectedTopic = '';
  }

  catChange(_type, _cat) {

    if (_type == '2') {
      this.selectedSubCat = _cat.id;
      this.getTopics(this.selectedSubCat);
      this.selectedTopic = '';
      this.step = 3;
    } else {
      this.selectedCat = _cat.id;
      var subCat = new Array();
      subCat = this.agriculture.filter(_item => _item.id == this.selectedCat)
      subCat = subCat[0];
      this.step = 2;
      if (subCat['subCategories'].length > 0) {
        this.hasSubCat = true;
        this.subCatList = subCat['subCategories'];
        console.log(this.subCatList);
      } else {
        this.hasSubCat = false;
        this.subCatList = [];
        this.step = 3;
        this.getTopics(this.selectedCat);
        this.selectedTopic = '';
      }
    }
  }

  submit() {
    // if (this.selectedCat == '' || this.selectedTopic == '' || this.selectedType == '') {
    //   this.helperService.showToast(this.helperService.translate('selectAllTheFields'), 'danger', 'bottom');
    //   return;
    // }
    // this.getCategory(this.selectedSubCat == '' ? this.selectedCat : this.selectedSubCat);
    if (this.extraMessage) {
      localStorage.setItem('extra', window.btoa(this.extraMessage.trim()));
    }
    this.modalCtrl.dismiss();
    this.router.navigate(['/conversation'], { queryParams: { name: this.advisorDetails.advisor.name, id: this.advisorDetails.advisor.id, topicId: this.selectedTopic, isOnline: this.advisorDetails.advisor.chatStatus, type: "newchat" } });
    //this.router.navigate(['/conversation'],{queryParams:{name:_user.name, id: _user.id, topicId: this.selectedTopic, isOnline: _user.chatStatus}})
  }

  getCategory(_id) {
    this.helperService.show();
    this.service.getCategoriesByID(_id).subscribe(_res => {
      if (_res.advisor === null) {
        this.helperService.showToast(this.helperService.translate('noAdvisorFound'), 'danger', 'bottom');
        this.helperService.hide();
      } else {
        // this.presentAlertPrompt(_res);
        this.helperService.hide();
        // this.modalCtrl.dismiss();
        this.advisorDetails = _res;
        this.step = 4;
        setTimeout(() => {
          this.messageText.setFocus();
        },100);
      }

    })
  }

  async presentAlertPrompt(data) {
    var _self = this;
    var _data = data;
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
            if (this.extraMessage) {
              localStorage.setItem('extra', window.btoa(this.extraMessage.trim()));
            }
            this.router.navigate(['/conversation'], { queryParams: { name: _data.advisor.name, id: _data.advisor.id, topicId: this.selectedTopic, isOnline: _data.advisor.chatStatus, type: "newchat" } });
          }
        }
      ]
    });
    await alert.present();
  }

  goToMessage(_topic) {
    this.selectedTopic = _topic.id;
    if (this.selectedCat == '' || this.selectedTopic == '' || this.selectedType == '') {
      this.helperService.showToast(this.helperService.translate('selectAllTheFields'), 'danger', 'bottom');
      return;
    }
    this.getCategory(this.selectedSubCat == '' ? this.selectedCat : this.selectedSubCat);
  }

  goBack() {
    if (this.step > 1) {
      if (this.hasSubCat == false && this.step == 3) {
        this.step = 1;
      } else {
        this.step -= 1;
      }
    }
  }

}