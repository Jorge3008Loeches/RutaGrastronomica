import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RetrievedRestaurant } from '../../models/restaurante';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-slider-restaurantes',
  imports: [CommonModule],
  templateUrl: './slider-restaurantes.component.html',
  styleUrl: './slider-restaurantes.component.scss',
})
export class SliderRestaurantesComponent {
  @ViewChild('sliderViewportRes', { static: false })
  sliderViewportRes!: ElementRef;

  restaurantes: RetrievedRestaurant[] = [];

  constructor(private restaurnteService: ResultsService) {
    this.getTopRestaurantes();
  }

  currentIndexRes = 0;
  itemsPerPageRes = 6;

  getTopRestaurantes() {
    this.restaurnteService.get10Restaurantes().subscribe({
      next: data => {
        console.log('restaurantes recibidos:', data);
        this.restaurantes = data;
      },
      error: error => {
        console.error('Error al obtener los restaurantes:', error);
      },
    });
  }

  scrollSliderRes(direction: 'left' | 'right') {
    const container = this.sliderViewportRes.nativeElement;
    const item = container.querySelector('.slider-itemRes');
    if (!item) return;

    const itemWidth = item.offsetWidth + 40;
    const scrollAmount = this.itemsPerPageRes * itemWidth;

    if (direction === 'right') {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      this.currentIndexRes++;
      if (this.currentIndexRes * scrollAmount > maxScrollLeft) {
        this.currentIndexRes = Math.floor(maxScrollLeft / scrollAmount);
      }
    } else if (direction === 'left' && this.currentIndexRes > 0) {
      this.currentIndexRes--;
    }

    container.scrollTo({
      left: this.currentIndexRes * scrollAmount,
      behavior: 'smooth',
    });
  }
}
