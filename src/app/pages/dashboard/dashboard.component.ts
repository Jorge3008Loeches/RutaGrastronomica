import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild('sliderViewportPlatos', { static: false })
  sliderViewportPlatos!: ElementRef;
  @ViewChild('sliderViewportRes', { static: false })
  sliderViewportRes!: ElementRef;
  @ViewChild('sliderViewportCoci', { static: false })
  sliderViewportCoci!: ElementRef;

  platos = [
    {
      nombre: 'Hamburguesa',
      img: 'assets/food1.jpg',
    },
    {
      nombre: 'Patatas Bravas',
      img: 'assets/food2.jpg',
    },
    {
      nombre: 'Tacos',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Arepas',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Empanadas',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Pasta',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Churros',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Ramen',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Pizza',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Asado',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Sushi',
      img: 'assets/food3.jpg',
    },
    {
      nombre: 'Sopa',
      img: 'assets/food3.jpg',
    },
  ];

  cocinas = [
    { nombre: 'Mediterraneo', img: 'assets/food1.jpg' },
    { nombre: 'Español', img: 'assets/food2.jpg' },
    { nombre: 'Asiatico', img: 'assets/food3.jpg' },
    { nombre: 'Latino', img: 'assets/food3.jpg' },
    { nombre: 'Japones', img: 'assets/food3.jpg' },
    { nombre: 'Italiano', img: 'assets/food3.jpg' },
    { nombre: 'Americano', img: 'assets/food3.jpg' },
    { nombre: 'Indio', img: 'assets/food3.jpg' },
    { nombre: 'Mexicano', img: 'assets/food3.jpg' },
    { nombre: 'Peruano', img: 'assets/food3.jpg' },
    { nombre: 'Chino', img: 'assets/food3.jpg' },
    { nombre: 'Arabe', img: 'assets/food3.jpg' },
  ];

  restaurantes = [
    {
      nombre: 'Mediterraneo',
      img: 'assets/food1.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Español',
      img: 'assets/food2.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Asiatico',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Latino',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Japones',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Italiano',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Americano',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Indio',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Mexicano',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Peruano',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Chino',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
    {
      nombre: 'Arabe',
      img: 'assets/food3.jpg',
      tipo: 'chino',
      ubicacion: 'Madrid',
    },
  ];

  currentIndex = 0;
  itemsPerPage = 6;

  currentIndexRes = 0;
  itemsPerPageRes = 6;

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

  scrollSliderCoci(direction: 'left' | 'right') {
    const container = this.sliderViewportCoci.nativeElement;
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
