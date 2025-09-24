import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRestaurantesComponent } from './slider-restaurantes.component';

describe('SliderRestaurantesComponent', () => {
  let component: SliderRestaurantesComponent;
  let fixture: ComponentFixture<SliderRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderRestaurantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
