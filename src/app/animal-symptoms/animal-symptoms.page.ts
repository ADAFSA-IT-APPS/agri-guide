import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { SelectAdvisoryComponent } from '../common-component/select-advisory/select-advisory.component';
import { HelperService } from '../_services/helper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-animal-symptoms',
  templateUrl: './animal-symptoms.page.html',
  styleUrls: ['./animal-symptoms.page.scss'],
})
export class AnimalSymptomsPage implements OnInit {
animalSymptoms: any = [];
extraMessage: any;
currentLang: any;
path = environment.domain;
guest: boolean = false;

  constructor(private service: ApiService, private translateService: TranslateService, private router: Router, private modalCtrl: ModalController, private helperService: HelperService, private alertController: AlertController) { 
    this.currentLang = this.helperService.getLang();
  }

  ngOnInit() {
    this.getSympotoms();
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    }
  }

  getSympotoms(){
    this.service.getAnimalSymptoms().subscribe(_res=>{
        this.animalSymptoms = _res.data;
    })
  }

  symptomDetails(id){
    this.router.navigate(['/animal-symptoms-detail'], {queryParams: {id}})
  }

  async openModal() {
    var _self = this;
    const modal = await this.modalCtrl.create({
      component: SelectAdvisoryComponent,
      cssClass: 'category-type-modal',
      componentProps: { type: 'animal' }
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.role == '1') {
          debugger;
              _self.presentAlertPrompt(data.data[0]);
        }
      })
    return await modal.present();
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
            _self.extraMessage = data.message;
            if (_self.extraMessage) {
              localStorage.setItem('extra', window.btoa(_self.extraMessage.trim()));
            }
            _self.router.navigate(['/tabs/home']);
            setTimeout(() => {
              _self.helperService.hide();
              _self.router.navigate(['/conversation'],{queryParams: { name: _data.name, id: _data.id, isOnline: _data.chatStatus, type: "animal" }});
            }, 100);
          }
        }
      ]
    });
    await alert.present();
  }

}
