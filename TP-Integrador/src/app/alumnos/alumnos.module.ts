import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaAlumnosComponent } from './carga-alumnos/carga-alumnos.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CargaAlumnosComponent],
  exports: [CargaAlumnosComponent]
})
export class AlumnosModule { }
