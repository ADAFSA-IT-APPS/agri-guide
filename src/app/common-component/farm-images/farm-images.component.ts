import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HelperService } from 'src/app/_services/helper.service';

@Component({
  selector: 'app-farm-images',
  templateUrl: './farm-images.component.html',
  styleUrls: ['./farm-images.component.scss'],
})

export class FarmImagesComponent implements OnInit {
  details: any;
  path = environment.domain;
  currentLang: any;

  constructor(
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private helperService: HelperService
  ) {
    this.currentLang = this.helperService.getLang();
  }

  ngOnInit() {
    console.log(this.details);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  getSanitizeUrl(_url): SafeUrl {
    var splits = _url.split('/');
    var youtubeEmbed = "https://www.youtube.com/embed/"+splits[splits.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
  }
}