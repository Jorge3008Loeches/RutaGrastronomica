import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-search',
  imports: [SidebarComponent, MapComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
