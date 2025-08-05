import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, MapComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
