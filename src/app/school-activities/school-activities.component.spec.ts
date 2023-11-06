import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolActivitiesComponent } from './school-activities.component';

describe('SchoolActivitiesComponent', () => {
  let component: SchoolActivitiesComponent;
  let fixture: ComponentFixture<SchoolActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolActivitiesComponent]
    });
    fixture = TestBed.createComponent(SchoolActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
