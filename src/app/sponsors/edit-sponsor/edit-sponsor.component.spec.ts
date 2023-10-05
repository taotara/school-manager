import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSponsorComponent } from './edit-sponsor.component';

describe('EditSponsorComponent', () => {
  let component: EditSponsorComponent;
  let fixture: ComponentFixture<EditSponsorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSponsorComponent]
    });
    fixture = TestBed.createComponent(EditSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
