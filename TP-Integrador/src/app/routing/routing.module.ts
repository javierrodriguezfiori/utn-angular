import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 

import { MostrarCursosComponent } from 'src/app/cursos/mostrar-cursos/mostrar-cursos.component';
import { MostrarCursoComponent } from 'src/app/cursos/mostrar-curso/mostrar-curso.component';

const ROUTES: Routes = [
  { path: 'cursos', component: MostrarCursosComponent },
  { path: 'curso', component: MostrarCursoComponent },
  { path: '', redirectTo: 'cursos', pathMatch: 'full'},
  { path: '**', redirectTo: 'cursos', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: []
})
export class RoutingModule { }
