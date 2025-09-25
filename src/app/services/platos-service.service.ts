/* eslint-disable @angular-eslint/prefer-inject */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatosRetrieved } from '../models/platos';

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  // private apiUrl = 'http://localhost:8082/api/platosTipicos';

  apiUrl = 'http://gastromadrid.pickmyskills.com:8082/api/platosTipicos';

  constructor(private http: HttpClient) {}

  getPlatos(): Observable<PlatosRetrieved[]> {
    return this.http.get<PlatosRetrieved[]>(this.apiUrl);
  }

  get10Platos(): Observable<PlatosRetrieved[]> {
    return this.http.get<PlatosRetrieved[]>(`${this.apiUrl}/top10`);
  }
}
