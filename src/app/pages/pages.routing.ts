import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  {
    path: 'jornadas',
    component: MainComponent,
    children: [
      { path: '', component: JornadasComponent },
      { path: 'administrador', component: AdministradorComponent },
      { path: 'clasificacion', component: ClasificacionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
