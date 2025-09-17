import { Component } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-search',
  imports: [ResultsComponent, GoogleMapComponent, GoogleMapsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
