/* eslint-disable @angular-eslint/prefer-inject */
import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RetrievedRestaurant } from '../models/restaurante';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  array = Array(10);

  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:8080/api/restaurantes';

  private restaurantSubject = new Subject<RetrievedRestaurant>();
  restaurant$ = this.restaurantSubject.asObservable();

  selectedResult = signal<RetrievedRestaurant | null>(null);

  setSelectedRestaurant(rest: RetrievedRestaurant) {
    this.selectedResult.set(rest);
  }

  goToRestaurant(rest: RetrievedRestaurant) {
    this.restaurantSubject.next(rest);
  }

  getRestaurantes(): Observable<RetrievedRestaurant[]> {
    return this.http.get<RetrievedRestaurant[]>(this.backendUrl);
  }
}
