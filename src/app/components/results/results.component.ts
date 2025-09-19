/* eslint-disable @angular-eslint/prefer-inject */
import {
  Component,
  effect,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { PlatosSideBarComponent } from '../platos-side-bar/platos-side-bar.component';
import { CommonModule } from '@angular/common';
import { RetrievedRestaurant } from '../../models/restaurante';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results',
  imports: [CommonModule, PlatosSideBarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  @Input() restaurantesRetrieved: RetrievedRestaurant[] = [];
  @ViewChildren('restaurantItem') items!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(public ResultsService: ResultsService) {
    // Efecto reactivo: cada vez que cambia el selectedResult en el servicio
    effect(() => {
      const selected = this.ResultsService.selectedResult();
      if (selected) {
        this.scrollToSelected(selected);
      }
    });
  }

  go(restaurant: RetrievedRestaurant) {
    this.ResultsService.goToRestaurant(restaurant);
  }

  private scrollToSelected(rest: RetrievedRestaurant) {
    const item = this.items.find(
      el => el.nativeElement.dataset['id'] === String(rest.id_restaurante)
    );
    if (item) {
      item.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
}
