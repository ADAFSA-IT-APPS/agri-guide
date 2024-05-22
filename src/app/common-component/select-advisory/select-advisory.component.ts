import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-select-advisory',
  templateUrl: './select-advisory.component.html',
  styleUrls: ['./select-advisory.component.scss'],
})
export class SelectAdvisoryComponent implements OnInit {
  AdvisorList: any = [];
  type: any;
  selectedAdvisor: any;
  constructor(private service: ApiService, private modalCtrl: ModalController) { 
  }

  ngOnInit() {
    this.getAdvisors();
  }

  getAdvisors(){
    this.service.getAdvisors().subscribe(_res=>{
      if(this.type){
        debugger;
        this.AdvisorList = _res.data.filter(_advisor => _advisor.masterTag == this.type.toLowerCase());
      }else{
        this.AdvisorList = _res.data.filter(_advisor => _advisor.masterTag == 'plant');
      }
        
    })
  }

  dismiss(_type){
    if(_type == 'close'){
      this.modalCtrl.dismiss('', '0');
    }else{
      var advisor = this.AdvisorList.filter(_advisor => _advisor.id == this.selectedAdvisor);
      this.modalCtrl.dismiss(advisor, '1')
    }
  }
}
