import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ICurso } from 'src/app/model/i-curso';
import { IDocente } from 'src/app/model/i-docente';
import { CursosModule } from '../cursos.module';

@Component({
  selector: 'app-mostrar-cursos',
  templateUrl: './mostrar-cursos.component.html',
  styleUrls: ['./mostrar-cursos.component.css']
})
export class MostrarCursosComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  cursos: ICurso[];

  ngOnInit() {
    this.mostrarCursos();
  }

  mostrarCursos() {
    this.cursoService.getCursos()
      .subscribe( (data: ICurso[]) => this.cursos = {...data} );
  }
}
