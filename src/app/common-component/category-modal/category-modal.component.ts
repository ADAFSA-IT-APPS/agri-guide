import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/_services/api.service';
import { HelperService } from 'src/app/_services/helper.service';
import { UtilService } from 'src/app/_services/util.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent implements OnInit {
  catList: any;
  filterCat: any = [];
  animal: any = [];
  selectedCat: any;
  dummy = Array(4);
  currentLang: any;
  path = environment.domain;
  hasSubCat: boolean = false;
  subCatList: any = [];
  catDetails: any;
  type: any;

  constructor(private service: ApiService,
    private helperService: HelperService,
    private modalCtrl: ModalController,
    private util: UtilService) {
    this.currentLang = this.helperService.getLang();
  }

  ngOnInit() {
    this.getTopicCategories();
    console.log('type', this.type);
  }

  getTopicCategories() {
    this.service.getTopicsCategory().subscribe(_res => {
      this.catList = _res;
      console.log('topicscategory', _res)
      // this.agriculture = this.catList[0].categoriesList;
      if (this.type == '1') {
        this.filterCat = this.catList.filter(_type => _type.type.trim().toLowerCase() == 'agriculture');
        this.filterCat = this.filterCat[0].categories;
      } else if (this.type == '2') {
        this.filterCat = this.catList.filter(_type => _type.masterTag.trim().toLowerCase() == 'animal');
        this.filterCat = this.filterCat[0].categories;
        // this.filterCat = this.catList[1].categories;
      }

      this.dummy = [];
    })
  }

  selectItem(_item) {
    if (_item.subCategories.length != 0) {
      this.catDetails = _item;
      this.subCatList = _item.subCategories;
      this.hasSubCat = true;
      this.selectedCat = null;
    } else {
      this.selectedCat = _item;
    }
  }

  back() {
    this.subCatList = [];
    this.hasSubCat = false;
    this.selectedCat = null;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submit() {
    if (this.selectedCat) {
      this.modalCtrl.dismiss({ cat: this.selectedCat, type: this.type });
    } else {
      this.helperService.showToast(this.helperService.translate('selectCategory'), 'danger', 'bottom');
    }

  }

  onError(event) {
    event.srcElement.src = './assets/no-image.svg';
  }

}
