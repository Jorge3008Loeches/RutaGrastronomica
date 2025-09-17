/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { PlatosSideBarComponent } from '../platos-side-bar/platos-side-bar.component';
import { CommonModule } from '@angular/common';
import { PlatosRetrieved } from '../../models/platos';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results',
  imports: [CommonModule, PlatosSideBarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent implements OnInit {
  array = Array(10);

  platosRetrieved: PlatosRetrieved[] = [];

  constructor(private ResultsService: ResultsService) {}

  ngOnInit(): void {
    this.loadPlatos();
  }

  loadPlatos(): void {
    this.ResultsService.getPlatos().subscribe({
      next: platos => {
        this.platosRetrieved = platos;
      },
    });
  }
}
