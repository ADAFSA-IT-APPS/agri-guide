import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdafsaLoginPage } from './adafsa-login.page';

describe('AdafsaLoginPage', () => {
  let component: AdafsaLoginPage;
  let fixture: ComponentFixture<AdafsaLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdafsaLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdafsaLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
