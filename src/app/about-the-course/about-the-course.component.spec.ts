import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheCourseComponent } from './about-the-course.component';

describe('AboutTheCourseComponent', () => {
  let component: AboutTheCourseComponent;
  let fixture: ComponentFixture<AboutTheCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
