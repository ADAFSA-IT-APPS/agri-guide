import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdafsaMemberPage } from './adafsa-member.page';

describe('AdafsaMemberPage', () => {
  let component: AdafsaMemberPage;
  let fixture: ComponentFixture<AdafsaMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdafsaMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdafsaMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
