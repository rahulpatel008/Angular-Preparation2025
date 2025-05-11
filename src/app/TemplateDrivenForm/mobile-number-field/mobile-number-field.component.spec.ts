import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberFieldComponent } from './mobile-number-field.component';

describe('MobileNumberFieldComponent', () => {
  let component: MobileNumberFieldComponent;
  let fixture: ComponentFixture<MobileNumberFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNumberFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
