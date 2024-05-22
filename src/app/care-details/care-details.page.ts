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
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-care-details',
  templateUrl: './care-details.page.html',
  styleUrls: ['./care-details.page.scss'],
})
export class CareDetailsPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  details: any;
  path = environment.domain;
  favList: any;
  favFound: boolean;
  selectedId: any;
  confirm: any;
  sectionType: any = 'about';
  currentLang: any;
  from: any;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private service: ApiService,
    private helperService: HelperService,
    private translateService: TranslateService,
    private alertController: AlertController,
    private iab: InAppBrowser,
    private previewAnyFile: PreviewAnyFile,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
      this.currentLang = this.helperService.getLang();
    this.route.queryParams.subscribe(_res => {
      this.selectedId = _res.id;
      this.from = _res.from;
      this.getDiseaseById(this.selectedId);
    })
  }

  ngOnInit() {
  
  }

  diseaseDetails(id){
    this.router.navigate(['/treatment-details'], {queryParams: {id}})  
  }

  symptomDetails(id){
    this.router.navigate(['/symptom-details'], {queryParams: {id}})
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

  getDiseaseById(_id) {
    this.service.getDiseaseById(_id).subscribe(_res => {
      this.details = _res;
      this.details.sections.sort((a,b)=> a.indexing - b.indexing);
      this.details.sections.forEach(_item => {
        var parser = new DOMParser();
	      var doc = parser.parseFromString(this.currentLang == 'en' ? _item.description : _item.description_ar, 'text/html');
        var oEmb = doc.getElementsByTagName('oembed');
        for(var oe = 0; oe < oEmb.length; oe++){
          var oEmbObj = oEmb[oe];
          const vURL =  oEmbObj.getAttribute('url');
          var viframe = document.createElement("iframe");
          viframe.src = 'https://www.youtube.com/embed' + vURL.substr(vURL.lastIndexOf('/'));
          viframe.height = '300px';
          viframe.width = '100%';
          oEmbObj.parentNode.appendChild(viframe);
          oEmbObj.remove();
        }
        
        if(this.currentLang == 'en'){
          _item.description =doc.body.innerHTML;
        }else{
          _item.description_ar =doc.body.innerHTML;
        }

        _item.medias.sort((a,b)=> a.indexing - b.indexing);
        _item.medias.forEach(_media => {
          if(_media.type.toLowerCase() === 'video'){
            _media.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed'+_media.url.substr( _media.url.lastIndexOf('/') ));
          }
        });
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

  getYoutubeID(_url){
    console.log('https://www.youtube.com/embed'+_url.substr( _url.lastIndexOf('/') ));
    return this.sanitizer.bypassSecurityTrustUrl('https://www.youtube.com/embed'+_url.substr( _url.lastIndexOf('/') ));
  }
}

