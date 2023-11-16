import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadlingComponent } from './top-headling.component';

describe('TopHeadlingComponent', () => {
  let component: TopHeadlingComponent;
  let fixture: ComponentFixture<TopHeadlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHeadlingComponent]
    });
    fixture = TestBed.createComponent(TopHeadlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
