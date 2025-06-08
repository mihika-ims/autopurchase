import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllitemPopupComponent } from './allitem-popup.component';

describe('AllitemPopupComponent', () => {
  let component: AllitemPopupComponent;
  let fixture: ComponentFixture<AllitemPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllitemPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllitemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
