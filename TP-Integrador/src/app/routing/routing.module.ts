import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarCursosComponent } from 'src/app/cursos/mostrar-cursos/mostrar-cursos.component';
import { MostrarCursoComponent } from 'src/app/cursos/mostrar-curso/mostrar-curso.component';
import { HomeComponent } from 'src/app/core/home/home.component';
import { CargaAlumnosComponent } from '../alumnos/carga-alumnos/carga-alumnos.component';
import { MostrarAlumnosComponent } from '../alumnos/mostrar-alumnos/mostrar-alumnos.component';
import { MostrarAlumnoComponent } from '../alumnos/mostrar-alumno/mostrar-alumno.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cursos', component: MostrarCursosComponent },
  { path: 'curso/:id', component: MostrarCursoComponent },
  { path: 'mostrarAlumnos', component: MostrarAlumnosComponent},
  { path: 'alumno/:id', component: MostrarAlumnoComponent },
  { path: 'cargaAlumnos', component: CargaAlumnosComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
