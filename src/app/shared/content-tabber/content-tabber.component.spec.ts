import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabberComponent } from './content-tabber.component';

describe('ContentTabberComponent', () => {
  let component: ContentTabberComponent;
  let fixture: ComponentFixture<ContentTabberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTabberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTabberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
