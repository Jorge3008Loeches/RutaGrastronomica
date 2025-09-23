import { Component } from '@angular/core';
import { Categoria, PlatosRetrieved } from '../../models/platos';
import { PlatosService } from '../../services/platos-service.service';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platos',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.scss',
})
export class PlatosComponent {
  platos: PlatosRetrieved[] = [];

  constructor(private platosService: PlatosService) {}

  ngOnInit(): void {
    this.platosService.getPlatos().subscribe((data: PlatosRetrieved[]) => {
      this.platos = data;
      console.log(this.platos);
    });
  }

  // Método opcional para obtener el nombre de la categoría
  getCategoria(categoria: Categoria): string {
    return categoria;
  }

  getCategoriaNombre(categoria: Categoria): string {
    switch (categoria) {
      case Categoria.Ensalada:
        return 'Ensalada';
      case Categoria.Entrada:
        return 'Entrada';
      case Categoria.Postre:
        return 'Postre';
      case Categoria.Principal:
        return 'Plato Principal';
      case Categoria.SOPA:
        return 'Sopa';
      default:
        return 'Desconocido';
    }
  }
}
