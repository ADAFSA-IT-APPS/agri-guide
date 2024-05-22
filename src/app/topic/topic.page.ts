import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { environment } from 'src/environments/environment';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {
  @ViewChild(IonContent, { read: IonContent, static: false }) myContent: IonContent;
  topicList: any;
  guest: boolean = false;
  filterTopicList: any = [];
  path = environment.domain;
  selectedCat: any;
  favList: any = [];
  filterOptions: any;
  filter = 4;
  dummy = Array(2);
  enableSearch: boolean = false;
  searchTerm: any = "";
  searchList: any;
  currentLang: any;

  constructor(private menuCtrl: MenuController,
    private router: Router,
    private service: ApiService,
    private route: ActivatedRoute,
    private helperService: HelperService) {
    if (localStorage.getItem('guest') == '1') {
      this.guest = true;
    }
    this.currentLang = this.helperService.getLang();
    this.filterOptions = [
      { name: 'All', name_ar: 'الجميع', id: 4 },
      { name: 'New', name_ar: 'جديد', id: 1 },
      { name: 'Top', name_ar: 'الاشّهر', id: 3 },
      { name: 'All Fav', name_ar: 'المفضلة', id: 2 }]
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.filterTopicList = [];
    this.filter = 4;
    this.dummy = Array(2);
    if (localStorage.getItem('currentUser')) {
      this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
    }
    this.route.queryParams.subscribe(_res => {
      if (_res.id) {
        this.selectedCat = JSON.parse(localStorage.getItem('selectedTopic'));
      } else {
        localStorage.removeItem('selectedTopic');
        delete this.selectedCat;
      }
    })
    if (this.filterTopicList.length == 0) {
      setTimeout(() => {
        // this.getNewTopics(true, '');
        this.getTopics(true, '');
      }, 100);
    }
  }

  ScrollToBottom() {
    setTimeout(() => {
      this.myContent.scrollToBottom(300);
    }, 100);
  }

  toggleMenu() {
    this.router.navigate(['/filter-subject']);
  }

  goToDetails(_id) {
    this.router.navigate(['/topic-details'], { queryParams: { id: _id } });
  }

  loadData(event) {
    debugger;
    switch (this.filter) {
      case 1:
        this.getNewTopics(false, event);
        break;

      case 2:
        //if (this.favList) {
        //   this.filterTopicList = this.favList;
        //   this.favList.forEach(_fav => {
        //     this.topicList.forEach(_topic => {
        //       if (_topic.id == _fav.id) {
        //         _topic.favorite = true;
        //         this.filterTopicList.push(_topic);
        //       }
        //     });
        //   });
        // }

        if (localStorage.getItem('currentUser')) {
          this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
        }

        if (this.favList) {
          this.filterTopicList = this.favList;
          this.dummy = [];
        } else {
          this.filterTopicList = [];
          this.dummy = [];
        }

        event.target.complete();

        break;

      case 3:
        // this.filterTopicList = JSON.parse(JSON.stringify(this.topicList));
        // this.filterTopicList.sort((a, b) => a.visitedCounter - b.visitedCounter)
        this.getTopTopics(false, event);
        break;

      case 4:
        this.getTopics(false, event);
        break;
      default:
        break;
    }
  }

  loadSearch(event) {
    if (this.searchTerm.length > 0) {
      var from = this.searchList.length;
      var to = from + 10;
      var payload = 'q=' + this.searchTerm + '&startPage=' + from + '&pageSize=' + to;
      this.service.searchTopics(payload).subscribe(_res => {
        this.searchList = [...this.searchList, ..._res];
        event.target.complete();
      })
    } else {
      event.target.complete();
    }
  }

  getTopics(firstload, event) {
    var from = this.filterTopicList.length;
    var to = from + 10;
    var payload;
    if (this.selectedCat) {
      payload = 'cateId=' + this.selectedCat.id + '&startPage=' + from + '&pageSize=' + to + '&sort=false';
    } else {
      payload = 'startPage=' + from + '&pageSize=' + to + '&sort=false';
    }
    this.service.getAllTopics(payload).subscribe(_res => {
      this.helperService.hide();
      if (!firstload) {
        event.target.complete();
      }
      // if (this.selectedCat) {
      //   this.topicList = _res.filter(item => item.categories?.id == this.selectedCat.id);
      // } else {
      //   this.topicList = _res;
      // }
      //this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
      this.filterTopicList = [...this.filterTopicList, ..._res];
      this.dummy = [];
    })
  }

  getNewTopics(firstload, event) {
    if (firstload) {
      this.filterTopicList = [];
    }
    // var from = document.getElementsByClassName('topic-item').length;
    var from = this.filterTopicList.length;
    var to = (from + 1) + 10;
    var payload;
    if (this.selectedCat) {
      payload = 'cateId=' + this.selectedCat.id + '&startPage=' + from + '&pageSize=' + to;
    } else {
      payload = 'startPage=' + from + '&pageSize=' + to;
    }
    this.service.getNewTopics(payload).subscribe(_res => {
      if (!firstload) {
        event.target.complete();
      }
      // if (this.selectedCat) {
      //   this.topicList = _res.filter(item => item.categories?.id == this.selectedCat.id);
      // } else {
      //   this.topicList = _res;
      // }
      //this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
      this.filterTopicList = [...this.filterTopicList, ..._res];
      this.dummy = [];
    })
  }

  getTopTopics(firstload, event) {
    var from = this.filterTopicList.length;
    var to = (from + 1) + 10;
    var payload;
    if (this.selectedCat) {
      payload = 'cateId=' + this.selectedCat.id + '&startPage=' + from + '&pageSize=' + to;
    } else {
      payload = 'startPage=' + from + '&pageSize=' + to;
    }
    this.service.getTopTopics(payload).subscribe(_res => {
      if (!firstload) {
        event.target.complete();
      }
      // if (this.selectedCat) {
      //   this.topicList = _res.filter(item => item.categories?.id == this.selectedCat.id);
      // } else {
      //   this.topicList = _res;
      // }
      //this.filterTopicList = this.topicList.filter(_res => _res.setAsNew == true);
      this.filterTopicList = [...this.filterTopicList, ..._res];
      this.dummy = [];
    })
  }

  filterType(_id) {
    this.filterTopicList = [];
    this.dummy = this.dummy = Array(2);
    this.filter = _id;
    debugger;
    switch (this.filter) {
      case 1:
        this.getNewTopics(true, '');
        break;

      case 2:
        if (localStorage.getItem('currentUser')) {
          this.favList = JSON.parse(localStorage.getItem('currentUser')).favouriteTopicsList;
        }
        if (this.favList) {
          this.filterTopicList = this.favList;
          this.dummy = [];
        } else {
          this.filterTopicList = [];
          this.dummy = [];
        }

        break;

      case 3:
        // this.filterTopicList = JSON.parse(JSON.stringify(this.topicList));
        // this.filterTopicList.sort((a, b) => a.visitedCounter - b.visitedCounter)
        this.getTopTopics(true, '');
        break;

      case 4:
        this.getTopics(true, '');
        break;
      default:
        break;
    }
  }

  onSearch() {
    this.searchList = [];
    if (this.searchTerm) {
      var from = this.searchList.length;
      var to = from + 10;
      var payload = 'q=' + this.searchTerm + '&startPage=' + from + '&pageSize=' + to;
      this.service.searchTopics(payload).subscribe(_res => {
        this.searchList = [...this.searchList, ..._res];
      })
      //this.searchList = this.topicList.filter(element => (element.title.toLowerCase().includes(this.searchTerm.toLowerCase())) || (element.title_ar.toLowerCase().includes(this.searchTerm.toLowerCase())));
      // this.searchList = this.topicList.filter((group: any) => {

      //   if (group.title.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1) {
      //     return true;
      //   }

      //   let matches: any[] = group.sections.filter((item: any) => {
      //     //console.log(item.heading.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1 || item.description.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1)
      //     return item.heading.toLowerCase().lastIndexOf(this.searchTerm).toLowerCase() !== -1 || item.description.toLowerCase().lastIndexOf(this.searchTerm.toLowerCase()) !== -1;
      //   });
      //   return matches.length > 0;
      // });
    } else {
      this.searchList = [];
    }
  }

  toggleSearch() {
    this.enableSearch = !this.enableSearch;
    this.searchTerm = '';
    this.searchList = [];

  }

  deleteCategory(_id) {
    this.helperService.show();
    this.service.deleteSelectedCategory(_id).subscribe(_res => {
      this.helperService.hide();
      this.helperService.showToast(this.helperService.translate('successfullyRemoved'), 'success', 'bottom');
      this.router.navigate(["/tabs/home"]);
    })
  }

  imgError(event){
    event.srcElement.src = '/assets/no-image.svg';
  }

}