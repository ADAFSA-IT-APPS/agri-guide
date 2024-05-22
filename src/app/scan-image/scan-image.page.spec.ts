import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanImagePage } from './scan-image.page';

describe('ScanImagePage', () => {
  let component: ScanImagePage;
  let fixture: ComponentFixture<ScanImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
