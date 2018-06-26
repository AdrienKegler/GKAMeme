import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMozaicComponent } from './gallery-mozaic.component';

describe('GalleryMozaicComponent', () => {
  let component: GalleryMozaicComponent;
  let fixture: ComponentFixture<GalleryMozaicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMozaicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMozaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
