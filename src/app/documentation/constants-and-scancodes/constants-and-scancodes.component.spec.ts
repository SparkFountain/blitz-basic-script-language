import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsAndScancodesComponent } from './constants-and-scancodes.component';

describe('ConstantsAndScancodesComponent', () => {
  let component: ConstantsAndScancodesComponent;
  let fixture: ComponentFixture<ConstantsAndScancodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantsAndScancodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstantsAndScancodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
