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
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.page.html',
  styleUrls: ['./topic-details.page.scss'],
})
export class TopicDetailsPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  details: any;
  sectionType: any = 'about';
  pestDetails: any;
  path = environment.domain;
  favList: any;
  favFound: boolean;
  selectedId: any;
  confirm: any;
  currentLang: any;
  guest: boolean = false;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private service: ApiService,
    private helperService: HelperService,
    private translateService: TranslateService,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private previewAnyFile: PreviewAnyFile,
    private iab: InAppBrowser) {
      this.currentLang = this.helperService.getLang();
    this.route.queryParams.subscribe(_res => {
      this.selectedId = _res.id;
      this.getTopicById(this.selectedId);
      if(localStorage.getItem('guest') == '1'){
        this.guest = true;
      }else{
        setTimeout(() => {
            this.hitVisitor(this.selectedId);
        }, 1000);
      }
    })

    this.details = [{
      id: 1,
      name: "What you want Know ?",
      desc: "Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room. Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room.Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment.",
      images: ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png']
    }, {
      id: 2,
      name: "What you want Know ?",
      desc: "Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room. Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room.Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment.",
      images: ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png']
    }, {
      id: 3,
      name: "What you want Know ?",
      desc: "Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room. Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment. There's classy wooden flooring throughout while the traditional fireplace lends a cosy focal point to the living room.Slumber on a plush Eve memory foam mattress​ in the courtyard-facing bedroom of this characterful modernised period apartment.",
      images: ['./assets/img1.png', './assets/img2.png', './assets/img3.png', './assets/img4.png']
    }]

    this.pestDetails = [{
      name: 'Pest Name',
      image: './assets/pest1.png'
    },
    {
      name: 'Pest Name',
      image: './assets/pest2.png'
    },
    {
      name: 'Pest Name',
      image: './assets/pest1.png'
    },
    {
      name: 'Pest Name',
      image: './assets/pest2.png'
    }]
  }

  ngOnInit() {
    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 100);
    if (localStorage.getItem('currentUser')) {
      this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
      if (this.favList) {
        var fav = this.favList.filter(item => item!= null && item.id == this.selectedId);
        this.favFound = fav.length > 0 ? true : false;
      }
      else {
        this.favFound = false;
      }
    }
  }

  segmentChanged(_ev) {

  }

  goToChat(_user){
    if(this.guest){
      this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
    }else{
      var advisor = _user.subCategories ? _user.subCategories.advisor : _user.categories.advisor;
      this.router.navigate(['/conversation'],{ queryParams:{name: advisor.name, id: advisor.id, topicId: this.selectedId, isOnline: advisor.chatStatus}})
    }
  }

  async openFilter() {
    debugger;
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

  getTopicById(_id) {
    this.helperService.show();
    this.service.getTopicById(_id).subscribe(_res => {
      this.helperService.hide();
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
    }, error=>{
      this.helperService.hide();
    })
  }

  diseaseDetails(id){
    this.router.navigate(['/care-details'], {queryParams: {id}})
  }

  hitVisitor(_id) {
    this.service.visitorCount(_id).subscribe(_res => {

    })
  }

  addFavorite(_id) {
    if(this.guest){
      this.helperService.showToast(this.helperService.translate('featureNotAvailableForGuestUser'), 'danger', 'bottom');
    }else{
      this.service.addFavoriteTopic(_id).subscribe(_res => {
        this.helperService.show();
        this.getProfile('1');
      })
    }
  
  }

  getProfile(_type) {
    this.service.getProfile().subscribe(_res => {
      this.helperService.hide();
      localStorage.setItem('currentUser', JSON.stringify(_res));
      this.favList = _res.favouriteTopicsList;
      if (this.favList) {
        var fav = this.favList.filter(item => item != null && item.id == this.selectedId);
        this.favFound = fav.length > 0 ? true : false;
      }
      else {
        this.favFound = false;
      }
     
      if (_type == '1') {
        this.helperService.showToast(this.helperService.translate('successfullyAdded'), 'success', 'bottom');
      } else {
        this.helperService.showToast(this.helperService.translate('successfullyRemoved'), 'success', 'bottom')
      }
    })
  }

  async presentAlertConfirm() {
    var _self = this;
    var confirm = this.helperService.translate('confirm');
    
    const alert = await this.alertController.create({
      header: confirm,
      message: _self.helperService.translate("removeFavorite"),
      buttons: [
        {
          text: _self.helperService.translate('cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: _self.helperService.translate('okay'),
          handler: () => {
            console.log('Confirm Okay');
            _self.removeFavorite();
          }
        }
      ]
    });

    await alert.present();
  }

  removeFavorite() {
    this.service.deleteFavoriteTopic(this.selectedId).subscribe(_res => {
      this.helperService.show();
      this.getProfile('2');
    })
  }

  openBrowser(_url){
    console.log('pdf_url',this.path + _url)
    this.previewAnyFile.preview(this.path + _url)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
    //this.iab.create(this.path + _url);
  }

  getSanitizeUrl(_url): SafeUrl {
    var splits = _url.split('/');
    var youtubeEmbed = "https://www.youtube.com/embed/"+splits[splits.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
  }

}