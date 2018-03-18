import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorRightPartNavBarComponent } from './visitor-right-part-nav-bar.component';

describe('VisitorRightPartNavBarComponent', () => {
  let component: VisitorRightPartNavBarComponent;
  let fixture: ComponentFixture<VisitorRightPartNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorRightPartNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorRightPartNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
