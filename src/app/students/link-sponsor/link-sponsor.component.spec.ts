import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSponsorComponent } from './link-sponsor.component';

describe('LinkSponsorComponent', () => {
  let component: LinkSponsorComponent;
  let fixture: ComponentFixture<LinkSponsorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkSponsorComponent]
    });
    fixture = TestBed.createComponent(LinkSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
