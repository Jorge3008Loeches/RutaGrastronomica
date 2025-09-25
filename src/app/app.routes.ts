import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { MiRestauranteComponent } from './pages/mi-restaurante/mi-restaurante.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { CrearPlatosComponent } from './pages/crear-platos/crear-platos.component';

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
    component: RestaurantesComponent,
    path: 'restaurantes',
  },
  {
    component: MiRestauranteComponent,
    path: 'MiRestaurante',
  },
  {
    component: CrearPlatosComponent,
    path: 'crear-platos',
  },
];
