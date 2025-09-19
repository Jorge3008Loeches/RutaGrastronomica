import { Plato } from './platos';

export interface Restaurante {
  id: string;
  nombre: string;
  descripcion?: string;
  direccion: string;
  telefono?: string;
  email?: string;
  horario?: string;
  ubicacion?: {
    lat: number;
    lng: number;
  };
  imagenUrl?: string;
  platosTipicos?: Plato[];
  calificacionPromedio?: number;
  password: string;
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
