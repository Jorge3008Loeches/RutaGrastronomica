/* eslint-disable @angular-eslint/prefer-inject */
import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RetrievedRestaurant } from '../models/restaurante';
import { PlatosRetrieved } from '../models/platos';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  array = Array(10);

  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:8080/api/';

  private restaurantSubject = new Subject<RetrievedRestaurant>();
  restaurant$ = this.restaurantSubject.asObservable();

  selectedResult = signal<RetrievedRestaurant | null>(null);
  selectedPlate = signal<PlatosRetrieved | null>(null);

  setSelectedRestaurant(rest: RetrievedRestaurant) {
    this.selectedResult.set(rest);
  }

  setSelectedPlate(res: PlatosRetrieved) {
    this.selectedPlate.set(res);
  }

  goToRestaurant(rest: RetrievedRestaurant) {
    this.restaurantSubject.next(rest);
  }

  getRestaurantes(query?: string): Observable<RetrievedRestaurant[]> {
    return this.http.get<RetrievedRestaurant[]>(
      `${this.backendUrl}restaurantes${query ? query : ''}`
    );
  }
  getPlatosTipicos(query?: string): Observable<PlatosRetrieved[]> {
    return this.http.get<PlatosRetrieved[]>(
      `${this.backendUrl}platosTipicos${query ? query : ''}`
    );
  }
}
