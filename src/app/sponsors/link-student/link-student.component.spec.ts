import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkStudentComponent } from './link-student.component';

describe('LinkStudentComponent', () => {
  let component: LinkStudentComponent;
  let fixture: ComponentFixture<LinkStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkStudentComponent]
    });
    fixture = TestBed.createComponent(LinkStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
