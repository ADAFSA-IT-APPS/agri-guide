import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterSubjectPage } from './filter-subject.page';

describe('FilterSubjectPage', () => {
  let component: FilterSubjectPage;
  let fixture: ComponentFixture<FilterSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
