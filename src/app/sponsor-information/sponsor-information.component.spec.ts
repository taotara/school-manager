import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorInformationComponent } from './sponsor-information.component';

describe('SponsorInformationComponent', () => {
  let component: SponsorInformationComponent;
  let fixture: ComponentFixture<SponsorInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorInformationComponent]
    });
    fixture = TestBed.createComponent(SponsorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
