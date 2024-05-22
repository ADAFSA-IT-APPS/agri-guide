import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HelperService } from 'src/app/_services/helper.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-topic-images',
  templateUrl: './topic-images.component.html',
  styleUrls: ['./topic-images.component.scss'],
})
export class TopicImagesComponent implements OnInit {
  details: any;
  path = environment.domain;
  currentLang: any;
  
  constructor(
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private helperService: HelperService,
    private previewAnyFile: PreviewAnyFile,
    private iab: InAppBrowser
    ) { 
      this.currentLang = this.helperService.getLang();
    }

  ngOnInit() {
    console.log(this.details);
    this.details.medias.forEach(_media => {
      if(_media.type.toLowerCase() === 'video'){
        _media.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed'+_media.url.substr( _media.url.lastIndexOf('/') ));
      }
    });
  }

  close(){
    this.modalCtrl.dismiss();
  }

  getSanitizeUrl(_url) {
    var youtubeEmbed = 'https://www.youtube.com/embed' + _url.substr(_url.lastIndexOf('/'));
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
  }

  openBrowser(_url){
    this.previewAnyFile.preview(this.path + _url)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }

}
