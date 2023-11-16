import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentNewComponent } from './entertainment-new.component';

describe('EntertainmentNewComponent', () => {
  let component: EntertainmentNewComponent;
  let fixture: ComponentFixture<EntertainmentNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntertainmentNewComponent]
    });
    fixture = TestBed.createComponent(EntertainmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
