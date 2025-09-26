/* eslint-disable @angular-eslint/prefer-inject */
import { Component, Input, viewChild, OnInit, ViewChild } from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapAdvancedMarker,
  MapInfoWindow,
} from '@angular/google-maps';
import { RetrievedRestaurant } from '../../models/restaurante';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMap, GoogleMapsModule, MapAdvancedMarker],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 40.4165, lng: -3.70256 };
  zoom = 15;
  display!: google.maps.LatLngLiteral;

  @Input() restaurantesRetrieved: RetrievedRestaurant[] = [];
  constructor(public ResultsService: ResultsService) {}

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = event.latLng!.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }

  advancedMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = {
    gmpDraggable: false,
  };
  advancedMarkerPositions: google.maps.LatLngLiteral[] = [];

  addAdvancedMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.advancedMarkerPositions.push(event?.latLng.toJSON());
    }
  }

  mapOptions: google.maps.MapOptions = {
    mapId: '995ec902d5a39134224e6d33',
  };

  private markReference = viewChild.required<GoogleMap>(GoogleMap);
  selectedMark: RetrievedRestaurant | undefined;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  changeLocation(mark: RetrievedRestaurant) {
    this.markReference().panTo({ lat: mark.latitude, lng: mark.longitude });
    this.ResultsService.setSelectedRestaurant(mark);
  }

  openInfoWindow(marker: MapAdvancedMarker, mark: RetrievedRestaurant) {
    this.selectedMark = mark;
    this.infoWindow.open(marker); // PASAMOS EL MAPADVANCEDMARKER, NO HTMLElement
  }

  ngOnInit() {
    this.ResultsService.restaurant$.subscribe(rest => {
      this.changeLocation(rest);
    });
  }
}
