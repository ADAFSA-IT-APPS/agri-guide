import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalSymptomsPage } from './animal-symptoms.page';

describe('AnimalSymptomsPage', () => {
  let component: AnimalSymptomsPage;
  let fixture: ComponentFixture<AnimalSymptomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSymptomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalSymptomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
