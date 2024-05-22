import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/_services/helper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-types',
  templateUrl: './category-types.component.html',
  styleUrls: ['./category-types.component.scss'],
})
export class CategoryTypesComponent implements OnInit {

  category: any;
  path = environment.domain;
  currentLang: string;

  constructor(private modalCtrl: ModalController,
    private helperService: HelperService) {
    
  }

  ngOnInit() {
    this.currentLang = this.helperService.getLang();
    console.log(this.category, this.currentLang);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  selectCat(_id){
    this.modalCtrl.dismiss({id: _id});
  }

}
