import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCompComponent } from './help-comp.component';

describe('HelpCompComponent', () => {
  let component: HelpCompComponent;
  let fixture: ComponentFixture<HelpCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCompComponent]
    });
    fixture = TestBed.createComponent(HelpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
