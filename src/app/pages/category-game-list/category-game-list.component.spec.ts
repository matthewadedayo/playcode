import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGameListComponent } from './category-game-list.component';

describe('CategoryGameListComponent', () => {
  let component: CategoryGameListComponent;
  let fixture: ComponentFixture<CategoryGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
