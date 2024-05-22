import { CalendarComponent } from 'ionic2-calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID, ElementRef } from '@angular/core';
import { AlertController, IonSlides, MenuController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { TopicFilterComponent } from '../common-component/topic-filter/topic-filter.component';
import { UtilService } from '../_services/util.service';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  path = environment.domain;
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  selectedMonth;
  selectedYear;
  //@ViewChild('sliderRef', { static: true }) protected slides: ElementRef<IonSlides>;
  @ViewChild('slides') ionSlides: IonSlides;
  activeId: any = 0;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 4,
    breakpoints: {
      640: {
        slidesPerView: 1,
        // spaceBetween: 20,
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 4,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 4,
        // spaceBetween: 50,
      },

    }
  };

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
  filterBy: any = "all";
  minDate = new Date().toISOString();
  eventList: any = [];
  filterEventList: any = [];
  eventSource: any = [
      // {
      //   id: 1,
      //   title: 'Event1',
      //   startTime: new Date('2020-12-01T18:00:00'),
      //   endTime: new Date('2020-12-01T18:00:00'),
      //   desc: 'Event'
      // },
    // {
    //   id: 2,
    //   title: 'Event1',
    //   startTime: new Date('2020-12-01T18:00:00'),
    //   endTime: new Date('2020-12-18T18:00:00'),
    //   desc: 'Event'
    // }
    // {
    //   id: 2,
    //   title: 'Event2',
    //   startTime: new Date('12/10/2020 10:00'),
    //   endTime: new Date('12/10/2020 20:00'),
    //   desc: 'Event'
    // },
    // {
    //   id: 3,
    //   title: 'Event3',
    //   startTime: new Date('12/20/2020 8:00'),
    //   endTime: new Date('12/20/2020 12:00'),
    //   desc: 'Event'
    // },
    // {
    //   id: 4,
    //   title: 'Event4',
    //   startTime: new Date('12/22/2020 14:00'),
    //   endTime: new Date('12/22/2020 18:00'),
    //   desc: 'Event'
    // }
  ];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  searchTerm: string = '';
  enableSearch: boolean = false;
  currentLang: any;
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private router: Router,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private service: ApiService,
    private helperService: HelperService,
    private util: UtilService) {
      this.currentLang = this.helperService.getLang();
     }

  ngOnInit() {
    //this.getEventsByDate();
    this.util.observFilter().subscribe(_res=>{
      this.filterBy = _res;
      this.getEventsByDate(this.selectedMonth, this.selectedYear);
    })
  }

  getEventsByDate(month, year) {
    var _self = this;
    _self.service.getEventsByDate(month, year).subscribe(_res => {
      _self.eventList = _res;
      _self.eventSource = [];
      _self.filterEventList = [];
      _self.eventList.forEach(_item => {
        
        if(_self.filterBy.toLowerCase() == _item.topicTypes?.type.toLowerCase()){
          _self.filterEventList.push(_item);
          _self.eventSource.push({ id: 1, title: _item.title, startTime: new Date(_item.startDateTime), endTime: new Date(_item.endDateTime), desc: _item.description })
        }
        // else if(_self.filterBy == 'farm'  && _item.topicTypes?.type == "Farming"){
        //   _self.filterEventList.push(_item);
        //   _self.eventSource.push({ id: 1, title: _item.title, startTime: new Date(_item.startDateTime), endTime: new Date(_item.endDateTime), desc: _item.description })
        // }
        else if(_self.filterBy == 'all'){
          _self.filterEventList.push(_item);
          _self.eventSource.push({ id: 1, title: _item.title, startTime: new Date(_item.startDateTime), endTime: new Date(_item.endDateTime), desc: _item.description })
        }
      });
      _self.myCal.loadEvents();
      console.log('eventSource', this.eventSource);
    })
    
  }

  getEvents() {
    this.service.getCalendar().subscribe(_res => {

    })
  }


  slideChanged(e: any) {
    this.ionSlides.getActiveIndex().then((index: number) => {
      this.activeId = index;
    });
  }


  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      id: 1,
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }
  // Change current month/week/day
  next() {
    var swiper = document.querySelector('.monthview-container .swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.monthview-container .swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  toggleSearch(){
    this.enableSearch = !this.enableSearch;
    this.searchTerm = '';
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
    var tempMonth = this.viewTitle.split(' ')[0];
    this.selectedYear = this.viewTitle.split(' ')[1];
    this.monthNames.forEach((name, index) => {
      if (name.toLowerCase() == tempMonth.toLowerCase()) {
        this.selectedMonth = index + 1;
      }
    })
    this.eventSource = [];
    this.getEventsByDate(this.selectedMonth, this.selectedYear);
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }

  goToMonth() {
    this.router.navigate(['/calendar-month-view']);
  }

  goToEvent(id) {
    this.router.navigate(['/event-details'], { queryParams: { id } })
  }

}