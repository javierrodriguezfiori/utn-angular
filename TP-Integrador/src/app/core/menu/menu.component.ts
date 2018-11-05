import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from 'src/app/model/i-curso';
import { CursoService } from 'src/app/cursos/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id: string;
  cursos: ICurso[];

  constructor(private cursoService: CursoService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id'] );
  }

  ngOnInit() {
    this.cursoService.getCursos().
      subscribe(data => this.cursos = data);
  }

}
