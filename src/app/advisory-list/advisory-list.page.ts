import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SelectNewTopicComponent } from '../common-component/select-new-topic/select-new-topic.component';
import { ApiService } from '../_services/api.service';
import { HelperService } from '../_services/helper.service';
import { UtilService } from '../_services/util.service';

@Component({
  selector: 'app-advisory-list',
  templateUrl: './advisory-list.page.html',
  styleUrls: ['./advisory-list.page.scss'],
})
export class AdvisoryListPage implements OnInit {
  chatType: string = "message";
  path = environment.domain;
  
  public chatList: Array<any> = [
   
  ];
  public archiveList: Array<any> = [
    {
      user: { name: 'Salem Salamah', avatar: './assets/chat.png' },
      message: { snippet: 'agriculture advisor', count: 20, created: '09:00 AM', read: true }
    },
    {
      user: { name: 'Salem Salamah', avatar: './assets/chat.png' },
      message: { snippet: "animal advisor", created: '13:40 PM', read: true }
    }
  ];
  profileData: any;
  guest: boolean = false;

  constructor(private router: Router, 
    private service: ApiService, 
    private util: UtilService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private helperService: HelperService,
    private modalCtrl: ModalController) {

     }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url === '/tabs/chat'){
          this.getData();
        }
          
      }
    });
  }

  getData(){
    if(localStorage.getItem('guest') == '1'){
      this.guest = true;
      this.chatList = [];
    }else{
    this.getList();
    this.profileData = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  showConversation(_user) {
    this.util.publishChatTo(_user);
    if(_user.fromUsersId == this.profileData.usersId){
      this.router.navigate(['/conversation'],{queryParams:{name:_user.toUsername, id: _user.toUsersId, isOnline: _user.toChatStatus}});
    }else{
      this.router.navigate(['/conversation'],{queryParams:{name:_user.fromUsername, id: _user.fromUsersId, isOnline: _user.chatStatus}});
    }
  }

  getList() {
    this.service.getChatList().subscribe(_res => {
      this.chatList = _res;
    })
  }

  goLogin(){
    this.navCtrl.navigateRoot(['/adafsa-login']);
    // this.navCtrl.navigateRoot(['/member-login']);
  }

  doRefresh(event) {
    this.service.getChatList().subscribe(_res => {
      // this.chatList = _res.reverse();
      event.target.complete();
    })
  }

  async openModal() {
    //this.router.navigate(['add-new-address']);
    const modal = await this.modalCtrl.create({
      component: SelectNewTopicComponent,
      // cssClass: 'new-topic-modal',
      componentProps: {data: 'new'}
    });
    modal.onDidDismiss()
    .then((data) => {
      
    })
    return await modal.present();
  }

  openTelegram(_type){
    var Url;
    if(_type == '1'){
      Url = 'https://telegram.me/adafsaagriculture'
    }
    else if(_type == '2'){
      Url = 'https://telegram.me/adafsaanimalwealth'
    }
    else if(_type == '3'){
      Url = 'https://telegram.me/adafsafoodsafety'
    }
    window.open(Url, '_self')
  }

  openSocial(_type){
    var Url;
    if(_type == '1'){
      Url = 'https://facebook.com/adafsa.gov'
    }
    else if(_type == '2'){
      Url = 'https://youtube.com/adafsa_gov'
    }
    else if(_type == '3'){
      Url = 'https://www.snapchat.com/add/adafsa_gov'
    }
    else if(_type == '4'){
      Url = 'https://www.instagram.com/adafsa_gov/'
    }
    else if(_type == '5'){
      Url = 'https://twitter.com/adafsa_gov/'
    }
    window.open(Url, '_self')
  }

}
