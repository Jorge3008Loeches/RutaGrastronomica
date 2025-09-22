/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit, signal } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ResultsService } from '../../services/results.service';
import { PlatosRetrieved } from '../../models/platos';
import { RetrievedRestaurant } from '../../models/restaurante';
import { filterResultsService } from '../../services/filter-results.service';

@Component({
  selector: 'app-search',
  imports: [ResultsComponent, GoogleMapComponent, GoogleMapsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  array = Array(10);

  selectedResult = signal<RetrievedRestaurant | null>(null);

  platosRetrieved = signal<PlatosRetrieved[]>([]);
  restaurantesRetrieved = signal<RetrievedRestaurant[]>([]);

  constructor(
    private ResultsService: ResultsService,
    private filterService: filterResultsService
  ) {}

  ngOnInit(): void {
    this.loadRestaurantes();
    this.loadPlatosTipicos();
    this.filterService.filtrarRestauranteAccion$.subscribe(filter => {
      this.loadRestaurantes(filter);
    });
    this.filterService.filtrarPlatoAccion$.subscribe(filter => {
      this.loadPlatosTipicos(filter);
    });
  }

  loadRestaurantes(filter?: string): void {
    this.ResultsService.getRestaurantes(filter).subscribe({
      next: Restaurantes => {
        this.restaurantesRetrieved.set(Restaurantes);
      },
    });
  }

  loadPlatosTipicos(filter?: string): void {
    this.ResultsService.getPlatosTipicos(filter).subscribe({
      next: platos => {
        this.platosRetrieved.set(platos);
      },
    });
  }
}
