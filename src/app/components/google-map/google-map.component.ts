import { Component } from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapAdvancedMarker,
} from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMap, GoogleMapsModule, MapAdvancedMarker],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = { lat: 40.4165, lng: -3.70256 };
  zoom = 10;
  display!: google.maps.LatLngLiteral;

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

  markers = [
    {
      position: { lat: 40.4168, lng: -3.7038 },
      label: 'M',
      info: 'Capital de España',
      id: 1,
    },
    {
      position: { lat: 41.3874, lng: 2.1686 },
      label: 'Barcelona',
      info: 'Ciudad de Gaudí',
      id: 2,
    },
    {
      position: { lat: 39.4699, lng: -0.3763 },
      label: 'Valencia',
      info: 'Famosa por la paella',
      id: 3,
    },
  ];
}
