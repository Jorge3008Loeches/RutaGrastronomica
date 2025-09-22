export interface Plato {
  nombre: string;
  descripcion: string;
  restaurante: string;
  ubicacion: string;
  imagen: string;
  lat: number;
  lng: number;
}

export interface PlatosRetrieved {
  id_plato: number;
  nombre: string;
  categoria: Categoria;
  descripcion: string;
  ingredientes: string;
  receta: string;
  foto?: string;
}

export enum Categoria {
  Ensalada = 'ENSALADA',
  Entrada = 'ENTRADA',
  Postre = 'POSTRE',
  Principal = 'PRINCIPAL',
  SOPA = 'SOPA',
}
