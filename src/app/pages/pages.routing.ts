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
      { path: 'clasificacion', component: ClasificacionComponent },
      { path: 'administrador', component: AdministradorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
