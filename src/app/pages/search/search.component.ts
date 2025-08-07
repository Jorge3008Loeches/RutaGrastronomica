import { Component } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';

@Component({
  selector: 'app-search',
  imports: [ResultsComponent, GoogleMapComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
