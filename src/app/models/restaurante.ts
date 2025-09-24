import { Plato } from './platos';

export interface Restaurante {
  id?: number;
  nombre: string;
  domicilio: string;
  latitude: number;
  longitude: number;
  rating?: number;
  photoreference?: string;
}

export interface RetrievedRestaurant {
  id_restaurante: number;
  reference: string;
  nombre: string;
  domicilio: string;
  pricelevel: number | null;
  rating: number;
  latitude: number;
  longitude: number;
  photoreference: string;
}

export interface RetrievedRestaurant {
  id_restaurante: number;
  reference: string;
  nombre: string;
  domicilio: string;
  pricelevel: number | null;
  rating: number;
  latitude: number;
  longitude: number;
  photoreference: string;
}
