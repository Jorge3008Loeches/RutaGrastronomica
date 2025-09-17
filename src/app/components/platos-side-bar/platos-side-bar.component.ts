import { Component, Input } from '@angular/core';
import { PlatosRetrieved } from '../../models/platos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platos-side-bar',
  imports: [CommonModule],
  templateUrl: './platos-side-bar.component.html',
  styleUrl: './platos-side-bar.component.scss',
})
export class PlatosSideBarComponent {
  @Input() plato?: PlatosRetrieved; // o crea una interfaz mejor tipada
  parseIngredientes(ingredientes?: string): string[] {
    return ingredientes ? ingredientes.split(/[;,]/).map(i => i.trim()) : [];
  }
}
