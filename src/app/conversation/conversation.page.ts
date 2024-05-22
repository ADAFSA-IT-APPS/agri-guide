import { UtilService } from './../_services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, IonContent, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ApiService } from '../_services/api.service';
import { environment } from 'src/environments/environment';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { read: IonContent, static: false }) myContent: IonContent;
  propertyList: any = [];
  contactInfo: any = {
    name: 'Lisa',
  }
  path = environment.domain;
  myProfile: any;
  message: any;
  show: boolean = false;
  showOptions: boolean = false;
  chatServiceConnection: any;
  oldMsgs: any = [];

  public messages = [
  ];

  image: any = '';
  chatTo: any;
  currentLang: any;

  constructor(private camera: Camera, private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController, private photoViewer: PhotoViewer,
    private router: Router, private route: ActivatedRoute,
    private utilService: UtilService,
    private helperService: HelperService,
    private service: ApiService) {
    this.currentLang = this.helperService.getLang();
    //this.ScrollToBottom();
    this.route.queryParams.subscribe(_res => {
      this.chatTo = _res;
      this.getChatHistory();
      this.gtAdvisorById(this.chatTo.id, '1');
    })

    if (localStorage.getItem('currentUser')) {
      this.myProfile = JSON.parse(localStorage.getItem('currentUser'));
    }
  }



  ngOnInit() {
    let self = this; 
    this.chatServiceConnection = this.utilService.chatService();
    this.chatServiceConnection.start().then(function () {
      console.log('connected....');
      if (self.chatTo.topicId) {
        //self.sendMessage('image', selectedCat.name, data.scanImageUrl, null);
        // self.messages.push({ url: '', status: 'send', createdOn: new Date(), type: 'topic' })
        self.getTopicById(self.chatTo.topicId);
      }
      if (self.chatTo.type == 'scanned') {
        var data = JSON.parse(localStorage.getItem('scannedImage'));
        var selectedCat = JSON.parse(localStorage.getItem('selectedCat'));
        var extra = window.atob(localStorage.getItem('extra'));
        console.log(selectedCat);
        self.sendMessage('image', selectedCat.name, data.scanImageUrl, null);
        self.messages.push({ text: self.currentLang == 'en' ? selectedCat.name : selectedCat.name_ar, url: data.scanImageUrl, status: 'send', createdOn: new Date(), type: 'image' });
        setTimeout(() => {
          self.sendMessage('text', extra, null, null);
          self.messages.push({ text: extra, url: null, status: 'send', createdOn: new Date(), type: 'text' });
        }, 100);
        localStorage.removeItem('scannedImage');
        localStorage.removeItem('selectedCat');
        localStorage.removeItem('extra');
      }

      if (self.chatTo.type == 'animal') {
        var extra = window.atob(localStorage.getItem('extra'));
        self.messages.push({ text: extra, url: null, status: 'send', createdOn: new Date(), type: 'text' });
        self.sendMessage('text', extra, null, null);
        setTimeout(() => {
          localStorage.removeItem('extra');
        }, 100);
      }

    }).catch(function (err) {
      console.error(err.toString());
    });
    this.chatServiceConnection.on("ReceiveMessage", function (message) {
      (new Audio('./assets/music/tune.mp3')).play();
      //var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      self.messages.push({
        username: message.fromUser.name,
        text: message.message,
        type: message.media.type,
        createdOn: message.createdOn,
        status: 'received'
      });
      self.ScrollToBottom();
    });
  }

  ngAfterViewInit() {
    this.infiniteScroll.disabled = true;
  }

  gtAdvisorById(id, type){
      this.service.advisorById(id).subscribe(_res=>{
        let chatToObj = JSON.parse(JSON.stringify(this.chatTo));
        if(_res.data?.profilePic){
          if(type == '1'){
            chatToObj['profilePic'] = this.path + _res.data?.profilePic;
          }
          if(_res.data?.chatStatus){
            chatToObj['isOnline'] = _res.data?.chatStatus
          }
          this.chatTo = chatToObj;
        } else {
          chatToObj['profilePic'] = '';
          this.chatTo = chatToObj;
        }
     })
  }


  getChatHistory() {
    var payload = {
      "toUserId": this.chatTo.id,
      "pageFrom": 0,
      "pageSize": 10
    };
    this.helperService.show();
    this.service.getChatHistory(payload).subscribe(_res => {
      this.oldMsgs = _res;
      this.helperService.hide();
      this.oldMsgs.forEach(_item => {
        _item.reverse();
        _item.forEach(_itm => {
          if (_itm.fromUsersId == this.myProfile.usersId) {
            _itm.cstatus = 'send';
          } else {
            _itm.cstatus = 'received';
          }
        });
      });
      this.infiniteScroll.disabled = false;
      //event.target.disabled = true;
      this.ScrollToBottom();
    })
  }

  getTopicById(_id) {
    this.service.getTopicById(_id).subscribe(_res => {
      this.messages.push({ url: _res.banner, text: this.currentLang == 'en' ? _res.title : _res.title_ar, status: 'send', createdOn: new Date(), type: 'topic' });
      this.sendMessage('topic', 'Topic', '', _id);
      if (this.chatTo.type == 'newchat') {
        var extra = window.atob(localStorage.getItem('extra'));
        setTimeout(() => {
          this.messages.push({ text: extra, url: null, status: 'send', createdOn: new Date(), type: 'text' });
          this.sendMessage('text', extra, null, null);
        }, 100);
        localStorage.removeItem('extra');
      }
    })
  }

  ScrollToBottom() {
    setTimeout(() => {
      this.myContent.scrollToBottom(300);
    }, 100);
  }

  upload(files: FileList) {
    let me = this;
    let file = files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      me.image = reader.result;
      me.uploadImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  uploadImage(_base64) {
    var Payload = {
      fileContent: {
        "base64": _base64,
        "filename": "sample.jpeg"
      }
    };
    this.service.uploadChatImage(Payload).subscribe(_res => {
      this.sendMessage('image', null, _res.scanImageUrl, null);
      this.messages.push({ url: _res.scanImageUrl, status: 'send', createdOn: new Date(), type: 'image' })
    })
  }

  sendMsgType(_type) {
    switch (_type) {
      case 'text':
        var msg = this.message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if(msg){
          this.messages.push({ text: msg, status: 'send', createdOn: new Date(), type: 'text' });
        this.message = undefined;
        this.sendMessage('text', msg, null, null);
        }
        return;

      case 'image':

        return;

      case 'text':

        return;

      default:
        break;
    }
  }

  sendMessage(_type, _msg, _url, _topic) {
    var send = {
      "toUsersId": this.chatTo.id,
      "message": _msg,
      "transaction": "in",
      "media": {
        "type": _type,
        "url": _type == 'image' ? _url : null,
        "topicId": _topic ? _topic : null
      }
    }
    console.log('send', send);
    this.chatServiceConnection.invoke('Send2User', JSON.stringify(send)).catch((err) => {
      return console.error(err.toString());
    });
    this.ScrollToBottom();
    this.gtAdvisorById(this.chatTo.id, '2');
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      //this.image = 'data:image/jpeg;base64,' + imageData;
      var Payload = {
        fileContent: {
          "base64": 'data:image/jpeg;base64,' + imageData,
          "filename": "sample.jpeg"
        }
      };
      this.helperService.show();
      this.service.uploadChatImage(Payload).subscribe(_res => {
        this.helperService.hide();
        this.sendMessage('image', null, _res.scanImageUrl, null);
        this.messages.push({ url: _res.scanImageUrl, status: 'send', createdOn: new Date(), type: 'image' })
      })
      //this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      console.log('image', this.image);
    }, (err) => {
      // Handle error
    });
  }

  showPreview(_image) {

    const options = {
      share: false, // default is false
      closeButton: true, // default is true
      copyToReference: true, // default is false
      headers: "",  // If it is not provided, it will trigger an exception
      piccasoOptions: {} // If it is not provided, it will trigger an exception
    };
    this.photoViewer.show(decodeURIComponent(_image), '', options);
  }

  goToProfile() {
    this.router.navigate(['/agent-profile']);
  }

  loadData(event) {

    var payload = {
      "toUserId": this.chatTo.id,
      "pageFrom": document.getElementsByClassName('old-bubble').length,
      "pageSize": 10
    };

    this.service.getChatHistory(payload).subscribe(_res => {
      //this.oldMsgs = _res;
      event.target.complete();
      _res.forEach(_item => {
        _item.reverse();
        _item.forEach(_itm => {
          if (_itm.fromUsersId == this.myProfile.usersId) {
            _itm.cstatus = 'send';
          } else {
            _itm.cstatus = 'received';
          }
        });
      });
      this.oldMsgs.unshift(..._res);
      //event.target.disabled = true;

      if (document.getElementsByClassName('old-bubble').length < 1) {
        this.ScrollToBottom();
      }
    })
  }
}