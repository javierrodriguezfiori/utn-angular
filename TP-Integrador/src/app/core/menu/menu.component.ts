import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from 'src/app/model/i-curso';
import { CursoService } from 'src/app/cursos/curso.service';
import { AlumnoService } from 'src/app/alumnos/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { IAlumno } from 'src/app/model/i-alumno';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id: string;
  cursos: ICurso[];
  alumnos: IAlumno[];

  constructor(private cursoService: CursoService, private route: ActivatedRoute, private alumnoService: AlumnoService) {
    this.route.params.subscribe(params => this.id = params['id'] );
  }

  ngOnInit() {
    this.cursoService.getCursos().
      subscribe(data => this.cursos = data);
    this.alumnoService.getAlumnos().
      subscribe(data => this.alumnos = data);  
  }

}
