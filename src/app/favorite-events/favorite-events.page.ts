import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../_services/api.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { UtilService } from '../_services/util.service';

@Component({
  selector: 'app-favorite-events',
  templateUrl: './favorite-events.page.html',
  styleUrls: ['./favorite-events.page.scss'],
})
export class FavoriteEventsPage implements OnInit {
  profileData: any;
  path = environment.domain;
  guest: boolean = false;

  constructor(private service: ApiService,
    private menuCtrl: MenuController,
    private util: UtilService,
    private router: Router) {
      if(localStorage.getItem('guest') == '1'){
        this.guest = true;
      }else{
    this.util.observProfile().subscribe(data => {
      this.getProfile();
    });
    if (!localStorage.getItem('currentUser')) {
      this.getProfile();
    } else {
      this.profileData = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    if(localStorage.getItem('guest') == '1'){
      this.guest = true;
    }else{
    this.getProfile();
    }
  }

  goToEvent(id) {
    this.router.navigate(['/event-details'], { queryParams: { id } })
  }

  getProfile() {
    this.service.getProfile().subscribe(_res => {
      localStorage.removeItem('currentUser');
      this.profileData = _res;
      localStorage.setItem('currentUser', JSON.stringify(_res));
    }, error => {

    })
  }
}