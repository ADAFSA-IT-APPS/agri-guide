import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.page.html',
  styleUrls: ['./calendar-month-view.page.scss'],
})
export class CalendarMonthViewPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  monthData: any = [];
  constructor(private service: ApiService) {
    this.monthData.forEach(_item => {
      _item.events.forEach(_item1 => {
        const format = 'MM/dd/yyyy';
        const locale = 'en-US';
        _item1.startDate = formatDate(_item1.startDate, format, locale);
        _item1.endDate = formatDate(_item1.endDate, format, locale);
      });
    });
   }

  ngOnInit() {
    this.getEvents();
  }

  
  getEvents(){
    this.service.getCalendar().subscribe(_res=>{
          this.monthData = _res;
    })
  }

  getID(name){
    return name.toLowerCase().replace(' ','');
  }

  scrollTo(_ev){
    var yOffset = document.getElementById(_ev);
    this.content.scrollToPoint(0, yOffset.parentElement.offsetTop, 1000);  
  }
  
  stringifyData(_data){
    return JSON.stringify(_data);
  }
}
