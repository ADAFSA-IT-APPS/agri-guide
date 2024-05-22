import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalSymptomsDetailPage } from './animal-symptoms-detail.page';

describe('AnimalSymptomsDetailPage', () => {
  let component: AnimalSymptomsDetailPage;
  let fixture: ComponentFixture<AnimalSymptomsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSymptomsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalSymptomsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
