import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarCursosComponent } from 'src/app/cursos/mostrar-cursos/mostrar-cursos.component';
import { MostrarCursoComponent } from 'src/app/cursos/mostrar-curso/mostrar-curso.component';
import { HomeComponent } from 'src/app/core/home/home.component';

const ROUTES: Routes = [
  { path: 'cursos', component: MostrarCursosComponent },
  { path: 'curso/:id', component: MostrarCursoComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ],
  providers: [ RouterModule ]
})
export class RoutingModule { }
