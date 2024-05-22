import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { TopicFilterComponent } from '../common-component/topic-filter/topic-filter.component';
import { TopicImagesComponent } from '../common-component/topic-images/topic-images.component';
import { ApiService } from '../_services/api.service';
import { environment } from 'src/environments/environment';
import { HelperService } from '../_services/helper.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-symptoms-details',
  templateUrl: './symptoms-details.page.html',
  styleUrls: ['./symptoms-details.page.scss'],
})
export class SymptomsDetailsPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  details: any;
  path = environment.domain;
  favList: any;
  favFound: boolean;
  selectedId: any;
  confirm: any;
  sectionType: any = 'about';
  currentLang: any;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private service: ApiService,
    private helperService: HelperService,
    private translateService: TranslateService,
    private alertController: AlertController,
    private iab: InAppBrowser,
    private previewAnyFile: PreviewAnyFile,
    private route: ActivatedRoute) {
      this.currentLang = this.helperService.getLang();
    this.route.queryParams.subscribe(_res => {
      this.selectedId = _res.id;
      this.getSymptomById(this.selectedId);
    })
  }

  ngOnInit() {
  
  }

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: TopicFilterComponent,
      cssClass: 'transparent-modal',
      showBackdrop: false,
      componentProps: { details: this.details }
    });
    modal.onDidDismiss()
      .then((data) => {
        if(data.data.id){
        this.goToSection(data.data.id);
        }
      })
    return await modal.present();
  }

  async openImages(_images) {
    
    const modal = await this.modalCtrl.create({
      component: TopicImagesComponent,
      showBackdrop: false,
      componentProps: { details: _images }
    });
    return await modal.present();
  }

  goToSection(_id) {
    const yOffset = document.getElementById('detail' + _id).offsetTop;
    const yHOffset = document.getElementById('detail' + _id).offsetHeight;
    this.content.scrollToPoint(0, yOffset, 1000);
  }

  getSymptomById(_id) {
    this.service.getSymptomById(_id).subscribe(_res => {
      this.details = _res;
      this.details.sections.sort((a,b)=> a.indexing - b.indexing);
      this.details.sections.forEach(_item => {
        _item.medias.sort((a,b)=> a.indexing - b.indexing);
      });
      setTimeout(() => {
        var fig = document.querySelectorAll('figure.table');
        fig.forEach(_item => {
          var figth = _item.querySelectorAll('th');
          figth.forEach(_item2=>{
            _item2.style.minWidth = _item2.style.width;
          })
          var figtd = _item.querySelectorAll('td');
          figtd.forEach(_item3=>{
            _item3.style.minWidth = _item3.style.width;
          })
        });
      }, 100);
    })
  }

  openBrowser(_url){
    this.previewAnyFile.preview(this.path + _url)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }
}

