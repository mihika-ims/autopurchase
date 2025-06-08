import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestPopupComponent } from './suggest-popup.component';

describe('SuggestPopupComponent', () => {
  let component: SuggestPopupComponent;
  let fixture: ComponentFixture<SuggestPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
