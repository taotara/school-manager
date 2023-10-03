import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCategoriesComponent } from './student-categories.component';

describe('StudentCategoriesComponent', () => {
  let component: StudentCategoriesComponent;
  let fixture: ComponentFixture<StudentCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCategoriesComponent]
    });
    fixture = TestBed.createComponent(StudentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
