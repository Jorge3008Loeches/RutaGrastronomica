import { Component, Input } from '@angular/core';
import { PlatosSideBarComponent } from '../platos-side-bar/platos-side-bar.component';
import { CommonModule } from '@angular/common';
import { RetrievedRestaurant } from '../../models/restaurante';

@Component({
  selector: 'app-results',
  imports: [CommonModule, PlatosSideBarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  @Input() restaurantesRetrieved: RetrievedRestaurant[] = [];
}
