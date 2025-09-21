import { Plato } from './platos';

export interface Restaurante {
  id?: number;
  nombre: string;
  descripcion?: string;
  domicilio: string;
  email: string;
  latitude: number;
  longitude: number;
  rating?: number;
  photoreference?: string;
}
