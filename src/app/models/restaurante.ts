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
