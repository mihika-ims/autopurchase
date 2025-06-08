import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateitemPopupComponent } from './createitem-popup.component';

describe('CreateitemPopupComponent', () => {
  let component: CreateitemPopupComponent;
  let fixture: ComponentFixture<CreateitemPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateitemPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateitemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
