import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPlatosComponent } from './slider-platos.component';

describe('SliderPlatosComponent', () => {
  let component: SliderPlatosComponent;
  let fixture: ComponentFixture<SliderPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPlatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
