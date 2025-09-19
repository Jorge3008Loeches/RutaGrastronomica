/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ResultsService } from '../../services/results.service';
import { PlatosRetrieved } from '../../models/platos';
import { RetrievedRestaurant } from '../../models/restaurante';

@Component({
  selector: 'app-search',
  imports: [ResultsComponent, GoogleMapComponent, GoogleMapsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  array = Array(10);

  platosRetrieved: PlatosRetrieved[] = [];
  restaurantesRetrieved: RetrievedRestaurant[] = [];

  constructor(private ResultsService: ResultsService) {}

  ngOnInit(): void {
    this.loadRestaurantes();
  }

  loadRestaurantes(): void {
    this.ResultsService.getRestaurantes().subscribe({
      next: Restaurantes => {
        this.restaurantesRetrieved = Restaurantes;
      },
    });
  }
}
