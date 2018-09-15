import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from '../i-alumno';

@Component({
  selector: 'app-mostrar-alumno',
  templateUrl: './mostrar-alumno.component.html',
  styleUrls: ['./mostrar-alumno.component.css']
})

export class MostrarAlumnoComponent implements OnInit {
  @Input() alumno;

  constructor() { }

  ngOnInit() {
  }
}
