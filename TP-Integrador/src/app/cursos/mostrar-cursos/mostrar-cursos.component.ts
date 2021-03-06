import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ICurso } from 'src/app/model/i-curso';

@Component({
  selector: 'app-mostrar-cursos',
  templateUrl: './mostrar-cursos.component.html',
  styleUrls: ['./mostrar-cursos.component.css']
})
export class MostrarCursosComponent implements OnInit {

  constructor(private cursoService: CursoService) { 
    this.cursoService.getCursos().
      subscribe(data => this.cursos = data);
  }

  cursos: ICurso[];

  ngOnInit() {
  }
}
