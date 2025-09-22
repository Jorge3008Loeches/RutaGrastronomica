// src/app/models/usuario.ts
import { Rol } from './rol';

export interface Usuario {
  id?: number;
  nombre: string;
  password: string;
  restauranteId?: number; // ID del restaurante asociado (puede ser null)
  rol?: Rol; // Puede omitirse al crear si quieres que se asigne PROPIETARIO por defecto
}
