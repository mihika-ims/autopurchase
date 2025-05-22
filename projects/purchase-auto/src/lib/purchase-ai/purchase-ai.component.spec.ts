import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAiComponent } from './purchase-ai.component';

describe('PurchaseAiComponent', () => {
  let component: PurchaseAiComponent;
  let fixture: ComponentFixture<PurchaseAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseAiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
