import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginInfoPage } from './login-info.page';

describe('LoginInfoPage', () => {
  let component: LoginInfoPage;
  let fixture: ComponentFixture<LoginInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
