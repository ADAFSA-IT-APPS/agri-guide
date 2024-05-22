import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { HelperService } from 'src/app/_services/helper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss'],
})
export class EventSearchComponent implements OnInit {
  eventList: any = [];
  filterEvents: any = [];
  @Input() search: string;
  path = environment.domain;
  currentLang: any;

  constructor(private service: ApiService, 
    private router: Router,
    private helperService: HelperService) { 
      this.currentLang = this.helperService.getLang();
    }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.service.getEvents().subscribe(_res => {
      this.eventList = _res;
    })
  }

  ngOnChanges(changes: any) {
    console.log(changes.search.currentValue);
    if(changes.search.currentValue){
    this.filterEvents = this.eventList.filter(_item => _item.title.toLowerCase().includes(changes.search.currentValue.toLowerCase()) || _item.description.toLowerCase().includes(changes.search.currentValue.toLowerCase()));
  }else{
    this.filterEvents = [];
  }
}

goToEvent(id) {
  this.router.navigate(['/event-details'], { queryParams: { id } })
}
}
