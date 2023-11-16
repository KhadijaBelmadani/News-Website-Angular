import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportNewsComponent } from './sport-news.component';

describe('SportNewsComponent', () => {
  let component: SportNewsComponent;
  let fixture: ComponentFixture<SportNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportNewsComponent]
    });
    fixture = TestBed.createComponent(SportNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
