import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileReviewComponent } from './game-profile-review.component';

describe('GameProfileReviewComponent', () => {
  let component: GameProfileReviewComponent;
  let fixture: ComponentFixture<GameProfileReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProfileReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
