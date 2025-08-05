import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { PlatosSideBarComponent } from '../platos-side-bar/platos-side-bar.component';

@Component({
  selector: 'app-sidebar',
  imports: [FiltersComponent, PlatosSideBarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
