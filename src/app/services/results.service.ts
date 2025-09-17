/* eslint-disable @angular-eslint/prefer-inject */
import { Injectable } from '@angular/core';
import { PlatosRetrieved } from '../models/platos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  array = Array(10);

  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:8080/api/platosTipicos';

  getPlatos(): Observable<PlatosRetrieved[]> {
    return this.http.get<PlatosRetrieved[]>(this.backendUrl);
  }
}
