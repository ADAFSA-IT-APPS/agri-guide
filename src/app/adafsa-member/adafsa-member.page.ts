import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adafsa-member',
  templateUrl: './adafsa-member.page.html',
  styleUrls: ['./adafsa-member.page.scss'],
})
export class AdafsaMemberPage implements OnInit {
  state: any = '1';
  constructor() { }

  ngOnInit() {
  }

  sendOTP(){
    this.state = '2';
  }

}
