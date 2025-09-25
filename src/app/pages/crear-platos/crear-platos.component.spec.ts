import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPlatosComponent } from './crear-platos.component';

describe('CrearPlatosComponent', () => {
  let component: CrearPlatosComponent;
  let fixture: ComponentFixture<CrearPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPlatosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
