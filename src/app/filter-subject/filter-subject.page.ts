import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from '../_services/api.service';
import { HelperService } from '../_services/helper.service';
import { UtilService } from '../_services/util.service';
import { environment } from 'src/environments/environment';
import { CategoryTypesComponent } from '../common-component/category-types/category-types.component';

@Component({
  selector: 'app-filter-subject',
  templateUrl: './filter-subject.page.html',
  styleUrls: ['./filter-subject.page.scss'],
})
export class FilterSubjectPage implements OnInit {
  type: any;
  catList: any = [];
  subCatList: any = [];
  farming: any = [];
  agriculture: any = [];
  selectedCat: any;
  catDetails: any;
  selectedSubCat: any;
  dummy = Array(4);
  currentLang: string;
  path = environment.domain;
  guest: boolean = false;
  hasSubCat: boolean = false;
  hideHeader: boolean = false;

  constructor(private service: ApiService,
    private router: Router,
    private navController: NavController,
    private route: ActivatedRoute,
    private helperService: HelperService,
    private modalCtrl: ModalController,
    private util: UtilService) {
    this.currentLang = this.helperService.getLang();
    if (location.pathname.indexOf('tab-filter') != -1) {
      this.hideHeader = true;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    } else {
      this.guest = false;
    }
    this.getTopicCategories();
  }

  segmentChanged(_ev) {
    localStorage.setItem('catType', this.type);
  }

  selectItem(_item) {
    if (_item.subCategories.length != 0) {
      this.catDetails = _item; 
      this.subCatList = _item.subCategories;
      this.hasSubCat = true;
      this.selectedSubCat = null;
    } else {
      this.selectedSubCat = _item;
      this.goToHome();
      //this.subCatList = [];
      // if(this.hasSubCat){

      // }else{
      //   this.hasSubCat = false;
      // }
    }
  }

  back(){
    this.subCatList = [];
    this.hasSubCat = false;
    this.selectedSubCat = null;
  }

  getTopicCategories() {
    this.service.getTopicsCategory().subscribe(_res => {
      this.catList = _res;
      debugger;
      if (localStorage.getItem('catType')) {
        this.type = localStorage.getItem('catType');
      } else {
        this.type = this.catList[0].id;
      }
      this.agriculture = this.catList[0].categories;
      this.farming = this.catList[1].categories;
      this.dummy = [];
    })
  }

  goToHome() {
    this.helperService.show();
    if (this.guest) {
      this.navController.navigateRoot(['/tabs/home']);
      setTimeout(() => {
        this.goToTopics(this.selectedSubCat);
        //this.router.navigate(['/topic-details'], { queryParams: { id: this.selectedCat.id } });
        this.helperService.hide();
      }, 1000);
    } else {
      this.service.selectCategory(this.selectedSubCat.id).subscribe(_res => {
        this.util.publishProfile('update');
        this.navController.navigateRoot(['/tabs/home']);
        setTimeout(() => {
          this.goToTopics(this.selectedSubCat);
          //this.router.navigate(['/topic-details'], { queryParams: { id: this.selectedCat.id } });
          this.helperService.hide();
        }, 1000);
      })
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CategoryTypesComponent,
      cssClass: 'category-type-modal',
      componentProps: { category: this.catList }
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data) {
          this.type = data.data.id;
          this.selectedCat = this.catList.filter(_item => _item.id == this.type);
          this.selectedCat = this.selectedCat[0];
        }
      })
    return await modal.present();
  }

  goToTopics(item) {
    var payload = { id: item.id, name: item.name, name_ar: item.name_ar, icon: item.icon };
    localStorage.setItem('selectedTopic', JSON.stringify(payload))
    this.router.navigate(['/tabs/topic'], { queryParams: { id: item.id } });
  }

  onError(event) {
    event.srcElement.src = '/assets/no-image.svg';
  }
}