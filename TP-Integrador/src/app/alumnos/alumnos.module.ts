import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaAlumnosComponent } from './carga-alumnos/carga-alumnos.component';
import { MostrarAlumnosComponent } from './mostrar-alumnos/mostrar-alumnos.component';
import { MostrarAlumnoComponent } from './mostrar-alumno/mostrar-alumno.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CargaAlumnosComponent, MostrarAlumnosComponent, MostrarAlumnoComponent],
  exports: [CargaAlumnosComponent]
})
export class AlumnosModule { }
