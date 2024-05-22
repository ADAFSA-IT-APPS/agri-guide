import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  path = environment.domain;
  currentLang: any;

  /**
   * The name of the technology that will be displayed as the title for the accordion header
   * @public
   * @property name
   * @type {string}
   */
  @Input()
  name : string;


  /**
   * @public
   * @property description
   * @type {string}
   */
  @Input()
  calendarData : any;

  /**
   * @public
   * @property image
   * @type {string}
   */
  @Input()
  image : string;

  /**
   * @public
   * @property change
   * @type {EventEmitter}
   */
  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();


  /**
   * Determines and stores the accordion state (I.e. opened or closed)
   * @public
   * @property isMenuOpen
   * @type {boolean}
   */
  public isMenuOpen : boolean = false;
  bugs: any = [];

  constructor(private router: Router, private helperService: HelperService) { 
    this.currentLang = this.helperService.getLang();
  }



  ngOnInit() {
    this.bugs = JSON.parse(this.calendarData).diseases;
    this.calendarData = JSON.parse(this.calendarData).events;
    var temp = this.groupBy(this.calendarData, 'startDateTime');
    this.calendarData = [];
    Object.keys(temp).forEach(item => {
      this.calendarData.push({ [item]: temp[item] });
    });
    this.calendarData.isOpen = false;
    console.log(this.calendarData);
  }



  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion(calendarData, id) : void
  {
    this.calendarData.forEach(element => {
      element.isOpen = false;
    });
    console.log(this.calendarData);
    calendarData.isOpen = !calendarData.isOpen;
    if(calendarData.isOpen){
      this.change.emit(id);
    }
  }


  /**
   * Allows the value for the <ion-button> element to be broadcast to the parent component
   * @public
   * @method broadcastName
   * @returns {none}
   */
  public broadcastName(name : string) : void
  {
     this.change.emit(name);
  }

  getID(name){
    return name.toLowerCase().replace(' ','');
  }


  groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  fetchPropertyName(_obj) {
    return Object.keys(_obj)[0];
  }

  getDate(date){
    return moment(date).format('MMMM DD yyyy')
  }

  getDay(date){
    return moment(date).format('dddd : ')
  }

  goToDetails(id){
      this.router.navigate(['/care-details'], {queryParams: {id}})  
  }

  goToEvent(id){
    this.router.navigate(['/event-details'], { queryParams: { id }})
  }

}