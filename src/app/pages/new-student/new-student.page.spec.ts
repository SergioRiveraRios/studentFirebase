import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewStudentPage } from './new-student.page';

describe('NewStudentPage', () => {
  let component: NewStudentPage;
  let fixture: ComponentFixture<NewStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
