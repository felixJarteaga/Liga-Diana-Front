import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ClasificacionComponent } from './pages/clasificacion/clasificacion.component';
import { JornadasComponent } from './pages/jornadas/jornadas.component';
import { MainComponent } from './pages/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'jornadas', component: JornadasComponent },
      { path: 'clasificacion', component: ClasificacionComponent },
      { path: 'administrador', component: AdministradorComponent },
      { path: '', redirectTo: '/jornadas', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent },

  { path: '**', component: JornadasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
