import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADAFSAMemberLoginPage } from './adafsa-member-login.page';

describe('ADAFSAMemberLoginPage', () => {
  let component: ADAFSAMemberLoginPage;
  let fixture: ComponentFixture<ADAFSAMemberLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADAFSAMemberLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADAFSAMemberLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
