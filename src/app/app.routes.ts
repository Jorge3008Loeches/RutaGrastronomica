import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { MiRestauranteComponent } from './pages/mi-restaurante/mi-restaurante.component';

export const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
  },
  {
    component: SearchComponent,
    path: 'search',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: PlatosComponent,
    path: 'platos',
  },
  {
    component: MiRestauranteComponent,
    path: 'MiRestaurante',
  },
];
