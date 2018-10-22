import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarCursoComponent } from './mostrar-curso/mostrar-curso.component';
import { MostrarCursosComponent } from './mostrar-cursos/mostrar-cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MostrarCursoComponent, MostrarCursosComponent ]
})
export class CursosModule { }
