import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MostrarAlumnoComponent } from './mostrar-alumno/mostrar-alumno.component';
import { MostrarDocenteComponent } from './mostrar-docente/mostrar-docente.component';
import { MostrarCursoComponent } from './mostrar-curso/mostrar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarAlumnoComponent,
    MostrarDocenteComponent,
    MostrarCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
