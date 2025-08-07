import { Component, Input } from '@angular/core';
import { Plato } from '../../models/platos';

@Component({
  selector: 'app-platos-side-bar',
  imports: [],
  templateUrl: './platos-side-bar.component.html',
  styleUrl: './platos-side-bar.component.scss',
})
export class PlatosSideBarComponent {
  @Input() plato?: Plato; // o crea una interfaz mejor tipada
}
