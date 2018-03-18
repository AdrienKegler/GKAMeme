import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggedRightPartNavBarComponent } from './user-logged-right-part-nav-bar.component';

describe('UserLoggedRightPartNavBarComponent', () => {
  let component: UserLoggedRightPartNavBarComponent;
  let fixture: ComponentFixture<UserLoggedRightPartNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoggedRightPartNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoggedRightPartNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
