import { Component } from '@angular/core';

import { IAlumno } from './model/i-alumno';
import { IDocente } from './model/i-docente';
import { ICurso } from './model/i-curso';
import { Estado } from './model/estado.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TP-Integrador';

  alumno: IAlumno = {
    dni: 34180781,
    nombre: 'Javier',
    apellido: 'Rodriguez'
  };

  docente: IDocente = {
    dni: 34180782,
    nombre: 'Fernando',
    apellido: 'Arias'
  };

  curso: ICurso = {
    titulo: 'Angular',
    estado: Estado.Activo,
  };

  public cambiarEstado(event){
    this.curso.estado = event;
  }
}
