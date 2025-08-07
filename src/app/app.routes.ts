import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
  },
  {
    component: SearchComponent,
    path: 'search',
  },
];
