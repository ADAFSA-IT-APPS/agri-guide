import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/_services/util.service';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notificationList: any;
  constructor(private router: Router, private modalCtrl: ModalController, private alertCtrl: AlertController, 
    private util: UtilService,
    private helperService: HelperService) {
    if(JSON.parse(localStorage.getItem('notifications'))){
      this.notificationList = JSON.parse(localStorage.getItem('notifications'));
    }else{
      this.notificationList = [];
    }
  }

  ngOnInit() {
  }

  goToDetails(_data) {
    switch (_data.type) {
      case 'topic':
        this.router.navigate(['/topic-details'], { queryParams: { id: _data.id } });
        setTimeout(() => {
        this.modalCtrl.dismiss();  
        }, 100);
        
        break;

      case 'event':
        this.router.navigate(['/event-details'], { queryParams: { id: _data.id } });
        setTimeout(() => {
        this.modalCtrl.dismiss();  
        }, 100);
        break;

        case 'chat':
          this.router.navigate(['/tabs/chat']);
           setTimeout(() => {
              this.modalCtrl.dismiss();  
        }, 100);
        break;

      default:
        break;
    }
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async clear() {
    var _self = this;
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: _self.helperService.translate("confirm"),
      message: _self.helperService.translate("clearNotification"),
      buttons: [
        {
          text: _self.helperService.translate("no"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: _self.helperService.translate("yes"),
          handler: () => {
            localStorage.removeItem('notifications');
            this.notificationList = [];
            this.util.publishNotiCount(0);
          }
        }
      ]
    });

    await alert.present();
  }

}
