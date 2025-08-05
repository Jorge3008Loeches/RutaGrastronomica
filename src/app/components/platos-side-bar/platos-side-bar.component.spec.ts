import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosSideBarComponent } from './platos-side-bar.component';

describe('PlatosSideBarComponent', () => {
  let component: PlatosSideBarComponent;
  let fixture: ComponentFixture<PlatosSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatosSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatosSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
