// Importacion de modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CursosModule } from './cursos/cursos.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { DocentesModule } from './docentes/docentes.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';

// Importacion para ruteo con Hash
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Importacion de componentes
import { MostrarAlumnoComponent } from './alumnos/mostrar-alumno/mostrar-alumno.component';
import { MostrarDocenteComponent } from './docentes/mostrar-docente/mostrar-docente.component';
import { MostrarCursosComponent } from './cursos/mostrar-cursos/mostrar-cursos.component';
import { MostrarCursoComponent } from './cursos/mostrar-curso/mostrar-curso.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CoreModule,
    SharedModule,
    RoutingModule
  ],
  providers: [
    { provide: LocationStrategy,
      useClass : HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
