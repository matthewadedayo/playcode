import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGenderComponent } from './register-gender.component';

describe('RegisterGenderComponent', () => {
  let component: RegisterGenderComponent;
  let fixture: ComponentFixture<RegisterGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
