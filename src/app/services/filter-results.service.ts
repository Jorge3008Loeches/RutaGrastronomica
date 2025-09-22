import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class filterResultsService {
  private accionRestauranteSource = new Subject<string>();
  filtrarRestauranteAccion$ = this.accionRestauranteSource.asObservable();

  private accionPlatoSource = new Subject<string>();
  filtrarPlatoAccion$ = this.accionPlatoSource.asObservable();

  filtrarRestaurantesPorPlato(filter: string) {
    this.accionRestauranteSource.next(filter);
  }

  filtrarPlato(filter: string) {
    this.accionPlatoSource.next(filter);
  }
}
