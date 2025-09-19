/* eslint-disable @angular-eslint/prefer-inject */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RetrievedRestaurant } from '../models/restaurante';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  array = Array(10);

  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:8080/api/restaurantes';

  getRestaurantes(): Observable<RetrievedRestaurant[]> {
    return this.http.get<RetrievedRestaurant[]>(this.backendUrl);
  }
}
