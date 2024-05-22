import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private profile = new Subject<any>();
  private chatTo: any;
  private filter = new Subject<any>();
  private farm: any;
  private notCount = new Subject<any>();
  private notify = new Subject<any>();
  path = environment.domain;

  constructor() { }

  publishProfile(data: any) {
    this.profile.next(data);
  }

  observProfile(): Subject<any> {
    return this.profile;
  }

  publishChatTo(data: any) {
    this.chatTo = data;
  }

  observChatTo() {
    return this.chatTo;
  }

  publishFilter(data: any) {
    this.filter.next(data);
  }

  observFilter(): Subject<any> {
    return this.filter;
  }

  publishFarm(data) {
    this.farm = data;
  }

  observFarm() {
    return this.farm;
  }

  publishNotiCount(data: any) {
    this.notCount.next(data);
  }

  observNotiCount(): Subject<any> {
    return this.notCount;
  }

  publishNoti(data: any) {
    this.notify.next(data);
  }

  observNoti(): Subject<any> {
    return this.notify;
  }

  chatService(){
    const jwtToken = (localStorage.getItem('token')) ? localStorage.getItem('token').replace('Bearer ', '') : '';
    let UrlBuilder = this.path + `/chatHub?authorization=${jwtToken}`;
    const connection = new signalR.HubConnectionBuilder()
                    .withUrl(UrlBuilder,
                    {
                        skipNegotiation: true ,
                        transport: signalR.HttpTransportType.WebSockets
                    }).build();
    return connection;
  }
  

}
