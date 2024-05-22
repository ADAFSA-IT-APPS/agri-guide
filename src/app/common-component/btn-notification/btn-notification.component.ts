import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/_services/util.service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-btn-notification',
  templateUrl: './btn-notification.component.html',
  styleUrls: ['./btn-notification.component.scss'],
})
export class BtnNotificationComponent implements OnInit {
  count: any = 0;
  constructor(private util: UtilService, private router: Router,
    private modalCtrl: ModalController,
    private ngZone: NgZone) {
    if (localStorage.getItem('notifications')) {
      let filter = JSON.parse(localStorage.getItem('notifications'));
      filter = filter.forEach(element => element.additionalData?.type != 'chat' || !element.additionalData);
      this.count = JSON.parse(localStorage.getItem('notifications')).length;
    }
    this.util.observNotiCount().subscribe(_res => {
      this.ngZone.run(() => {
        this.count = _res;
      })
    })
  }

  ngOnInit() { }

  async notifications() {
    const modal = await this.modalCtrl.create({
      component: NotificationsComponent,
      cssClass: '',
      showBackdrop: false,
      componentProps: {}
    });

    return await modal.present();
  }

}