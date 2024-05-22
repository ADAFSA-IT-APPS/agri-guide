import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage {

  constructor(public modalCtrl: ModalController, public splashScreen: SplashScreen) { }

  ionViewDidEnter() {

    this.splashScreen.hide();

    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 100);

  }

}
