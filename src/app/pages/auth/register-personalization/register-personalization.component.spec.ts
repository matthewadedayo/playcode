import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonalizationComponent } from './register-personalization.component';

describe('RegisterPersonalizationComponent', () => {
  let component: RegisterPersonalizationComponent;
  let fixture: ComponentFixture<RegisterPersonalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPersonalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
