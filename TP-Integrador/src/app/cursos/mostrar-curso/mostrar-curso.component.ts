import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { ICurso } from 'src/app/model/i-curso';
import { Estado } from 'src/app/model/estado.enum';
import { CursoService } from '../curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-curso',
  templateUrl: './mostrar-curso.component.html',
  styleUrls: ['./mostrar-curso.component.css']
})
export class MostrarCursoComponent implements OnInit {
  @Input() curso: ICurso;
  @HostBinding('attr.class') cssClass;
  @Output() estadoElegido: EventEmitter<Estado>;

  id: string;
  cursos: ICurso[];

  constructor(private cursoService: CursoService, private route: ActivatedRoute) {
    this.estadoElegido = new EventEmitter();
    this.route.params.subscribe(params => this.id = params['id'] );
    this.cursoService.getCursos().
      subscribe(data => this.cursos = data);
  }

  ngOnInit() {
  }

  public cambioEstado(event): void {
    this.cssClass = event.target.value;
    this.estadoElegido.emit(event.target.value);
  }
}

