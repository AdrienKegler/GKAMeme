import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupSearchbarComponent } from './btn-group-searchbar.component';

describe('BtnGroupSearchbarComponent', () => {
  let component: BtnGroupSearchbarComponent;
  let fixture: ComponentFixture<BtnGroupSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGroupSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
