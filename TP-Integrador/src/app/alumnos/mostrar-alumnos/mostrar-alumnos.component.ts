import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { IAlumno } from 'src/app/model/i-alumno';

@Component({
  selector: 'app-mostrar-alumnos',
  templateUrl: './mostrar-alumnos.component.html',
  styleUrls: ['./mostrar-alumnos.component.css']
})
export class MostrarAlumnosComponent implements OnInit {

  constructor(private alumnoService: AlumnoService) { 
    this.alumnoService.getCursos().
    subscribe(data => this.alumnos = data);
  }

  alumnos: IAlumno[];
  
  ngOnInit() {
  }

}
