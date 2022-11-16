import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    ClasificacionComponent,
    JornadasComponent,
    AdministradorComponent,
    MainComponent,
  ],
  exports: [
    ClasificacionComponent,
    JornadasComponent,
    AdministradorComponent,
    MainComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PagesModule {}
