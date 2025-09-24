import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRestauranteComponent } from './mi-restaurante.component';

describe('MiRestauranteComponent', () => {
  let component: MiRestauranteComponent;
  let fixture: ComponentFixture<MiRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiRestauranteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
