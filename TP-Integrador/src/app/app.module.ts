import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MostrarAlumnoComponent } from './mostrar-alumno/mostrar-alumno.component';
import { MostrarDocenteComponent } from './mostrar-docente/mostrar-docente.component';
import { MostrarCursoComponent } from './cursos/mostrar-curso/mostrar-curso.component';
import { MostrarCursosComponent } from './cursos/mostrar-cursos/mostrar-cursos.component';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const ROUTES: Routes = [
  { path: 'cursos', component: MostrarCursosComponent },
  { path: 'curso', component: MostrarCursoComponent },
  { path: '', redirectTo: 'cursos', pathMatch: 'full'},
  { path: '**', redirectTo: 'cursos', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LocationStrategy,
      useClass : HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
