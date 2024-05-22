import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/_services/helper.service';

@Component({
  selector: 'app-topic-filter',
  templateUrl: './topic-filter.component.html',
  styleUrls: ['./topic-filter.component.scss'],
})
export class TopicFilterComponent implements OnInit {
  details: any;
  currentLang: any;
  constructor(private modalCtrl: ModalController, 
    private helperService: HelperService) {
    this.currentLang = this.helperService.getLang();
   }

  ngOnInit() {
    console.log(this.details);
  }

  close(_item){
    this.modalCtrl.dismiss({id: _item.targetId});
  }

}
