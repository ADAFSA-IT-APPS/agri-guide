import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvisoryListPage } from './advisory-list.page';

describe('AdvisoryListPage', () => {
  let component: AdvisoryListPage;
  let fixture: ComponentFixture<AdvisoryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvisoryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
