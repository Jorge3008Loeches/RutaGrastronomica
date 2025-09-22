/* eslint-disable @angular-eslint/prefer-inject */
import { Component, Input } from '@angular/core';
import { PlatosRetrieved } from '../../models/platos';
import { CommonModule } from '@angular/common';
import { RetrievedRestaurant } from '../../models/restaurante';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-platos-side-bar',
  imports: [CommonModule],
  templateUrl: './platos-side-bar.component.html',
  styleUrl: './platos-side-bar.component.scss',
})
export class PlatosSideBarComponent {
  @Input() plato?: PlatosRetrieved; // o crea una interfaz mejor tipada
  @Input() restaurante?: RetrievedRestaurant; // o crea una interfaz mejor tipada
  restauranteSeleccionado;
  constructor(public ResultsService: ResultsService) {
    this.restauranteSeleccionado = this.ResultsService.selectedResult;
  }

  go(restaurant: RetrievedRestaurant) {
    this.ResultsService.goToRestaurant(restaurant);
  }

  parseIngredientes(ingredientes?: string): string[] {
    return ingredientes ? ingredientes.split(/[;,]/).map(i => i.trim()) : [];
  }
}
