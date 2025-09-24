import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PlatosRetrieved } from '../../models/platos';
import { PlatosService } from '../../services/platos-service.service';

@Component({
  selector: 'app-slider-platos',
  imports: [CommonModule],
  templateUrl: './slider-platos.component.html',
  styleUrl: './slider-platos.component.scss',
})
export class SliderPlatosComponent {
  @ViewChild('sliderViewportPlatos', { static: false })
  sliderViewportPlatos!: ElementRef;

  platos: PlatosRetrieved[] = [];

  constructor(private platosService: PlatosService) {
    this.getTopPlatos();
  }

  currentIndex = 0;
  itemsPerPage = 6;

  scrollSlider(direction: 'left' | 'right') {
    const container = this.sliderViewportPlatos.nativeElement;
    if (!container) return;
    const item = container.querySelector('.slider-item');
    if (!item) return;

    const itemWidth = item.offsetWidth + 40;
    const scrollAmount = this.itemsPerPage * itemWidth;

    if (direction === 'right') {
      //Evitar pasar del max scroll
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      this.currentIndex++;
      if (this.currentIndex * scrollAmount > maxScrollLeft) {
        this.currentIndex = Math.floor(maxScrollLeft / scrollAmount);
      }
    } else if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
    }

    container.scrollTo({
      left: this.currentIndex * scrollAmount,
      behavior: 'smooth',
    });
  }

  getTopPlatos() {
    this.platosService.get10Platos().subscribe({
      next: data => {
        this.platos = data;
      },
      error: error => {
        console.error('Error al obtener los platos:', error);
      },
    });
  }
}
